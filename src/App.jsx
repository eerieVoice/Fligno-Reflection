import { Header } from "./components/Header";
import Home from "./components/Home";
import Journal from "./components/Journal";
import Profile from "./components/Profile";
import Reflection from "./components/Reflection";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route key="home" path="/" element={<Home />} />
        <Route key="profile" path="/profile" element={<Profile />} />
        <Route key="journal" path="/journal" element={<Journal />} />
        <Route key="reflection" path="/reflection" element={<Reflection />} />
      </Routes>
    </div>
  );
}

export default App;
