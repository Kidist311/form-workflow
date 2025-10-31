import React from "react";

export default function PersonalInfo({ input, handleChange, showPassword, togglePasswordVisibility }) {
  return (
    <div className="form-section">
      <div className="user-preview">
        <h3>Preview:</h3>
        <p>Hello, <strong>{input.fname || 'Guest'}</strong> | Email: <strong>{input.email || 'Not provided'}</strong> | Age: <strong>{input.age || 'Not provided'}</strong></p>
        {input.file && <p>Selected file: <strong>{input.file}</strong></p>}
      </div>

      <div className="form-group">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          name="fname"
          placeholder="Enter your Name"
          value={input.fname}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={input.email}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter your Age"
          value={input.age}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
          value={input.password}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Confirm Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm password"
          value={input.confirmPassword}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="checkbox-group">
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            checked={showPassword} 
            onChange={togglePasswordVisibility} 
            className="checkbox"
          />
          <span className="checkmark"></span>
          Show Password
        </label>
      </div>

      <div className="form-group">
        <label className="form-label">Your Message</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          value={input.message}
          onChange={handleChange}
          className="form-textarea"
        />
      </div>
    </div>
  );
}