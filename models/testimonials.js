'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testimonials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Testimonials.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
      allowNull: false
    },
    imageUrl: DataTypes.STRING,
    content: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      },
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Testimonials',
  });
  return Testimonials;
};