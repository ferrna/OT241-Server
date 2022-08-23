'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('members', [
      {
      name: 'María Iraola',
      image: '975fa1dd346dbe8220484b1d6ae64838',
      role: 'Presidenta',
      description: "María estudió economía y se especializó en economía para el desarrollo. Comenzó como voluntaria en la fundación y fue quien promovió el crecimiento y la organización de la institución acompañando la transformación de un simple comedor barrial al centro comunitario de atención integral que es hoy en día",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Marita Gomez',
      image: '2ba2da7cead0ef2d6df080e094697280',
      role: 'Fundadora',
      description: "Marita estudió la carrera de nutrición y se especializó en nutrición infantil. Toda la vida fue voluntaria en distintos espacios en el barrio hasta que decidió abrir un comedor propio. Comenzó trabajando con 5 familias y culminó su trabajo transformando Somos Más en la organización que es hoy.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Miriam Rodriguez',
      image: '989724b0620859bff568b36cee98cadb',
      role: 'Terapista Ocupacional',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum at nulla id lacinia. Sed nec ex accumsan, viverra tellus nec, fermentum erat. Sed tincidunt risus molestie sem faucibus, sit amet fermentum.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Cecilia Mendez',
      image: '00a7e0a2392d43304ccdec3487ca35f9',
      role: 'Psicopedagoga',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum at nulla id lacinia. Sed nec ex accumsan, viverra tellus nec, fermentum erat. Sed tincidunt risus molestie sem faucibus, sit amet fermentum.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Mario Fuentes',
      image: 'ccc1086028f85b8d43180401e7322498',
      role: 'Psicólogo',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum at nulla id lacinia. Sed nec ex accumsan, viverra tellus nec, fermentum erat. Sed tincidunt risus molestie sem faucibus, sit amet fermentum.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Rodrigo Fuente',
      image: '9f79631597f42dc5cf194f35dccfc938',
      role: 'Contador',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum at nulla id lacinia. Sed nec ex accumsan, viverra tellus nec, fermentum erat. Sed tincidunt risus molestie sem faucibus, sit amet fermentum.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Maria Garcia',
      image: '901268ec8bc43a0a847a0d9da93e0285',
      role: 'Profesora de Artes Dramáticas',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum at nulla id lacinia. Sed nec ex accumsan, viverra tellus nec, fermentum erat. Sed tincidunt risus molestie sem faucibus, sit amet fermentum.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Marco Fernandez',
      image: '3571914eb4669d861d040f8168d69de7',
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
