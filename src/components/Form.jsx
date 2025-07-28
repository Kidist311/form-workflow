import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    function handleChange(event) {
      setName(event.target.value);
    }

    function handleChangeA(event) {
        setAge(event.target.value);
      }

    function submitted(event) {
        if(name === ' ' || age === '') {
            alert('Please fill in all fields');
            event.preventDefault();
        }
    }

    return (
    <div>
        <h1>Registration Form</h1>
      <form className="form"> 
            <label >
            <p>WELCOME {name} , it is your {age}</p><br/>
                
                <input type="text"
                onChange={handleChange}
                placeholder='Enter your Name'
                value ={name}
                /><br/><br/>

               
                <input type="number"
                placeholder='Enter your Age'
                value={age}
                onChange={handleChangeA}
                /><br/><br/>
            <button onClick={submitted}>Submit</button>
            </label>
            
      </form>
    </div>
    )
  }

  export default Form;