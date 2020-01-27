export default (sequelize, DataTypes) => {
  const channelMember = sequelize.define('channelMember', {
    channelId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return channelMember;
};
