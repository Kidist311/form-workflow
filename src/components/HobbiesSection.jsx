import React from "react";

export default function HobbiesSection({ hobbies, handleHobbyChange, addHobbyField }) {
  return (
    <div>
      <h4>Hobbies</h4>
      {hobbies.map((hobby, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Hobby ${index + 1}`}
            value={hobby}
            onChange={(e) => handleHobbyChange(index, e)}
          />
          <br /><br />
        </div>
      ))}
      <button type="button" onClick={addHobbyField}>
        Add Another Hobby
      </button>
      <br /><br />
    </div>
  );
}
