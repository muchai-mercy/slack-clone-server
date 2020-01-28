export default {
  Query: {

  },
  Mutation: {
    createChannel: (parent, args, {models}) => models.Channel.create(args)
  }
};
