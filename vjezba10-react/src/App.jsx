import UserList from "./components/UserList";
import UserAdd from "./components/UserAdd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<UserAdd />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
