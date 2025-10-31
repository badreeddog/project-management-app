import { useState } from "react";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import "./Styles/App.css";

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
