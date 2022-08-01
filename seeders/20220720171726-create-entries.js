"use strict";

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
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
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
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
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
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
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
