"use strict";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Entries",
      [
        {
          name: "Noticia demo",
          content:
            "Demo Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt repudiandae natus libero ab. Vel dolor doloribus assumenda minus.",
          /* categoryId: 1, */
          type: "news",
          image:
            "8d03d9fdc20331d99e9826a72c4b6448",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Noticia demo dos",
          content:
            "Demo Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt repudiandae natus libero ab. Vel dolor doloribus assumenda minus.",
          /* categoryId: 1, */
          type: "news",
          image:
            "8d03d9fdc20331d99e9826a72c4b6448",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Noticia demo tres",
          content:
            "Demo Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt repudiandae natus libero ab. Vel dolor doloribus assumenda minus.",
          /* categoryId: 1, */
          type: "news",
          image:
            "8d03d9fdc20331d99e9826a72c4b6448",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Noticia demo cuatro",
          content:
            "Demo Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt repudiandae natus libero ab. Vel dolor doloribus assumenda minus.",
          /* categoryId: 1, */
          type: "news",
          image:
            "8d03d9fdc20331d99e9826a72c4b6448",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Entries", {
      [Op.or]: [
        { name: "Noticia demo" },
        { name: "Noticia demo dos" },
        { name: "Noticia demo tres" },
      ],
    });
  },
};
