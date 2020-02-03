import bcrypt from 'bcrypt';
import formatErrors from './helper';

export default {
  Query: {
    getUser: (parent, {id}, {models}) => models.User.findOne({
      where: id
    }),
    getAllUsers: async (parent, args, {models}) => {
      try {
        return await models.User.findAll();
      }
      catch(error) {
        return formatErrors(error, models);
      }
    }
  },

  Mutation: {
    register: async (parent, {password, ...otherArgs}, {models}) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await models.User.create({...otherArgs, password: hashedPassword});
        return {
          isRegistered: true,
          user
        };
      }
      catch(error) {
        return {
          isRegistered: false,
          errors: formatErrors(error, models)
        };
      }
    }
  }
};
