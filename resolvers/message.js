export default {
  Query: {
    getUserMessages: (parent, {userId, channelId} , {models}) => {
      try {
        return models.Message.findAll({
          where: {
            channelId,
            userId
          }
        })
      } catch(error) {
        return error;
      }
    }
  },
  Mutation: {
    createMessage: (parent, args, {models}) => models.Message.create(args)
  }
};
