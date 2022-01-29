'use strict';
module.exports = (sequelize, DataTypes) => {
  const role_permission = sequelize.define('role_permission', {
    role_id: {
      type: DataTypes.INTEGER,
      references: 'role',
      referencesKey: 'id'
    },
    permission_id: {
      type: DataTypes.INTEGER,
      references: 'permission',
      referencesKey: 'id'
    },
    date_created: DataTypes.DATE,
    date_updated: DataTypes.DATE
  },
    {
      createdAt: 'date_created',
      updatedAt: 'date_updated'
    }
  );
  role_permission.associate = function (models) {
    // associations can be defined here
    role_permission.belongsTo(models.role, { foreignKey: 'role_id' })
    role_permission.belongsTo(models.permission, { foreignKey: 'permission_id' })
  };
  return role_permission;
};