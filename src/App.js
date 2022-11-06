import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Landing } from "./pages/Landing";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Creation } from "./pages/Creation";
import ResponsiveNavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      {/**
       * Responsive nav bar component
       */}
     <ResponsiveNavBar /> 
     {/**
     * All routes between each page 
  */}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Error />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/creation" element={<Creation />} />
    </Routes>
    </div>
  );
}

export default App;
