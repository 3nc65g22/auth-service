'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    name: DataTypes.STRING
  },
    {
      createdAt: 'date_created',
      updatedAt: 'date_updated'
    }
  );
  role.associate = function (models) {
    // associations can be defined here
    role.belongsToMany(models.user, { foreignKey: 'role_id', through: 'user_role' })

    role.belongsToMany(models.permission, { foreignKey: 'role_id', through: 'role_permission' })
  };
  return role;
};