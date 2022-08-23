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
     await queryInterface.bulkInsert("Testimonials", [{
      name: "Maria Paz",
      imageUrl: "bd9e5a8d5c56090104cbaedcc82873ff",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed risus pretium quam. Morbi tempus iaculis urna id volutpat lacus laoreet.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: "Maria Paz",
      imageUrl: "bd9e5a8d5c56090104cbaedcc82873ff",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed risus pretium quam. Morbi tempus iaculis urna id volutpat lacus laoreet.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: "Maria Paz",
      imageUrl: "bd9e5a8d5c56090104cbaedcc82873ff",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed risus pretium quam. Morbi tempus iaculis urna id volutpat lacus laoreet.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: "Maria Paz",
      imageUrl: "bd9e5a8d5c56090104cbaedcc82873ff",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed risus pretium quam. Morbi tempus iaculis urna id volutpat lacus laoreet.",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     ])},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
