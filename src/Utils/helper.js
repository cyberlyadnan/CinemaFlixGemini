export const validateEmail = (email) => {
    const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return pattern.test(email);
    
  };

  
  export const validatePassword = (password) => {
    // Password must be between 6 to 15 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>,<])(?!.*\s).{6,15}$/;
    return pattern.test(password);
  };

  
  export const validateName = (name) => {
    // Name must contain only alphabetic characters and spaces, and be between 2 to 50 characters long.
    const pattern = /^[A-Za-z\s]{2,50}$/;
    return pattern.test(name);
  };
  