'use strict';
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert("Testimonials", [{
      name: "Maria Paz",
      imageUrl: "/images/story-author-01.png",
      content: "Participar en los talleres de Somos Más ha sido una experiencia transformadora. He aprendido nuevas habilidades y he conocido a personas maravillosas que me han apoyado en mi desarrollo personal y profesional.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: "Victor Puentes Araya",
      imageUrl: "/images/story-author-02.png",
      content: "Gracias a la jornada de salud organizada por Somos Más por dejarme ser parte de esta iniciativa! Estoy muy agradecido por la oportunidad de colaborar con el apoyo y la atención que recibí.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: "Ana Clara Fillipo",
      imageUrl: "/images/story-author-03.png",
      content: "La campaña de reciclaje en San Telmo no solo ha mejorado nuestro barrio, sino que también nos ha unido como comunidad. Es increíble ver cómo todos colaboramos por un mismo objetivo.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: "Gaston Insaurralde",
      imageUrl: "/images/support_04.jpg",
      content: "El nuevo Centro Comunitario en La Boca es un espacio increíble. Mis hijos están encantados con las actividades y yo he podido asistir a talleres que me han ayudado a mejorar mis habilidades laborales.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     ])},

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Testimonials", {
      [Op.or]: [
        { name: "Maria Paz" },
        { name: "Victor Puentes Araya" },
        { name: "Ana Clara Fillipo" },
        { name: "Gaston Insaurralde" },
      ],
    });
  }
};
