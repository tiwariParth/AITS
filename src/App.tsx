import "./App.css";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<Blogs />} />
      </Routes>
    </Router>
  );
};

export default App;
