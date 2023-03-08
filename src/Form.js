import React,{useState}from 'react';
import './Form.css'

export default function Form() {
  //use state
    const[name,setName]=useState("");
    const[mobile,setMobile]=useState("");
    const[Email,setEmail]=useState("");
    const[password,setpassword]=useState("");

    //use error state
    const [nameError, setNameError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

//statement testing

    const handleNameChange = (event) => {
     
      setName(event.target.value);
      
     
      if (event.target.value.length < 3 ) {
        setNameError('Name must be atleast 3 characters long');
      } else {
        setNameError('');
      }
    };

    const handleMobilNo=(event)=> {
    
      setMobile(event.target.value);
      if(event.target.value.length < 10 || event.target.value.length > 10 ){
        setMobileError('Enter valid mobile number');
      } else {
        setMobileError('');
      }
    };

    const handleEmailChange = (event) => {
     
      setEmail(event.target.value);
      if (!event.target.value.includes('@')) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    };

    const handlePassword=(event)=> {
     
      setpassword(event.target.value)
      if(event.target.value<6){
        setPasswordError('password must should be atleast 6 characters');
      } else {
        setPasswordError('');
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (nameError || emailError || mobileError || passwordError) {
        alert('Please correct the form errors before submitting');
      } else {
        // submit the form data
      }
    };

  
    //form creation
  return (
 
    <form className=' parent' onSubmit={handleSubmit}>
      
        <label htmlFor="name" className='form-label'>Username:</label>
        <input id="name" type="text" name="name" onChange={handleNameChange } value={name} required/><br/>
        <div><small >{nameError}</small></div>

        
        <label htmlFor="mobile"  className='form-label'>Mobile no:</label>
        <input id="mobile" type="number" name="mobile" max="10" onChange={handleMobilNo} value={mobile} required /><br/>
        <div><small >{mobileError}</small></div>
   
         
        <label htmlFor="Email"  className='form-label'>Email:</label>
        <input id="Email" type="email" name="Email"  onChange={handleEmailChange} value={Email} required/><br/>
        <div><small>{emailError}</small></div>
        
         
        <label htmlFor="Password"  className='form-label'>Password:</label>
        <input id="Password" type="password" name="password"   onChange={handlePassword} value={password} required/><br/>
        <div><small>{passwordError}</small></div>
       
        <button type="submit" className='btn btn-primary btn-lg' >submit</button>
    </form>

  )
}
