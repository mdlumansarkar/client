// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Registration = () => {
//   const navigate = useNavigate();
//   const [user,setUser] = useState({
//     name:' ',email:' ',phone:' ',work:' ',password:' ',cpassword:' '
//   })

//   let name,value;
//   const handleInputs = (e) => {
//     console.log(e);
//     name = e.target.name;
//     value = e.target.value;
//     // const { name, value} = e.target;
//     setUser({
//       ...user, [name]:value
//     })

//   }

//   const postData = async (e) =>{
//     e.preventDefault();
//     const {name,email,phone,work,password,cpassword} = user;

//     const res = await fetch('https://mern-project-3-cg8m.onrender.com/register',{
//       method:"POST",
//       headers:{
//         "Content-type" : "application/json"
//       },
//       body:JSON.stringify({
//         name,email,phone,work,password,cpassword
        
//           // "name":"mdlumansarkar",
//           //   "email": "mdlumansarkar",
//           //   "phone":"583683",
//           //   "work":"dfef",
//           //   "password": "4444",
//           //   "cpassword":"4444"
        
//       }),
//     });
//     const data = await res.json();
//     if(res.status === 422 || !data){
//       window.alert("Invalid Registration.");
//       console.log("Invalid Registration.");
//     }else
//     {
//       window.alert("Registration Succesful.");
//       console.log("Registration Succesful.");
//       navigate('/login');

//     }

//   }
//   return (
//     <>
//     <div className='container'>
//     <h2>This is Ragistration Page.</h2>
//     <form method='post' className='register-form' id='register-form'>
//     <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Name</label>
//     <input required type="text" onChange = {handleInputs} value={user.name} name='name' id='name' placeholder='enter your name...' className="form-control"  aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" onChange = {handleInputs} value={user.email} name='email' id='email' placeholder='enter your email' className="form-control"  aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Phone</label>
//     <input type="text" onChange = {handleInputs} value={user.phone} name='phone' id='phone' required className="form-control"  aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Work</label>
//     <input type="text" onChange = {handleInputs} value={user.work} name='work' id='work' placeholder='your job?' className="form-control"  aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Password</label>
//     <input type="text" value={user.password} name='password'onChange = {handleInputs} id='password' required className="form-control"/>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
//     <input type="text"  onChange = {handleInputs} value={user.cpassword} name='cpassword' id='cpassword' required className="form-control" />
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button onClick={postData} type="submit" id='signup' name='signup' className="btn btn-primary">Submit</button>
// </form>
// </div>
//     </>
    
//   )
// }

// export default Registration




import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Registration = () =>{
  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:'',email:'',phone:'',work:'',password:'',cpassword:''
  })

  let name,value;
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }

  const postData = async (e) =>{
    e.preventDefault();
    const{name,email,work,phone,password,cpassword} = user;
    const res = await fetch('/register',{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        name,email,work,phone,password,cpassword
      }),
    });

    const data = res.json();
    if(res.status === 422 || !data){
      window.alert("Invalid Registration!");
    }else
        {
          window.alert("Registration Succesful.");
          console.log("Registration Succesful.");
          navigate('/signin');
    
        }
  }
  return( 
  <>

  <div className='container'>
    <h2>This is Ragistration Page.</h2>
    <form method='post' className='register-form' id='register-form'>
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input required type="text" onChange = {handleInputs} value={user.name} name='name' id='name' placeholder='enter your name...' className="form-control"  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onChange = {handleInputs} value={user.email} name='email' id='email' placeholder='enter your email' className="form-control"  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Phone</label>
    <input type="text" onChange = {handleInputs} value={user.phone} name='phone' id='phone' required className="form-control"  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Work</label>
    <input type="text" onChange = {handleInputs} value={user.work} name='work' id='work' placeholder='your job?' className="form-control"  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="text" value={user.password} name='password'onChange = {handleInputs} id='password' required className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="text"  onChange = {handleInputs} value={user.cpassword} name='cpassword' id='cpassword' required className="form-control" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={postData} type="submit" id='signup' name='signup' className="btn btn-primary">Submit</button>
</form>
</div>
  
  </>
  )
}

