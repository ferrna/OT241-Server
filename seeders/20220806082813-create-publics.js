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
          email: "somosmasot241@gmail.com",
          welcomeTitle: "Hola! Bienvenidx",
          welcomeText: "¡Bienvenidos a Somos Más! Nuestra misión es fortalecer la comunidad a través de la educación, la salud y el apoyo social. Creemos en el poder de la colaboración y en el impacto positivo que podemos lograr juntos. Aquí encontrarás un espacio seguro y acogedor donde puedes participar en una variedad de actividades y talleres diseñados para promover el crecimiento personal y comunitario, ¡juntos somos más fuertes!",
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
