export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false

    }
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Message, {
      foreignKey: 'userId',
      as: 'messages'
    }),
    User.belongsToMany(models.Team, {
      through: 'Member',
      foreignKey: 'userId',
      as: 'members',
      otherKey: 'teamId',
    })
  };
  return User;
};
