import bcrypt from 'bcrypt';
import formatErrors from '../formatErrors';

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
        return formatErrors(error);
      }
    }
  },

  Mutation: {
    register: async (parent, {password, username, email}, {models}) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await models.User.create({username, email, password: hashedPassword});
        return {
          isRegistered: true,
          user
        };
      }
      catch(error) {
        return {
          isRegistered: false,
          errors: formatErrors(error)
        };
      }
    }
  }
};
