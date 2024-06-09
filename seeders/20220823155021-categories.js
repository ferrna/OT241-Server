'use strict';
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert("categories", [{
      name: "Charla",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: "Paseo",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: "Clase",
      createdAt: new Date(),
      updatedAt: new Date(),
     }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("categories", {
      [Op.or]: [
        { name: "Charla" },
        { name: "Paseo" },
        { name: "Clase" },
      ],
    });
  }
};
