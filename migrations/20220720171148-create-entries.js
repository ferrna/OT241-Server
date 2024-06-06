"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Entries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      /* categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Category",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }, */
      deletedAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Entries");
  },
};
