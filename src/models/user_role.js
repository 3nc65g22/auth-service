'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_role = sequelize.define('user_role', {
    user_id: {
      type: DataTypes.INTEGER,
      references: 'user',
      referencesKey: 'id'
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: 'role',
      referencesKey: 'id'
    }
  },
    {
      createdAt: 'date_created',
      updatedAt: 'date_updated'
    }
  );
  user_role.associate = function (models) {
    // associations can be defined here
    user_role.belongsTo(models.user, {foreignKey: 'user_id'})
    user_role.belongsTo(models.role, {foreignKey: 'role_id'})
  };
  return user_role;
};