import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AdditionalInfo from "./AdditionalInfo";
import HobbiesSection from "./HobbiesSection";
import '../styles/Form.css'; // We'll create this CSS file

function Form() {
  const [input, setInput] = useState({
    fname: "",
    email: "",
    age: "",
    message: "",
    password: "",
    confirmPassword: "",
    file: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [topic, setTopic] = useState("");
  const [school, setSchool] = useState("");
  const [company, setCompany] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hobbies, setHobbies] = useState([""]);

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
  const toggleSubmittion = () => setChecked(prev => !prev);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleHobbyChange = (index, event) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies[index] = event.target.value;
    setHobbies(updatedHobbies);
  };

  const addHobbyField = () => setHobbies([...hobbies, ""]);

  const send = (event) => {
    event.preventDefault();

    if (!input.fname || !input.age) return alert("Name and Age are required!");
    if (!input.email.includes("@")) return alert("Invalid email!");
    if (!input.message) return alert("Message is required!");
    if (!checked) return alert("You must agree to terms!");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(JSON.stringify(input, null, 2));
    }, 2000);

    setInput({
      fname: "",
      email: "",
      age: "",
      message: "",
      password: "",
      confirmPassword: "",
      file: "",
    });
    setHobbies([""]);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="form-title">Registration Form</h1>
        <form onSubmit={send} className="form">
          <PersonalInfo
            input={input}
            handleChange={handleChange}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />

          <AdditionalInfo
            topic={topic}
            setTopic={setTopic}
            school={school}
            setSchool={setSchool}
            company={company}
            setCompany={setCompany}
          />

          <HobbiesSection
            hobbies={hobbies}
            handleHobbyChange={handleHobbyChange}
            addHobbyField={addHobbyField}
          />

          <div className="form-group">
            <label className="file-label">
              Upload File
              <input 
                type="file" 
                name="file" 
                onChange={handleChange} 
                className="file-input"
              />
            </label>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                checked={checked} 
                onChange={toggleSubmittion} 
                className="checkbox"
              />
              <span className="checkmark"></span>
              Do you agree to the terms and conditions?
            </label>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          {loading && <div className="loading-spinner"></div>}
        </form>
      </div>
    </div>
  );
}

export default Form;