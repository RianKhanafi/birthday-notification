"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    const arr = [];
    for (let i = 1; i <= 1; i++) {
      arr.push(
        ...[
          {
            first_name: "Rian",
            last_name: "Khanafi",
            email: "riankhanafi851@gmail.com",
            lat: "-6.202394",
            long: "106.652710",
            send_at: null,
            birth_date: "2001/12/05",
          },
          {
            first_name: "Maya",
            last_name: null,
            email: "maya@gmail.com",
            lat: "-6.202394",
            long: "106.652710",
            send_at: null,
            birth_date: "2000/12/05",
          },
          {
            first_name: "sholeh",
            last_name: "sholihun",
            email: "sholehsholihun@gmail.com",
            lat: "51.507351",
            long: "-0.127758",
            send_at: null,
            birth_date: "2001/12/01",
          },
          {
            first_name: "lisa",
            last_name: "lalalisa",
            email: "lalaisa@gmail.com",
            lat: "-4.269928",
            long: "138.080353",
            send_at: null,
            birth_date: "2001/12/06",
          },
          {
            first_name: "new",
            last_name: "york",
            email: "newyork@gmail.com",
            lat: "40.730610",
            long: "-73.935242",
            send_at: null,
            birth_date: "2001/12/06",
          },
          {
            first_name: "new1",
            last_name: "yor1k",
            email: "newyo1rk@gmail.com",
            lat: "40.730610",
            long: "-73.935242",
            send_at: null,
            birth_date: "2001/11/06",
          },
          {
            first_name: "new1",
            last_name: "yor1k",
            email: "newyo1rk@gmail.com",
            lat: "40.730610",
            long: "-73.935242",
            send_at: null,
            birth_date: "2001/12/04",
          },
        ]
      );
    }
    await queryInterface.bulkInsert("users", arr, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
