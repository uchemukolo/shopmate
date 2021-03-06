import Validator from 'validator';

const validateInput = (data) => {
  const errors = {};
  const errorMsg = 'This field is required';

  if (Validator.isEmpty(data.name)) {
    errors.name = errorMsg;
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = errorMsg;
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Your email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = errorMsg;
  } else if (data.password.length < 6) {
    errors.password = 'Your password must not be less than 6 characters';
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = errorMsg;
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = 'Your password did not match';
  }

  return {
    errors,
  };
};
export default validateInput;