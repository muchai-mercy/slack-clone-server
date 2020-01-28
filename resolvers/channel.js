export default {
  Query: {
    getTeamChannels: async (parent, {teamId}, {models}) => {
      try {
        return models.Channel.findAll({
          where: {
            teamId
          }
        })
      } catch(error) {
        return error;
      }
    }
  },
  Mutation: {
    createChannel: (parent, args, {models}) => models.Channel.create(args)
  }
};
