import AboutPage from "./Componets/AboutPage";
import ContactUs from "./Componets/ContactUs";
import Home from "./Componets/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Link to="">Home</Link>
        <Link to="/aboutus">AboutUs</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}
