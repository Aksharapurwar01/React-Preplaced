import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data Submitted", formData);
    const isValid = validate();
    if (isValid) {
      console.log("form submitted");
    } else {
      console.log("fail");
    }
  };

  const validate = (event) => {
    let newErrors = {};
    if(!formData.userName){
        newErrors.userName = "User name is required"
    }
    if(!formData.email){
        newErrors.email = "email is required"
    }
    if(!formData.password){
        newErrors.password = "password is required"
    }
    if(!formData.confirmPassword){
        newErrors.confirmPassword = "confirm password is required"
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0 ;
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label>
        UserName:
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
      </label>
      {error.userName}
        </div>
    
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      {error.email}
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      {error.password}
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </label>
      {error.confirmPassword}
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
