// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate password strength
export const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

// Validate registration data
export const validateRegister = (data) => {
  const errors = [];

  if (!data.email) {
    errors.push("Email is required");
  } else if (!validateEmail(data.email)) {
    errors.push("Invalid email format");
  }

  if (!data.password) {
    errors.push("Password is required");
  } else if (!validatePassword(data.password)) {
    errors.push(
      "Password must be at least 8 characters, contain uppercase, lowercase and number"
    );
  }

  if (!data.full_name) {
    errors.push("Full name is required");
  } else if (data.full_name.length < 2) {
    errors.push("Full name must be at least 2 characters");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Validate login data
export const validateLogin = (data) => {
  const errors = [];

  if (!data.email) {
    errors.push("Email is required");
  } else if (!validateEmail(data.email)) {
    errors.push("Invalid email format");
  }

  if (!data.password) {
    errors.push("Password is required");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
