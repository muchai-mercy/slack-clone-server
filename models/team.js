export default (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  });
  Team.associate = (models) => {
    Team.hasMany(models.Channel, {
      foreignKey: 'teamId',
      as: 'channels'
    }),
    Team.belongsToMany(models.User, {
      through: 'Member',
      foreignKey: 'teamId',
      as: 'members',
      otherKey: 'userId',
    }),
    Team.belongsTo(models.User, {
      foreignKey: 'owner',
      onDelete: 'CASCADE'
    })
  };
  return Team;
};
