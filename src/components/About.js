// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const About = () => {
//   const [userData, setUserData] = useState({});
//   const navigate = useNavigate();

//   const callAboutPage = async () => {
//     try {
//       const res = await fetch("/about", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // Include cookies
//       });

//       if (res.status !== 200) {
//         throw new Error("Unauthorized");
//       }

//       const data = await res.json();
//       setUserData(data); // Save data to state
//     } catch (err) {
//       console.error("Error fetching about data:", err.message);
//       navigate("/signin"); // Redirect if unauthorized
//     }
//   };

//   useEffect(() => {
//     callAboutPage();
//   });

//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>{userData.message}</p>
//       {userData.user && (
//         <div>
//           <p>Name: {userData.user.name}</p>
//           <p>Email: {userData.user.email}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default About;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data
  const fetchUserData = async () => {
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies for authentication
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched user data:", data); // Debugging
      setUserData(data); // Set the 'user' part of the response
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
  return (
    <div className="container emp-profile">
      <form method="GET">
        <div className="row">
          <div className="col-md-4">
            {/* <img
              src={userData?.profilePic || "default-profile.png"}
              alt="Profile"
              className="img-fluid"
            /> */}
          </div>
          <div className="col-md-8">
            <div className="profile-head">
              <h2>User: {userData?.name || "Name not available"}</h2>
              <h4>Email: {userData?.email || "Email not available"}</h4>
              <p>{userData?.work || "No work information available"}</p>
            </div>
          </div>
        </div>

        {/* Cards for additional information */}
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card border-primary mb-3">
              <div className="card-header">Primary Info</div>
              <div className="card-body text-primary">
                <h5 className="card-title">Primary Title</h5>
                <p className="card-text">
                  Some example text for primary information.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-secondary mb-3">
              <div className="card-header">Secondary Info</div>
              <div className="card-body text-secondary">
                <h5 className="card-title">Secondary Title</h5>
                <p className="card-text">
                  Some example text for secondary information.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-success mb-3">
              <div className="card-header">Success Info</div>
              <div className="card-body text-success">
                <h5 className="card-title">Success Title</h5>
                <p className="card-text">
                  Some example text for success information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;






// //perfect work

// import React, { useCallback, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const About = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(' ');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const callAboutPage = useCallback(async () => {
//     try {
//       const res = await fetch("/about", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // Include cookies
//       });

//       if (res.status !== 200) {
//         throw new Error("Unauthorized");
//       }

//       const data = await res.json();
//       if(!data){
//         throw new Error("No data found");
//       }
//       console.log(data);
//       setUserData(data);
//     } catch (err) {
//       console.error(err);
//       setError("Unauthorized access. Redirecting to Signin...");
//       setTimeout(() => navigate("/signin"), 3000); // Redirect after 3 seconds
//       navigate('/signin');
//     } finally {
//       setLoading(false);
//     }
//   }, [navigate]);

//   useEffect(() => {
//     callAboutPage();
//   }, [callAboutPage]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div >{error}</div>;

//   return (



//     <>



//     <div className="container emp-profile" >
//       <form method="GET">
//         <div className="row">
//           <div className="col-md-4">
//             <img
//               src={userData?.profilePic || "default-profile.png"}
//               alt="Profile"
//               className="img-fluid"
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="profile-head">
//               <h1>{userData.name}Name</h1>
//               <h1>{userData.email}Email</h1>
//               {/* <h1>{userData.name}</h1> */}
//               <h3>{userData.name || "User"}</h3>
//               <p>{userData?.email || "example@example.com"}</p>
//               <p>{userData?.bio || "Welcome to your profile!"}</p>

              
// <div className="card border-primary mb-3" >
//   <div className="card-header">Header</div>
//   <div className="card-body text-primary">
//     <h5 className="card-title">Primary card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
// <div className="card border-secondary mb-3" >
//   <div className="card-header">Header</div>
//   <div className="card-body text-secondary">
//     <h5 className="card-title">Secondary card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
// <div className="card border-success mb-3" >
//   <div className="card-header">Header</div>
//   <div className="card-body text-success">
//     <h5 className="card-title">Success card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
// <div className="card border-danger mb-3" >
//   <div className="card-header">Header</div>
//   <div className="card-body text-danger">
//     <h5 className="card-title">Danger card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
// <div className="card border-warning mb-3" >
//   <div className="card-header">Header</div>
//   <div className="card-body">
//     <h5 className="card-title">Warning card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
// <div className="card border-info mb-3" >
//   <div className="card-header">Header</div>
//   <div className="card-body">
//     <h5 className="card-title">Info card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
// <div className="card border-light mb-3" >
//   <div className="card-header">Header</div>
//   <div className="card-body">
//     <h5 className="card-title">Light card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
// <div className="card border-dark mb-3" >
//   <div className="card-header">Header</div>
//   <div className="card-body">
//     <h5 className="card-title">Dark card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>


//     </>
//   );
// };

// export default About;





















// import React, { useCallback, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const About = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(null); // To store user data
//   const [loading, setLoading] = useState(true); // To manage loading state
//   const [error, setError] = useState(null); // To manage error state

//   // Function to fetch the About data
//   const callAboutPage = useCallback(async () => {
//     try {
//       const res = await fetch("/about", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // Include cookies for session-based auth
//       });

//       if (res.status !== 200) {
//         throw new Error("Unauthorized access");
//       }

//       const data = await res.json();
//       setUserData(data); // Store user data
//     } catch (err) {
//       console.error(err);
//       setError("You must be logged in to access this page.");
//       navigate("/signin"); // Redirect to signin if unauthorized
//     } finally {
//       setLoading(false); // Stop loading when done
//     }
//   }, [navigate]);

//   // Call the About API when the component mounts
//   useEffect(() => {
//     callAboutPage();
//   }, [callAboutPage]);

//   // Render loading state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Render error state
//   if (error) {
//     return (
//       <div style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
//         <h2>{error}</h2>
//       </div>
//     );
//   }

//   // Main content of the About page
//   return (
//     <div className="container emp-profile" style={{ padding: "20px" }}>
//       <form method="GET">
//         <div className="row">
//           <div className="col-md-4">
//             <img
//               src={userData?.profilePic || "default-profile.png"} // Example profile picture
//               alt="Profile"
//               className="img-fluid"
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="profile-head">
//               <h3>{userData?.name || "Web Developer"}</h3>
//               <p>{userData?.email || "example@example.com"}</p>
//               <p>
//                 {userData?.bio ||
//                   "This is no matter how to improve ourselves, but also to enhance the pandanomic scenario theme of our section."}
//               </p>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default About;






























// import React, { useEffect, useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const About = () => {
//   const navigate = useNavigate();
//   const [query, setQuery] = useState(""); // For form input
//   const [result, setResult] = useState(""); // For API response

//   // Function to fetch protected "About" page data
//   const callAboutPage = useCallback(async () => {
//     try {
//       const res = await fetch("/about", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });

//       const data = await res.json();
//       console.log(data);

//       if (res.status !== 200) {
//         const error = new Error("Failed to fetch the page");
//         throw error;
//       }
//     } catch (err) {
//       console.error(err);
//       navigate("/signin"); // Redirect to Signin if not authenticated
//     }
//   }, [navigate]);

//   // Call the "About" page API when the component loads
//   useEffect(() => {
//     callAboutPage();
//   }, [callAboutPage]);

//   // Handle form submission for making a GET request
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('/about', {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!res.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const data = await res.json();
//       setResult(data.message || "Success! Data fetched.");
//     } catch (err) {
//       console.error(err);
//       setResult("Error fetching data.");
//     }
//   };

//   return (
//     <div className="about-page" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       {/* Banner Section */}
//       <section className="banner" style={{ textAlign: "center", marginBottom: "20px" }}>
//         <h1>About Us</h1>
//         <p>Welcome to our About Page. Learn more about us and interact with our data!</p>
//       </section>

//       {/* Form Section */}
//       <section className="form-section" style={{ marginBottom: "20px" }}>
//         <h2>Interact with Our API</h2>
//         <form onSubmit={handleFormSubmit} style={{ marginTop: "10px" }}>
//           <label htmlFor="query" style={{ display: "block", marginBottom: "8px" }}>
//             Enter Query:
//           </label>
//           <input
//             type="text"
//             id="query"
//             name="query"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
//           />
//           <button type="submit" style={{ padding: "10px 20px", background: "#007bff", color: "#fff", border: "none" }}>
//             Submit
//           </button>
//         </form>
//       </section>

//       {/* Result Section */}
//       <section className="result-section">
//         <h3>Result:</h3>
//         <p>{result || "No data fetched yet."}</p>
//       </section>
//     </div>
//   );
// };

// export default About;











// import React,{ useEffect,useCallback } from 'react'
// import { useNavigate } from 'react-router-dom';


// const About = () => {
//   const navigate = useNavigate();

  // import React, { useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";


  // const navigate = useNavigate();

  
  // import React, { useEffect, useState } from "react";
  // import { useNavigate,useCallback } from "react-router-dom";
  
  // const About = () => {
    //   const navigate = useNavigate();
    //   const [user, setUser] = useState(null); // To store user data
    //   const [error, setError] = useState(null); // To store any error
    
    //   // Function to call the About API
    //   const callAboutPage = async () => {
      //     try {
        //       const res = await fetch("/about", {
          //         method: "GET",
          //         headers: {
            //           Accept: "application/json",
            //           "Content-Type": "application/json",
            //         },
            //         credentials: "include", // Include cookies for session-based auth
            //       });
            
            //       if (res.status !== 200) {
              //         throw new Error("Unauthorized access");
              //         // navigate("/signin");
              //       }
              
              //       const data = await res.json();
              //       setUser(data); // Store user data
              //       navigate("/about");
              //     } catch (err) {
                //       console.error("Error fetching About data:", err);
                //       setError("You must be logged in to access this page.");
                //       navigate("/signin"); // Redirect to signin if unauthorized
                //     }
                //   };
                
                //   // UseEffect to call the API on component mount
                //   useEffect(() => {
                  //     callAboutPage();
                  //   }, []); // Dependency array is empty to ensure it runs only once
                  
                  //   // Handle form submission (optional, as it uses GET)
                  //   const handleFormSubmit = (e) => {
                    //     e.preventDefault();
                    //     console.log("Form submitted!");
                    //   };
                    
                  
                    
                    
//       const About = useCallback(async () => {
//       const navigate = useNavigate();
//       try {
//         const res = await fetch("/about", {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//         });
  
//         const data = await res.json();
//         console.log(data);
  
//         if (res.status !== 200) {
//           const error = new Error("Failed to fetch the page");
//           throw error;
//         }
//       } catch (err) {
//         console.error(err);
//         navigate("/signin");
//       }
//     }, [navigate]); // Add navigate as a dependency
  
//     useEffect(() => {
//       callAboutPage();
//     }, [callAboutPage]); // No warning now


//     return (
//     <>
//       <div className = "container emp-profile">
//         <form method="GET">
//           <div className="row">
//             <div className="col-md-4">
              
//             </div>
//             <div className="col-md-6">
//               <div className="profile-head">
//                 <h3>Web Developer</h3>
//                 <p> Hello developer,how are you? </p>
//                 <p>This is no matter how to improve ourself,but also need some pandanomic scenerio theme of our section</p>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="profile-head">
//                 <h3>Web Developer</h3>
//                 <p> Hello developer,how are you? </p>
//                 <p>This is no matter how to improve ourself,but also need some pandanomic scenerio theme of our section</p>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="profile-head">
//                 <h3>Web Developer</h3>
//                 <p> Hello developer,how are you? </p>
//                 <p>This is no matter how to improve ourself,but also need some pandanomic scenerio theme of our section</p>
//               </div>
//             </div>
            
//             <div className="col-md-6">
//               <div className="profile-head">
//                 <h3>Web Developer</h3>
//                 <p> Hello developer,how are you? </p>
//                 <p>This is no matter how to improve ourself,but also need some pandanomic scenerio theme of our section</p>
//               </div>
//             </div>

            
            

//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default About;



// export default AboutPage;

