### Birthday Notification Message

How to run this repository

Clone repositories: `git clone -b master https://github.com/RianKhanafi/birthday-notification.git`

Install dependencies: `yarn install`

Create Mysql database with name: `birthdayNotification`

Migrate tables: `npx sequelize-cli db:migrate` or import `birthdayNotification.sql` file into mysql database

Seed sample data `npx sequelize-cli db:seed:all`

Run `yarn dev`

Api Documentation

Swager: http://localhost:3000/docs/#/

`with node v18.4.0`
