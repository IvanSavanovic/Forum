import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Announcements from "./pages/Announcements";

function App() {
    return (
        <Router className="App">
            <Routes>
                <Route path="/" element={<Login />} exact />
                <Route path="/Register" element={<Register />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Announcements" element={<Announcements />} />
                <Route element={Error} />
            </Routes>
        </Router>
    );
}

export default App;
