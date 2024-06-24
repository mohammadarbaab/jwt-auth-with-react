import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes,Link } from "react-router-dom";
import Home from "./com/Home";
import Login from "./com/Login";
import Dashboard from "./com/Dashboard";
function App() {
  return (
   <div>
     <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            WebSiteName
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
    </div>
   </div>
  );
}

export default App;
