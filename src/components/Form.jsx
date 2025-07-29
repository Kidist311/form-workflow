import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Form() {
   
    const [input, setInput]
    = useState({
    fname: '',
    email: '',
    topic: '',
    message: '',
    age:'',

})

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
        }else if(name === "topic"){
            return{
                fname:prevValue.fname,
                email:prevValue.email,
                topic:value,
                
            }
        }else if(name === "message"){
            return{
                fname:prevValue.fname,
                email:prevValue.email,
                topic:prevValue.topic,
                message:value,
            }
        }else if(name === "age"){
                return{
                    fname:prevValue.fname,
                    email:prevValue.email,
                    topic:prevValue.topic,
                    message:prevValue.message,
                    age:value,
                }
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
  }


 

   setInput({
        fname: '',
        email: '',
        message: '',
        age: '',
        topic: '',
    })
     

}

    return (
    <div>
        <h1>Registration Form</h1><br/><br/>
      <form className="form"  onSubmit={send}> 
        
            <label >
            <br/><br/><p>Hello, {input.fname} {input.email} {input.age}</p>
                
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

<select name="topic" value={input.topic} onChange={handleChange}>
                    <option value="feedback">feedback</option>
                    <option value="support">support</option>
                    <option value="others">others</option>
                    <option></option>
                </select><br/><br/>


                <textarea
                type="text"
                name="message"
                placeholder='Enter your message here'
                value={input.message}
                onChange={handleChange}
                />
                <br/><br/>

            <button>Submit</button>
            </label>
            
      </form>
    </div>
    )
} 
  export default Form;