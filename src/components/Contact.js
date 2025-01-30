import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name:'',email:'',work:'',phone:'',message:''
  });
  // const [user,setUser] = useState({
  //   name:'',email:'',phone:'',message:''
  // })
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data
  const fetchUserData = async () => {
    try {
      const response = await fetch("https://mern-project-3-cg8m.onrender.com/contact", {
        method: "GET",
        headers: {
          // Accept: "application/json", Here not cookies send
          "Content-Type": "application/json",
        },
        // credentials: "include", // Here not token send here. Include cookies for authentication
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched user data:", data); // Debugging
      setUserData({...userData,name:data.name,email:data.email,work:data.work,phone:data.phone,message:data.message}); // Set the 'user' part of the response
    } catch (err) {
      console.error("Error fetching user data:", err.message);
      setError("Unauthorized access. Redirecting to Signin...");
      setTimeout(() => navigate("/signin"), 3000); // Redirect after 3 seconds
    } finally {
      setLoading(false);
    }
  };

  // Use effect to call fetchUserData
  useEffect(() => {
    fetchUserData();
  }, []);

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>{error}</div>;
  }

  // Render user profile data

  //handle inputs
  const handleInputs = (e) =>{
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData,[name]:value});
  }

  //postdata here...
  const postData = async (e) =>{
    e.preventDefault();
    const {name,email,work,phone,message} = userData;
    try{
      const res = await fetch('/contact',{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          name,email,work,phone,message
        })
      });

      const data = await res.json();
      if(!data){
        console.log("Message not sent!");
        window.alert("Message not sent.");
      }else{
        console.log("Successfully sent message");
        window.alert("Successfully Sent Message.");
        setUserData({...userData,message:" "});
      }

    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <div className="container">
    <form onSubmit={postData} method="POST">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" name="name" onChange={handleInputs} value = {userData.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" name="email" onChange={handleInputs} value = {userData.email}  className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Phone</label>
    <input type="text" name="phone" onChange={handleInputs} value = {userData.phone}  className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Work</label>
    <input type="text" name="work" onChange={handleInputs} value = {userData.work}  className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>


  <div class="form-floating">
  <textarea class="form-control" name="message" onChange={handleInputs} value={userData.message} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
  <button type="submit"  className="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  );
};

export default Contact;

