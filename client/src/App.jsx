import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Sections from "./pages/Sections";
import Schedule from "./pages/Schedule";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SectionDetails from "./pages/SectionDetails";
import Profile from "./pages/Profile";
import EnrollSection from "./pages/EnrollSection";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <div className="logo">SportClub</div>

          <nav className="nav">
            <Link to="/">Главная</Link>
            <Link to="/sections">Секции</Link>
            <Link to="/schedule">Расписание</Link>
            <Link to="/login">Вход</Link>
            <Link to="/register">Регистрация</Link>
            <Link to="/profile">Личный кабинет</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/sections/:slug" element={<SectionDetails />} />
          <Route path="/sections/:slug/enroll" element={<EnrollSection />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;