import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const navigate = useNavigate();

    // promises

    useEffect(()=>{
        fetch('https://mern-project-3-cg8m.onrender.com/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-type":"application/json"
            },
            credentials:"include",
        }).then((res) => {
            navigate('/signin',{replace:true});
            if(res.status !== 200){
                const error = new Error(res.error);
            }
        }).catch((err)=>{
            console.log(err);
        });
    });

  return (
    <>
    
    <h1>Logout page</h1>
    </>
  )
}

export default Logout
