npx sequelize-cli db:migrate
npx sequelize-cli migration:create --name modify_users_add_new_fields
npx sequelize-cli seed:generate --name demo-user
