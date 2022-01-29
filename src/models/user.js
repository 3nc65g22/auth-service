"use strict";

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      createdAt: "date_created",
      updatedAt: "date_updated",
    }
  );
  user.associate = function (models) {
    // associations can be defined here
    user.belongsToMany(models.role, {
      through: "user_role",
      foreignKey: "user_id",
    });
  };
  return user;
};
