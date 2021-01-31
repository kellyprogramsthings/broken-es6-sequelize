import sequelize from 'sequelize';

export const user = (sequelize, DataTypes) => {
  class User extends sequelize.Model {
    static associate(models) {
      // define association here
    }
  };

  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      defaultValue: sequelize.NOW,
      field: "created_at"
    },
    updatedAt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      defaultValue: sequelize.NOW,
      field: "updated_at"
    }
  }, {
    sequelize,
    modelName: 'users',
  });

  return User;
};