"use strict";
const Sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Socials",
      [
        {
          name: "Instagram",
          url:
            "https://www.instagram.com/SomosMás/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Facebook",
          url:
            "https://www.facebook.com/Somos_Más",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Linkedin",
          url:
            "https://www.linkedin.com/company/somosmas/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Twitter",
          url:
            "https://www.twitter.com/somosmas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Socials', null, {});
  }
};

