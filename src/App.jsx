import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/FigmaFile/Login/Login";

import SignUpForm from "./components/FigmaFile/Signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
