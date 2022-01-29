'use strict';
module.exports = (sequelize, DataTypes) => {
  const permission = sequelize.define('permission', {
    name: DataTypes.STRING,
    date_created: DataTypes.DATE,
    date_updated: DataTypes.DATE
  },
    {
      createdAt: 'date_created',
      updatedAt: 'date_updated'
    }
  );
  permission.associate = function (models) {
    // associations can be defined here
    permission.belongsToMany(models.role, { foreignKey: 'permission_id', through: 'role_permission' })
  };
  return permission;
};