export default Registration

//this is login but i test here just...

// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// // const User = require('../')

// const Login = () => {
// const [email,setEmail] = useState('');
// const [password,setPassword] = useState('');
//   const navigate = useNavigate();


// const PostData = async (e) => {
//   e.preventDefault();
//   const res = await fetch('/signin',{
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
//     <form onSubmit={postData} method='POST'> 
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email"  name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" name='password' value={password} onChange={(e) =>setPassword(e.target.value)} className="form-control" id="password"/>
//   </div>
  
//   <button type="submit" onSubmit={postData} className="btn btn-primary">Submit</button>
// </form>

//     </div>
//     </>
      
//   )
// }

// export default Login






// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Registration = () => {
//   const history = useNavigate;
//   const [user,setUser] = useState({
//     name:'',email:'',phone:'',work:'',password:'',cpassword:''
//   })

//   let name,value;
//   const handleInputs = (e) => {
//     console.log(e);
//     name = e.target.name;
//     value = e.target.value;
//     setUser({
//       ...user, [name]:value
//     })

//   }

//   const postData = async (e) =>{
//     // e.preventDefault();
//     const {name,email,phone,work,password,cpassword} = user;

//     const res = await fetch('http://localhost:3001/register',{
//       method:"POST",
//       headers:{
//         "Content-type" : "application/json"
//       },
//       body:JSON.stringify({
//         name,email,phone,work,password,cpassword
        
//           // "name":"mdlumansarkar",
//           //   "email": "mdlumansarkar",
//           //   "phone":"583683",
//           //   "work":"dfef",
//           //   "password": "4444",
//           //   "cpassword":"4444"
        
//       })
//     });
//     const data = await res.json();
//     if(res.status === 422 || !data){
//       window.alert("Invalid Registration.");
//       console.log("Invalid Registration.");
//     }else
//     {
//       window.alert("Registration Succesful.");
//       console.log("Registration Succesful.");
//       history.push('/login');

//     }

//   }
//   return (
//     <>
//     <div className='container'>
//     <h2>This is Ragistration Page.</h2>
//     <form method='post' className='register-form' id='register-form'>
//     <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Name</label>
//     <input required type="text" onChange = {handleInputs} value={user.name} name='name' id='name' placeholder='enter your name...' className="form-control"  aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" onChange = {handleInputs} value={user.email} name='email' id='email' placeholder='enter your email' className="form-control"  aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Phone</label>
//     <input type="text" onChange = {handleInputs} value={user.phone} name='phone' id='phone' required className="form-control"  aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Work</label>
//     <input type="text" onChange = {handleInputs} value={user.work} name='work' id='work' placeholder='your job?' className="form-control"  aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Password</label>
//     <input type="text" value={user.password} name='password'onChange = {handleInputs} id='password' required className="form-control"/>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
//     <input type="text"  onChange = {handleInputs} value={user.cpassword} name='cpassword' id='cpassword' required className="form-control" />
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button onClick={postData} type="submit" id='signup' name='signup' className="btn btn-primary">Submit</button>
// </form>
// </div>
//     </>
    
//   )
// }

// export default Registration

//It works......

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Registration = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     work: '',
//     password: '',
//     cpassword: ''
//   });

//   // Handle input changes
//   const handleInputs = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value
//     });
//   };

//   // Handle form submission
//   const postData = async (e) => {
//     e.preventDefault(); // Prevent form from refreshing the page
  
//     const { name, email, phone, work, password, cpassword } = user;
  
//     try {
//       const res = await fetch('/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           phone,
//           work,
//           password,
//           cpassword,
//         }),
//       });
  
//       if (!res.ok) {
//         // If the response status is not OK (200-299), show the status and message.
//         const errorData = await res.json();
//         console.error('Error response from server:', errorData);
//         window.alert(`Error: ${errorData.message || 'Registration failed'}`);
//         return;
//       }
  
//       const data = await res.json(); // Parse JSON response from server
  
