import React,{ useState } from 'react'
import { useEffect } from 'react';
// require('../components/About');

const Home = () => {
  const [user,setUser] = useState({name:'',email:''});

  const homePage = async (req,res) =>{
    try{
      const response = await fetch('https://mern-project-3-cg8m.onrender.com/getData',{
        method:"GET",
        headers:{
          "Content-type":"application/json"
        }

      });

      if(!response){
        console.log("Data not found!");
      }
      
        const data = await response.json();
        console.log(data);
        setUser({...user,name:data.name,email:data.email});
      

    }catch(err){
      console.log(err);
    }

    
  }

  useEffect(() => {
    homePage();
    }, []);

  return (
    <div>
      <h1>This is Home Page</h1>
      <h2>Your name : {user?.name||"user not logged in."}</h2>
      <h4>Your mail : {user?.email||"don't laugh me."}</h4>
      {/* <h2>This is Home Page.</h2> */}
    </div>
  )
}

export default Home
