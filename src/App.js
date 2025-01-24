import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Registration';
import { Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';

// import 'bootstra


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
        {/* <ErrorPage /> */}
    </>
  );
};

export default App;




// {/* // <div>
// //     {/* Hello World!<br> */}
//     <h1>Hello Beauty!</h1>
//     <h1>Hello Beauty!</h1>
// </div> */}









//It the part of JSX...

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;