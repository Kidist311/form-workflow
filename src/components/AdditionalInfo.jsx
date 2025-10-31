import React from "react";

export default function AdditionalInfo({ topic, setTopic, school, setSchool, company, setCompany }) {
  return (
    <div className="form-section">
      <h3 className="section-title">Additional Information</h3>
      
      <div className="form-group">
        <label className="form-label">Select Your Category</label>
        <select 
          name="topic" 
          value={topic} 
          onChange={(e) => setTopic(e.target.value)}
          className="form-select"
        >
          <option value="">Select Topic</option>
          <option value="student">Student</option>
          <option value="employee">Employee</option>
          <option value="others">Others</option>
        </select>
      </div>

      {topic === "student" && (
        <div className="form-group">
          <label className="form-label">School Name</label>
          <input
            type="text"
            placeholder="Enter your school name"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="form-input"
          />
        </div>
      )}

      {topic === "employee" && (
        <div className="form-group">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            placeholder="Enter your company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="form-input"
          />
        </div>
      )}
    </div>
  );
}