//       if (res.status === 422 || !data) {
//         console.log('Invalid Registration:', data);
//         window.alert('Invalid Registration');
//       } else {
//         console.log('Registration Successful:', data);
//         window.alert('Registration Successful');
//         navigate('/login'); // Redirect to login page after successful registration
//       }
//     } catch (error) {
//       console.error('Error during registration:', error); // Log the exact error to console for debugging
//       window.alert('Error during registration. Please check the console for more details.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>This is the Registration Page.</h2>
//       <form onSubmit={postData} className="register-form">
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input
//             required
//             type="text"
//             onChange={handleInputs}
//             value={user.name}
//             name="name"
//             id="name"
//             placeholder="Enter your name..."
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input
//             type="email"
//             onChange={handleInputs}
//             value={user.email}
//             name="email"
//             id="email"
//             placeholder="Enter your email"
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="phone" className="form-label">Phone</label>
//           <input
//             type="text"
//             onChange={handleInputs}
//             value={user.phone}
//             name="phone"
//             id="phone"
//             required
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="work" className="form-label">Work</label>
//           <input
//             type="text"
//             onChange={handleInputs}
//             value={user.work}
//             name="work"
//             id="work"
//             placeholder="Your job?"
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type="password"
//             onChange={handleInputs}
//             value={user.password}
//             name="password"
//             id="password"
//             required
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//           <input
//             type="password"
//             onChange={handleInputs}
//             value={user.cpassword}
//             name="cpassword"
//             id="cpassword"
//             required
//             className="form-control"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Registration;










// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Registration = () => {
// //   const navigate = useNavigate();
// //   const [user, setUser] = useState({
// //     name: '', email: '', phone: '', work: '', password: '', cpassword: ''
// //   });

// //   const handleInputs = (e) => {
// //     const { name, value } = e.target;
// //     setUser({ ...user, [name]: value });
// //   };

// //   const postData = async (e) => {
// //     e.preventDefault();
// //     const { name, email, phone, work, password, cpassword } = user;

// //     const res = await fetch('/register', {
// //       method: "POST",
// //       headers: {
// //         "Content-type": "application/json"
// //       },
// //       body: JSON.stringify({ name, email, phone, work, password, cpassword })
// //     });

// //     const data = await res.json();
// //     if (res.status === 422 || !data) {
// //       window.alert("Invalid Registration.");
// //       console.log("Invalid Registration.");
// //     } else {
// //       window.alert("Registration Successful.");
// //       console.log("Registration Successful.");
// //       navigate('/login');
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <h2>This is the Registration Page.</h2>
// //       <form method="post" className="register-form" id="register-form" onSubmit={postData} >
// //         <div className="mb-3">
// //           <label htmlFor="name" className="form-label">Name</label>
// //           <input
// //             type="text"
// //             onChange={handleInputs}
// //             value={user.name}
// //             name="name"
// //             id="name"
// //             placeholder="Enter your name..."
// //             className="form-control"
// //             required
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="email" className="form-label">Email address</label>
// //           <input
// //             type="email"
// //             onChange={handleInputs}
// //             value={user.email}
// //             name="email"
// //             id="email"
// //             placeholder="Enter your email"
// //             className="form-control"
// //             required
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="phone" className="form-label">Phone</label>
// //           <input
// //             type="text"
// //             onChange={handleInputs}
// //             value={user.phone}
// //             name="phone"
// //             id="phone"
// //             className="form-control"
// //             required
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="work" className="form-label">Work</label>
// //           <input
// //             type="text"
// //             onChange={handleInputs}
// //             value={user.work}
// //             name="work"
// //             id="work"
// //             placeholder="Your job?"
// //             className="form-control"
// //             required
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="password" className="form-label">Password</label>
// //           <input
// //             type="password"
// //             onChange={handleInputs}
// //             value={user.password}
// //             name="password"
// //             id="password"
// //             className="form-control"
// //             required
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="cpassword" className="form-label">Confirm Password</label>
// //           <input
// //             type="password"
// //             onChange={handleInputs}
// //             value={user.cpassword}
// //             name="cpassword"
// //             id="cpassword"
// //             className="form-control"
// //             required
// //           />
// //         </div>
// //         <button type="submit" onClick={postData} id="signup" name="signup" className="btn btn-primary">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Registration;























