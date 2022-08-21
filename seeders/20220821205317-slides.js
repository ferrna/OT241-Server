'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("slides", [{
      imageUrl:"http://localhost:3000/images/9b3e66f2a4ac582c6e0e026485b168b6",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      order: 1,
      organizationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      imageUrl:"http://localhost:3000/images/dce2b8d3cf7a8bf71e7f902036e8007f",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      order: 2,
      organizationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      imageUrl:"http://localhost:3000/images/6de4a22690b8caeee0efe6a258a4ba87",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      order: 3,
      organizationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
