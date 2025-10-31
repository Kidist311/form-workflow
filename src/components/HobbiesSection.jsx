import React from "react";

export default function HobbiesSection({ hobbies, handleHobbyChange, addHobbyField }) {
  return (
    <div className="form-section">
      <h3 className="section-title">Hobbies</h3>
      
      {hobbies.map((hobby, index) => (
        <div key={index} className="form-group">
          <label className="form-label">Hobby {index + 1}</label>
          <input
            type="text"
            placeholder={`Enter hobby ${index + 1}`}
            value={hobby}
            onChange={(e) => handleHobbyChange(index, e)}
            className="form-input"
          />
        </div>
      ))}
      
      <button type="button" onClick={addHobbyField} className="add-hobby-btn">
        + Add Another Hobby
      </button>
    </div>
  );
}