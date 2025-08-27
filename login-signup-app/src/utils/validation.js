export function validateSignup(values) {
  let errors = {};

  // Name: Only alphabets (spaces allowed)
  if (!values.name.trim()) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z ]+$/.test(values.name)) {
    errors.name = "Name must contain only alphabets";
  }

  // Username: Alphanumeric and special characters . _ -
  if (!values.username.trim()) {
    errors.username = "Username is required";
  } else if (!/^[a-zA-Z0-9._-]+$/.test(values.username)) {
    errors.username = "Username can use letters, numbers, . _ - only";
  }

  // Email: Must be a valid Gmail address
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(values.email)) {
    errors.email = "Must be a valid Gmail address (e.g., user@gmail.com)";
  }

  // Phone: +countrycode and 10 digits
  if (!values.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (!/^\+\d{1,3}\d{10}$/.test(values.phone)) {
    errors.phone =
      "Phone must include country code and 10 digits (e.g., +911234567890)";
  }

  // Password: Alphanumeric and special characters . _ -
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!/^[a-zA-Z0-9._-]+$/.test(values.password)) {
    errors.password = "Password can use letters, numbers, . _ - only";
  } else if (values.password === values.username) {
    errors.password = "Password cannot be the same as Username";
  }

  // Confirm Password
  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  return errors;
}

export function validateLogin(values) {
  let errors = {};
  if (!values.username) errors.username = "Username is required";
  if (!values.password) errors.password = "Password is required";
  return errors;
}
