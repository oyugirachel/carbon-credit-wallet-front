import Login from "./login/Login";
//import Dashboard from "./dashboard/Dashboard";
import Home from "./home/Home";
//import Topbar from "./topbar/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Credit from "../src/credit/Credit"

// User registration
import Register from "../src/registration/Register";

function App() {
  return (
   <Router>
    {
      <Routes>
        <Route exact path="/" element={ <Login/> } />

        <Route path="/Dashboard" element= { <Home/> } />

        <Route path="/Register" element={ <Register/> } /> {/* Registration */}\
        <Route path="/Credit" element= { <Credit/> } />

       


      </Routes>

    }

    </Router>

  );
}

export default App;
