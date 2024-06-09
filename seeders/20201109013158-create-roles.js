'use strict';
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin',
        description: 'Usuario administrador',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Standard',
        description: 'Usuario regular',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Roles", {
      [Op.or]: [
        { name: "Admin" },
        { name: "Standard" },
      ],
    });
  }
};
