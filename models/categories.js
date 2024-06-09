'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*  static associate(models) {
      Categories.hasMany(models.Entries, { as: "entries" });
      Categories.hasMany(models.Activities, { as: "activities" });
    } */
    }
  };
  Categories.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        is: /^[a-z ,.'-]+$/i
      },
      allowNull: false
    },
    deletedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};