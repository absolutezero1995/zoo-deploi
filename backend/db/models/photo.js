"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({ Animal }) {
      this.belongsTo(Animal, { foreignKey: "animal_id" });
    }
  }
  Photo.init(
    {
      animal_id: DataTypes.INTEGER,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Photo",
    },
  );
  return Photo;
};
