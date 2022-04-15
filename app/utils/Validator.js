const Response = require('./Response');

const options = {
    abortEarly: false,
    errors: {
      wrap: {
        label: ''
      }
    }
  };
  
module.exports = (schema, part='body') => (req, res, next) => {
    result = schema.validate(req[part], options);

    if(result.error) {
        const errors = [];
        for(const error of result.error.details) {
            errors.push({
                name: error.context.key,
                message: error.message,
            });
        }
        Response(res, {errors}, 422);
    }

    else 
        next();
}