export default (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  Message.associate = (models) => {
    Message.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    }),
    Message.belongsTo(models.Channel, {
      foreignKey: 'channelId',
      onDelete: 'CASCADE'
    })
  };
  return Message;
};
