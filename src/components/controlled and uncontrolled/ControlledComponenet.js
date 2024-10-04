import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update form data state
    setFormData({
      ...formData,
      [name]: value,
    });

    // Real-time validation
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    // Validation logic
    if (name === 'username' && value.trim() === '') {
      newErrors.username = 'Username is required';
    } else {
      delete newErrors.username;
    }

    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      newErrors.email = 'Invalid email format';
    } else {
      delete newErrors.email;
    }

    if (name === 'password' && value.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else {
      delete newErrors.password;
    }

    if (name === 'confirmPassword' && value !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    } else {
      delete newErrors.confirmPassword;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Final validation check
    if (Object.keys(errors).length === 0 && Object.values(formData).every(value => value.trim() !== '')) {
      console.log('Form submitted successfully', formData);
    } else {
      console.log('Please fix the errors before submitting');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;