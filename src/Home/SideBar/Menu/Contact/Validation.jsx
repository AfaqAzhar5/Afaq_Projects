const Validation = (values) => {
  //For Email Syntax Validation
  let regex = /[a-zA-z0-9._%+=]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

  let errors = {};

  if (!values.username) {
    errors.username = "Name is Required";
    // console.log("errors", "Name is Rewuired");
  } else if (values.username.length < 5) {
    errors.username = "More than 5 Words";
  } else {
    errors.username = "";
  }

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!regex.test(values.email)) {
    errors.email = "Enter Valid Email";
  } else {
    errors.email = "";
  }

  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 5) {
    errors.password = "More than 5 Letters";
  } else if (values.password.length > 13) {
    errors.password = "Password Exceed";
  } else {
    errors.password = "";
  }

  return errors;
};

export default Validation;
