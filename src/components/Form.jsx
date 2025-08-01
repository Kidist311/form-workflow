import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Form() {
   
    const [input, setInput]
    = useState({
    fname: '',
    email: '',
    //topic: '',
    message: '',
    age:'',
    password: '',
    confirmPassword: '',

})

const [showPassword, setShowPassword] = useState(false);

function togglePasswordVisibility() {
    setShowPassword(prev => !prev);
  }
 const [topic, setTopic] = useState("");
 const [school, setSchool] = useState("");
 const [company, setCompany] = useState("");
 


function handleChange(event) {
    const {name, value} = event.target;
    setInput(prevValue =>{
        if(name === "fname"){
            return{
                fname:value,
                email:prevValue.email,
                age: prevValue.age,
            };
        }else if(name === "email"){
            return{
                fname:prevValue.fname,
                email:value,
                age: prevValue.age,
            }
        }else if(name === "message"){
            return{
                ...prevValue,
                message:value,
            }
        }else if(name === "age"){
                return{
                    ...prevValue,
                    age:value,
                }
        }else if(name === "password"){
            return{
                ...prevValue,
                password:value,
               
            }
    }else if(name === "confirmPassword"){
        return{
            ...prevValue,
            confirmPassword: value,
        }
    } else if (name === "file") {
        const file = event.target.files[0];
        return {
            ...prevValue,
            file: file ? file.name : "",
        };
    }

    });
}   
function send(event){
    event.preventDefault();

   if(input.fname === '' || input.age === ''){
    alert("input filled missed");
    return;

   }else if(!input.email.includes('@')) {
    alert("Invalid email!");
    return;
  }else if(input.message === ''){
    alert("Message is required!");
    return;
  }else if(!checked){
    alert("You must agree to the terms and conditions!");
    return;
  }
  
  setLoading(true); //display the loading page

    
  setTimeout(() => {
      setLoading(false);  //hide after 2sec
      alert(JSON.stringify(input, null, 2)); 
  }, 2000);
 

   setInput({
        fname: '',
        email: '',
        message: '',
        age: '',
        topic: '',
        password: '',
    confirmPassword: '',
    file: '',
    })
     
    setHobbies([""]);

}

const [checked, setChecked] = useState(false);
function togglesubmittion() {
    setChecked(prev => !prev);
    
  }

const [loading, setLoading] = useState(false);

const [hobbies, setHobbies] = useState([]);
  // ✅ Handle hobby change
  const handleHobbyChange = (index, event) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies[index] = event.target.value;
    setHobbies(updatedHobbies);
};

// ✅ Add another hobby input
const addHobbyField = () => {
    setHobbies([...hobbies, ""]);
};

    return (
    <div>
        <h1>Registration Form</h1> 
      <form className="form"  onSubmit={send}> 
        
            <label >
            <br/><br/><br/><p>Hello, {input.fname} {input.email} {input.age} selected file is  {input.file}</p>
                
                <input type="text"
                name= "fname"
                onChange={handleChange}
                placeholder='Enter your Name'
                value ={input.fname}
                /><br/><br/>

                <input type="text"
                name="email"
                placeholder='Enter your Email'
                value={input.email}
                onChange={handleChange}
                /><br/><br/>
               
                <input type="number"
                name="age"
                placeholder='Enter your Age'
                value={input.age}
                onChange={handleChange}
                /><br/><br/>

                <input type={showPassword ? "text" : "password"}
                name="password"
                placeholder='Enter yourpassword'
                value={input.password}
                onChange={handleChange}
                /><br/><br/>

              <input type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder='confirm Password'
                value={input.confirmPassword}
                onChange={handleChange}
                /><br/><br/>
                
                <label>
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={togglePasswordVisibility}
                     />
                     Show Password
                </label>
                <br/><br/>

                <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
                    <option value="job">job</option>
                    <option value="student">student</option>
                    <option value="others">others</option>
                    <option></option>
                </select><br/><br/>

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
                    <br/><br/>



                <textarea
                type="text"
                name="message"
                placeholder='Enter your message here'
                value={input.message}
                onChange={handleChange}
                />
                <br/><br/>

                <h4>Hobbies</h4>
                    {hobbies.map((hobby, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                placeholder={`Hobby ${index + 1}`}
                                value={hobby}
                                onChange={(e) => handleHobbyChange(index, e)}
                            /><br /><br />
                        </div>
                    ))}
                    <button type="button" onClick={addHobbyField}>Add Another Hobby</button>
                    <br /><br />
                <input type="file"
                    name="file"
                    onChange={handleChange}
                
                /><br/><br/>
                <label>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={togglesubmittion}
                     />
                     do you agree to the term and condition
                </label>
                <br/>

            <button>Submit</button>

            {loading && <p>Loading...</p>}
            </label>
            
      </form>
     
    </div>
    )
} 
  export default Form;