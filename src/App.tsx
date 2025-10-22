import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { Button } from "react-bootstrap";
import Profile from "./Profile";

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
          <div className="d-flex justify-content-between align-items-center">
            <h1>{activePage}</h1>
            <Button variant="light" className="rounded-circle">
              <i className="bi bi-plus-lg" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
