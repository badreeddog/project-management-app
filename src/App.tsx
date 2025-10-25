import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { Button } from "react-bootstrap";
import Profile from "./Profile";
import Home from "./Home";

function App() {

  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="app-container">
      <div className="header-section">
        <div className="header-content">
          <Profile />
          <NavBar navItems={["Search", "Home", "Profile"]} activePage={setActivePage} />
        </div>
      </div>
      <section className="content-section">
        <div className="page-content">
          <Home />
        </div>
      </section>
    </div>
  );
}

export default App;
