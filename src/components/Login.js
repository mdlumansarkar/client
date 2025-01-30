import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const postData = async (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  try {
    // Use environment variable for API URL
    const res = await fetch(`${process.env.REACT_APP_API_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email, 
        password
      }),
      credentials: 'include', // Send cookies (token) with the request
    });

    const data = await res.json();
    
    if (res.status === 422 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Sign-in Successfully.");
      navigate('/'); // Redirect to the homepage or desired page
    }
  } catch (error) {
    console.error('Error:', error);
    window.alert('Something went wrong. Please try again later.');
  }
};

  return (
    <>
      <div className='container'>
        <h2>This is Login Page.</h2>
        <form onSubmit={postData}> {/* Handle form submission here */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label> {/* Use htmlFor here */}
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label> {/* Use htmlFor here */}
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password"
            />
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button> {/* Let form handle the submission */}
        </form>
      </div>
    </>
  );
};

export default Login;













// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// // const User = require('../')

// const Login = () => {
// const [email,setEmail] = useState('');
// const [password,setPassword] = useState('');
//   const navigate = useNavigate();


// const postData = async (e) => {
//   e.preventDefault();
//   const res = await fetch('https://mern-project-3-cg8m.onrender.com/signin',{
//     method:"POST",
//     headers:{
//       "Content-type":"application/json",
      
//     },
//     body:JSON.stringify({
//       email,password
//     }),
//   });

//   const data = await res.json();
//   if(res.status === 422 || !data){
//     window.alert("Invalid Credintials");
//   }
//   else{
//     window.alert("Signin Succesfully.");
//     navigate('/');
//   }
// }
//   return (
//     <>
//     <div className='container'>
//     <h2>This is Login Page.</h2>
//     <form  method='POST'> 
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" name="password" value={password} onChange={(e) =>setPassword(e.target.value)} className="form-control" id="password"/>
//   </div>
  
//   <button type="submit" onClick={postData} className="btn btn-primary">Submit</button>
// </form>

//     </div>
//     </>
      
//   )
// }

// export default Login



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Move this to the top level

//   const PostData = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const data = await res.json();

//       if (res.status === 422 || !data) {
//         window.alert("Invalid Credentials");
//       } else {
//         window.alert("Signin Successfully.");
//         navigate("/");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       window.alert("Something went wrong.");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>This is Login Page.</h2>
//       <form method="POST" onSubmit={PostData}> {/* Attach onSubmit here */}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="form-control"
//             id="email"
//             aria-describedby="emailHelp"
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password" // Corrected name attribute
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="form-control"
//             id="password"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

