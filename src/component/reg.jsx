// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// function Signup () {
//   const navigate = useNavigate();
//     const [username, setUsername]=useState('');
//     const [email, setEmail]=useState('');
//     const [password, setPassword]=useState('');
//     const [rePassword, setRepassword]=useState('');
//     const [sign,setSign] = useState([]);


// function handleUserNameChange(e) {
//     setUsername(e.target.value);
//   }
//   function handleEmailChange(e) {
//     setEmail(e.target.value);
//   }
//   function handlePasswordChange(e) {
//     setPassword(e.target.value);
//   }
//   function handleRePasswordChange(e) {
//     setRepassword(e.target.value);
//   }
//   async function handlesubmit() {

//   function handleSignUp() {
//     if(password==rePassword) {
//         setSign({username,email,password,rePassword});
//         const response = await axios.post('http://localhost:5000/reg',{ email, userName, password, rePassword});
// }
// }
// else{
//     alert("sign up failed!");

//     // navigate('log')

// }
    
//     }
// return (
//     <>
//     <h1>Register</h1>
//     <p>UserName</p>
//     <input type = 'text' placeholder="Enter your Name" onChange={handleUserNameChange}/>
//     <p>Email</p>
//     <input type = 'email' placeholder="Enter your Email" onChange={handleEmailChange}/>
//     <p>Password</p>
//     <input type = 'password' placeholder="Enter your Password" onChange={handlePasswordChange}/>
//     <p>Re-Password</p>
//     <input type = 'password' placeholder="Re-enter your Password" onChange={handleRePasswordChange}/>
//     <button onClick={handleSignUp}>SignUp</button>
//     <p>Data: Username : {sign.username}, Email : {sign.email}, Password : {sign.password}, Re-password: {sign.rePassword}</p>
//     </>
// );
// }
// export default Signup;

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRepassword] = useState('');
  const [sign, setSign] = useState({});

  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }
  
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  
  function handleRePasswordChange(e) {
    setRepassword(e.target.value);
  }
  
  async function handleSignUp() {
    if (password === rePassword) {
      setSign({ username, email, password, rePassword });
      // try {
        const response = await axios.post('http://localhost:5000/users', { email, username, password, rePassword });
        // Handle success (e.g., navigate to login page)
        navigate('/log'); // Assuming you want to navigate to a login page after successful registration
      // } catch (error) {
        // Handle error (e.g., show error message)
        console.log(response);
    }
    else {
        alert("Sign up failed!");
      }
    }
  
    return (
    <>
      <h1>Register</h1>
      <p>Username</p>
      <input type='text' placeholder="Enter your Name" onChange={handleUserNameChange} />
      <p>Email</p>
      <input type='email' placeholder="Enter your Email" onChange={handleEmailChange} />
      <p>Password</p>
      <input type='password' placeholder="Enter your Password" onChange={handlePasswordChange} />
      <p>Re-Password</p>
      <input type='password' placeholder="Re-enter your Password" onChange={handleRePasswordChange} />
      <button onClick={handleSignUp}>SignUp</button>
      <p>Data: Username: {sign.username}, Email: {sign.email}, Password: {sign.password}, Re-password: {sign.rePassword}</p>
    </>
  );
}
export default Signup;
