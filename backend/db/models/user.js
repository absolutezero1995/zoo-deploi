"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    },
  );
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
