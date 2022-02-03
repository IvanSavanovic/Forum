import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";

function App() {
    return (
        <Router className="App">
            <Routes>
                <Route path="/" element={<Login />} exact />
                <Route path="/Register" element={<Register />} />
                <Route path="/Blog" element={<Blog />} />
                <Route element={Error} />
            </Routes>
        </Router>
    );
}

export default App;
