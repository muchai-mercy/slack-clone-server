export default (sequelize, DataTypes) => {
  const Channel = sequelize.define('channel', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    public: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  Channel.associate = (models) => {
    Channel.belongsTo(models.Team, {
      foreignKey: 'teamId',
      onDelete: 'CASCADE'
    })
    Channel.belongsToMany(models.User, {
      through: 'ChannelMember',
      foreignKey: 'channelId',
      otherKey: 'userId',
      as: 'channelMembers'
    })
  };
  return Channel;
};
