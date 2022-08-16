"use strict";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

var password = "$2a$10$xuyIkqKznI3hEE4N/i0SI.2PASpjFGgHhRHy2zP2AT9Kj6gIMjFAS"

const image =
  "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png";
const values = [
  ["John", "Doe", "johndoe@test.com", password, 1, image],
  ["John2", "Doe", "johndoe2@test.com", password, 1, image],
  ["John3", "Doe", "johndoe3@test.com", password, 1, image],
  ["John4", "Doe", "johndoe4@test.com", password, 1, image],
  ["John5", "Doe", "johndoe5@test.com", password, 1, image],
  ["John6", "Doe", "johndoe6@test.com", password, 1, image],
  ["John7", "Doe", "johndoe7@test.com", password, 1, image],
  ["John8", "Doe", "johndoe8@test.com", password, 1, image],
  ["John9", "Doe", "johndoe9@test.com", password, 1, image],
  ["John10", "Doe", "johndoe10@test.com", password, 1, image],
  ["Ziaja", "Berg", "ziajaberg@test.com", password, 2, image],
  ["Ziaja2", "Berg", "ziajaberg2@test.com", password, 2, image],
  ["Ziaja3", "Berg", "ziajaberg3@test.com", password, 2, image],
  ["Ziaja4", "Berg", "ziajaberg4@test.com", password, 2, image],
  ["Ziaja5", "Berg", "ziajaberg5@test.com", password, 2, image],
  ["Ziaja6", "Berg", "ziajaberg6@test.com", password, 2, image],
  ["Ziaja7", "Berg", "ziajaberg7@test.com", password, 2, image],
  ["Ziaja8", "Berg", "ziajaberg8@test.com", password, 2, image],
  ["Ziaja9", "Berg", "ziajaberg9@test.com", password, 2, image],
  ["Ziaja10", "Berg", "ziajaberg10@test.com", password, 2, image],
];
const users = values.map((val) => ({
  firstName: val[0],
  lastName: val[1],
  email: val[2],
  password: val[3],
  roleId: val[4],
  image: val[5],
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [...users], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", {
      [Op.or]: { email: { [Op.like]: "%@test.com" } },
    });
  },
};
