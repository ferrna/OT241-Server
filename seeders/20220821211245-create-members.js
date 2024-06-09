'use strict';
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('members', [
      {
      name: 'Cecilia Mendez',
      image: '/images/miembros/CeciliaMendez.jpeg',
      role: 'Presidente',
      description: "Cecilia estudió economía y se especializó en economía para el desarrollo. Comenzó como voluntaria en la fundación y fue quien promovió el crecimiento y la organización de la institución acompañando la transformación de un simple comedor barrial al centro comunitario de atención integral que es hoy en día",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Miriam Rodriguez',
      image: '/images/miembros/MiriamRodriguez.jpg',
      role: 'Fundadora',
      description: "Marita estudió la carrera de nutrición y se especializó en nutrición infantil. Toda la vida fue voluntaria en distintos espacios en el barrio hasta que decidió abrir un comedor propio. Comenzó trabajando con 5 familias y culminó su trabajo transformando Somos Más en la organización que es hoy.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Marco Fernandez',
      image: '/images/miembros/MarcoFernandez.jpg',
      role: 'Terapista Ocupacional',
      description: "",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'María Irola',
      image: '/images/miembros/MariaIrola.jpg',
      role: 'Psicopedagoga',
      description: "",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'María Garcia',
      image: '/images/miembros/MariaGarcia.jpg',
      role: 'Profesora de Artes Dramáticas',
      description: "",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Marita Gomez',
      image: '/images/miembros/MaritaGomez.jpeg',
      role: 'Psicóloga',
      description: "",
      createdAt: new Date(),
      updatedAt: new Date(),
     }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("members", {
      [Op.or]: [
        { name: "Cecilia Mendez" },
        { name: "Miriam Rodriguez" },
        { name: "Marco Fernandez" },
        { name: "María Garcia" },
        { name: "María Irola" },
        { name: "Marita Gomez" },
      ],
    });
  }
};
