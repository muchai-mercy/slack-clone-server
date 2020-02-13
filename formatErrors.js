import _ from 'lodash';
import ValidationError from 'sequelize/lib/errors/validation-error';


const formatErrors = (error) => {
  if(error instanceof ValidationError) {
    return error.errors.map(error => {
      return _.pick(error, ['path', 'message'])
    });
  }
  return [{path: 'name', message: 'something happened'}];
}

export default formatErrors;
