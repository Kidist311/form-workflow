import React from "react";

export default function PersonalInfo({ input, handleChange, showPassword, togglePasswordVisibility }) {
  return (
    <div>
      <p>Hello, {input.fname} {input.email} {input.age} Selected file: {input.file}</p>

      <input
        type="text"
        name="fname"
        placeholder="Enter your Name"
        value={input.fname}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="email"
        placeholder="Enter your Email"
        value={input.email}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Enter your Age"
        value={input.age}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        value={input.password}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type={showPassword ? "text" : "password"}
        name="confirmPassword"
        placeholder="Confirm password"
        value={input.confirmPassword}
        onChange={handleChange}
      />
      <br /><br />

      <label>
        <input type="checkbox" checked={showPassword} onChange={togglePasswordVisibility} />
        Show Password
      </label>
      <br /><br />

      <textarea
        name="message"
        placeholder="Enter your message"
        value={input.message}
        onChange={handleChange}
      />
      <br /><br />
    </div>
  );
}
