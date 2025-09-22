import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
