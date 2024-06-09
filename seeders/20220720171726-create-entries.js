"use strict";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Entries",
      [
        {
          name: "Inauguración del Centro Comunitario en La Boca",
          content:
            "Nos complace anunciar la apertura de nuestro nuevo Centro Comunitario en el barrio de La Boca. Este espacio estará dedicado a ofrecer talleres y actividades para todas las edades, fomentando la inclusión y el desarrollo social. El centro cuenta con instalaciones modernas que incluyen salas de talleres, espacios de recreación y áreas de atención social. Entre las primeras actividades programadas se encuentran clases de arte, apoyo escolar y talleres de oficios. Queremos agradecer a los donantes y voluntarios que hicieron posible la creación de este centro. Esperamos que este nuevo espacio beneficie enormemente a la comunidad local, brindando un lugar seguro y acogedor para aprender y crecer. Invitamos a todos a visitar el centro y participar en las actividades que ofrecemos.",
          /* categoryId: 1, */
          type: "news",
          image:
            "/images/fotos/Foto7.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Campaña de Reciclaje en San Telmo",
          content:
            "Lanzamos nuestra campaña de reciclaje en San Telmo para promover la conciencia ambiental entre los residentes. Esta iniciativa busca reducir los residuos y proteger nuestro entorno. La campaña incluirá actividades como la recolección de residuos reciclables, talleres educativos sobre reciclaje y la instalación de puntos de recolección en diferentes partes del barrio. Muchos vecinos y voluntarios ya se han sumado a la campaña, mostrando un gran compromiso con el medio ambiente. Esperamos alcanzar metas significativas en términos de cantidad de residuos reciclados y crear un impacto positivo en la comunidad. Agradecemos a las organizaciones y empresas que apoyan esta iniciativa. Invitamos a todos los residentes a unirse a esta importante causa y hacer su parte para cuidar nuestro planeta.",
          /* categoryId: 1, */
          type: "news",
          image:
            "/images/fotos/Foto3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Taller de Emprendimiento para Jóvenes",
          content:
            "Nuestro reciente taller de emprendimiento ha capacitado a más de 50 jóvenes en habilidades de negocio y liderazgo. Esta iniciativa busca empoderar a la juventud y brindarles herramientas para su futuro profesional. Durante el taller, se trataron temas como la elaboración de planes de negocio, estrategias de marketing y gestión financiera. Los participantes compartieron sus experiencias y destacaron cómo el taller les ha beneficiado personalmente. Gracias a este programa, muchos jóvenes están ahora más preparados para iniciar sus propios proyectos. Queremos agradecer a los instructores y a las organizaciones que colaboraron para hacer posible este taller. Anunciamos que en el futuro se realizarán más talleres y animamos a los interesados a inscribirse.",
          /* categoryId: 1, */
          type: "news",
          image:
            "/images/fotos/Manos10.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jornada de Salud en Villa Lugano",
          content:
            "Realizamos una jornada de salud en Villa Lugano, ofreciendo consultas médicas gratuitas, talleres de nutrición y actividades de promoción de la salud. Esta jornada se organizó para atender las necesidades de salud de la comunidad y proporcionar acceso a servicios médicos esenciales. Durante el evento, se ofrecieron diversos servicios como consultas médicas, revisiones dentales y vacunaciones. Los residentes que asistieron compartieron historias conmovedoras sobre cómo estas atenciones mejoraron su bienestar. En total, atendimos a un gran número de personas, brindando una amplia gama de servicios. Agradecemos profundamente a los médicos, enfermeras y voluntarios que participaron en esta jornada. Informamos a la comunidad que continuaremos organizando jornadas de salud y animamos a todos a participar en futuras ediciones.",
          /* categoryId: 1, */
          type: "news",
          image:
            "/images/fotos/Foto6.jpg",
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
        { name: "Inauguración del Centro Comunitario en La Boca" },
        { name: "Campaña de Reciclaje en San Telmo" },
        { name: "Taller de Emprendimiento para Jóvenes" },
        { name: "Jornada de Salud en Villa Lugano" },
      ],
    });
  },
};
