import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import UserForm from "./components/Userfrom";
import Homepage from "./Homepage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<UserForm />} />
        <Route path="/homepage" element={<Homepage />} />
        {/* Add other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
