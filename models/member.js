export default (sequelize, DataTypes) => {
  const Member = sequelize.define('member', {
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Member;
};
