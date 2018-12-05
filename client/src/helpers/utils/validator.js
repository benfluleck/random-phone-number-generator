const MAXIMUM_LIMIT = 100000;
const MINIMUM_LIMIT = 1;


const hasExceededMaximumLimit = (field) => field < MAXIMUM_LIMIT;

const isBelowMinimumLimit = (field) => field > MINIMUM_LIMIT;

const validator = (data, dataRules, messages) => {
  // Add new rules to the validator function below with it's key
  const rules = {
    upperLimit: hasExceededMaximumLimit,
    lowerLimit: isBelowMinimumLimit,
  };
  const errors = {};

  Object.keys(data).map((key) => {
    dataRules[ key ].map((rule) => {
      if (!rules[ rule ](data[ key ])) {
        errors[ key ] = messages[ key ][ rule ];
      }
    });
  });

  return {
    errors,
    isValid: Object.keys(errors).length < 1,
  };
};


export default validator;
