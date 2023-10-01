import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserDetails from "./Components/UserDetails";

function App() {

const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/Home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Signup">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={isLoggedIn==="true"?<UserDetails />:<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/UserDetails" element={<UserDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
