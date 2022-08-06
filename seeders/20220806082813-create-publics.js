"use strict";
const Sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Publics",
      [
        {
          name: "Somos Más",
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          phone: 1160112988,
          address: "",
          email: "somosfundacionmas@gmail.com",
          welcomeTitle: "Hola Bienvenidx",
          welcomeText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, voluptatum provident sequi dolor soluta ea omnis voluptatem, libero beatae eveniet quo ipsa fugiat.",
          welcomeImage:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Publics', null, {});
  }
};
