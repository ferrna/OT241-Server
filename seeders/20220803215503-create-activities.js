'use strict';
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('activities', [{
    name: 'Programas educativos',
    image: '/images/fotos/Foto1.jpg',
    content: 'Mediante nuestros programas educativos, buscamos incrementar la capacidad intelectual, moral y afectiva de las personas de acuerdo con la cultura y las normas de convivencia de la sociedad a la que pertenecen.',
    createdAt: new Date(),
    updatedAt: new Date(),
   }])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("activities", {
      [Op.or]: [
        { name: "Programas educativos" },
      ],
    });
  }
};