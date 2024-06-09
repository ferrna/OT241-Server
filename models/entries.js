"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Entries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*  static associate(models) {
      Entries.belongsTo(models.Categories, { as: "category" });
    } */
  }
  Entries.init(
    {
      name: DataTypes.TEXT,
      content: DataTypes.TEXT,
      image: DataTypes.STRING /* 
      categoryId: DataTypes.INTEGER, */,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Entries",
    }
  );
  return Entries;
};
