const db = require("../models");
const Users = db.users;
const { utcToZonedTime, format: formatByTimeZone } = require("date-fns-tz");
const { format } = require("date-fns");
const { find } = require("geo-tz");

const createUser = async (req, res) => {
  const { email } = req.body;

  const userExist = await Users.findOne({ where: { email } });

  if (userExist) {
    return res.status(409).json({ message: "User already exist" });
  }

  try {
    const user = await Users.create(req.body);
    return res.status(200).json({
      success: true,
      message: "Add user successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error add user",
      error: err,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;

  const userExist = await Users.findOne({ where: { id } });

  if (!userExist) {
    return res.status(404).json({ message: "User Not Found" });
  }

  try {
    await Users.destroy({
      where: { id },
    });
    return res.status(200).json({
      success: true,
      message: "Success Delete User",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error Delete User",
      error: err,
    });
  }
};

const editUser = async (req, res) => {
  const { email, id, ...rest } = req.body;

  const userExist = await Users.findOne({ where: { email } });

  if (!userExist) {
    return res.status(409).json({ message: "User not found" });
  }

  try {
    await Users.update({ email, ...rest }, { where: { id } });
    return res.status(200).json({
      success: true,
      message: "Success update user",
      data: req.body,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error",
      error: err,
    });
  }
};

const getUser = async (req, res) => {
  const usersList = await Users?.findAll({
    where: {
      send_at: {
        [Op.is]: null,
      },
    },
  });

  return res.status(200).json({
    success: true,
    message: "Success update user",
    data: usersList,
  });
};

const sendEmail = async (elm) => {
  await fetch("https://email-service.digitalenvision.com.au/send-email", {
    Method: "POST",
    Headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    Body: {
      email: elm?.email,
      message: `Hey, ${elm?.first_name} ${elm?.last_name} it's your birthday”`,
    },
    Cache: "default",
  });
  await Users.update({ send_at: new Date() }, { where: { id: elm.id } });
  return "Email sent";
};

const mappingBirthday = async (usersList) => {
  try {
    const status = await Promise.all(
      usersList.map((elm) => {
        const date = new Date();
        const timeZone = find(elm.lat, elm.long)[0];
        const zonedDate = utcToZonedTime(date, timeZone);

        const pattern = "HH";
        const output = formatByTimeZone(zonedDate, pattern, {
          timeZone: timeZone,
        });

        // send all message every 9 am by user timeZone includes unsent message
        if (output === "12") return sendEmail(elm);
        return `will send at 09am ${timeZone}`;
      })
    );
    console.log(status);
  } catch (err) {
    console.log(err);
  }
};

const runBirthdayNotificaton = async (req, res) => {
  const date = new Date();
  date.setDate(date.getDate() - 1);

  const usersList = await Users?.findAll({
    where: {
      send_at: {
        [Op.is]: null,
      },
      birth_date: {
        [Op.between]: [
          // ex: for a period a day
          // for check unsent email
          format(date, "yyyy-MM-dd") + " 00:00:00",
          format(new Date(), "yyyy-MM-dd") + " 23:59:59",
        ],
      },
    },
  });

  mappingBirthday(usersList);
};

const cron = require("node-cron");
const { Op } = require("sequelize");

// every 1 hour
cron.schedule("0 * * * *", function () {
  runBirthdayNotificaton();
});

module.exports = { deleteUser, createUser, getUser, editUser };
