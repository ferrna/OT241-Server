'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* activities.belongsTo(models.Categories, { as: "category" }); */
    }
  };
  activities.init({
    name: DataTypes.TEXT,
    image: DataTypes.STRING,
    content: DataTypes.TEXT,
    deletedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'activities',
  });
  return activities;
};