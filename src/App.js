import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Blogs from "./components/Routes/Blogs";
import Blog from "./components/Routes/Blog";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>inicio</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
