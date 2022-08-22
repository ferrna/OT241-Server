'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('members', [
      {
      name: 'María Iraola',
      image: '4038752f7d296aec756e9938b93681b0',
      role: 'Presidenta',
      description: "María estudió economía y se especializó en economía para el desarrollo. Comenzó como voluntaria en la fundación y fue quien promovió el crecimiento y la organización de la institución acompañando la transformación de un simple comedor barrial al centro comunitario de atención integral que es hoy en día",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Marita Gomez',
      image: '2bfa925f7022841ca1b4c3e54431631a',
      role: 'Fundadora',
      description: "Marita estudió la carrera de nutrición y se especializó en nutrición infantil. Toda la vida fue voluntaria en distintos espacios en el barrio hasta que decidió abrir un comedor propio. Comenzó trabajando con 5 familias y culminó su trabajo transformando Somos Más en la organización que es hoy.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Miriam Rodriguez',
      image: '8074bdef3ec60a66cff069478130e14e',
      role: 'Terapista Ocupacional',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum at nulla id lacinia. Sed nec ex accumsan, viverra tellus nec, fermentum erat. Sed tincidunt risus molestie sem faucibus, sit amet fermentum.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Cecilia Mendez',
      image: '35fa1abb050b646c843ef1a26150ee9e',
      role: 'Psicopedagoga',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum at nulla id lacinia. Sed nec ex accumsan, viverra tellus nec, fermentum erat. Sed tincidunt risus molestie sem faucibus, sit amet fermentum.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Mario Fuentes',
      image: 'a7be39f693f676ce8650dfc1776ed33f',
      role: 'Psicólogo',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum at nulla id lacinia. Sed nec ex accumsan, viverra tellus nec, fermentum erat. Sed tincidunt risus molestie sem faucibus, sit amet fermentum.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Rodrigo Fuente',
      image: '25b08fbf03657faa9b34f257a6bb49ab',
      role: 'Contador',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum at nulla id lacinia. Sed nec ex accumsan, viverra tellus nec, fermentum erat. Sed tincidunt risus molestie sem faucibus, sit amet fermentum.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Maria Garcia',
      image: '658d00149fd78dfd0f2a417c5776349c',
      role: 'Profesora de Artes Dramáticas',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum at nulla id lacinia. Sed nec ex accumsan, viverra tellus nec, fermentum erat. Sed tincidunt risus molestie sem faucibus, sit amet fermentum.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Marco Fernandez',
      image: '6b2d64adf500be981437a115452be154',
      role: 'Profesor de Educación Física',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum at nulla id lacinia. Sed nec ex accumsan, viverra tellus nec, fermentum erat. Sed tincidunt risus molestie sem faucibus, sit amet fermentum.",
      createdAt: new Date(),
      updatedAt: new Date(),
     }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('members', null, {});
  }
};
