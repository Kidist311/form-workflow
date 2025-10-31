import React from "react";

export default function AdditionalInfo({ topic, setTopic, school, setSchool, company, setCompany }) {
  return (
    <div>
      <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
        <option value="">Select Topic</option>
        <option value="student">Student</option>
        <option value="employee">Employee</option>
        <option value="others">Others</option>
      </select>
      <br /><br />

      {topic === "student" && (
        <input
          type="text"
          placeholder="Enter your school name"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
      )}

      {topic === "employee" && (
        <input
          type="text"
          placeholder="Enter your company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      )}
      <br /><br />
    </div>
  );
}
