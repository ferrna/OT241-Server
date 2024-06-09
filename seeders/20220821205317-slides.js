'use strict';
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("slides", [{
      imageUrl:"/images/fotos/Foto7.jpg", 
      text:"",
      order: 1,
      organizationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      imageUrl:"/images/story-img-02.jpg",
      text:"",
      order: 2,
      organizationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      imageUrl:"/images/journal-01.jpg",
      text:"",
      order: 3,
      organizationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("slides", {
      [Op.or]: [
        { order: 1 },
        { order: 2 },
        { order: 3 },
      ],
    });
  }
};
