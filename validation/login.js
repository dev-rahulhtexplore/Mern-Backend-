// For String Validation
const Validator = require("validator");

// checks value is empty or not
// we use it because valid 
const isEmpty = require("is-empty");


function validateLoginInput(data) {

  let errors = {};
// Convert email and password into strings so we can use validator functions

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

// First check Email is not empty and then check email is valid or not. 
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports=validateLoginInput;