import pick from 'lodash/pick';

const formatErrors = (error, models) => {
  if(error instanceof models.sequelize.ValidationError) {
    return error.errors.map(x => pick(x, ['path', 'message']));
  }
  return error[{path: 'name', message: 'looks like something went wrong'}];
}


export default formatErrors;
