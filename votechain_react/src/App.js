import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Login from "./Components/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HeroPage from "./Components/HeroPage/HeroPage";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<>
            <HeroPage/>
          </>}/>
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
