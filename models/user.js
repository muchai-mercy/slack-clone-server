export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Username cannot be empty"
        },
        len: {
          args: [[3, 20]],
          msg: "Username needs to be 3 characters and above"
        },
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [[3, 20]],
          msg: "Email needs to be 3 characters and above"
        },
        notEmpty: {
          args: true,
          msg: "Email cannot be empty"
        },
        isEmail: {
          args: true,
          msg: "Invalid email"
        }
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password cannot be empty"
        },
        len: {
          args: [[5, 50]],
          msg: "Password needs to be 3 characters and above"
        },
      }
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
    }),
    User.belongsToMany(models.Channel, {
      through: 'ChannelMember',
      foreignKey: 'channelId',
      otherKey: 'userId',
      as: 'channelMembers'
    })
  };
  return User;
};
