"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate({ Photo }) {
      this.hasMany(Photo, { foreignKey: "animal_id" });
    }
  }
  Animal.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING(1000),
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Animal",
    }
  );
  return Animal;
};
