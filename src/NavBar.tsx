import { useState } from "react";
import "./NavBar.css";

function NavBar({ navItems, defaultItemIndex = 1, activePage }: { navItems: string[], defaultItemIndex?: number, activePage: (pageName: string) => void }) {

  const [activeIndex, setActiveIndex] = useState(defaultItemIndex);

  const handlePageChange = (index: number) => {
    setActiveIndex(index);
    activePage(navItems[index]);
  }

  return (
    <ul className="pill-nav" style={{ "--count": navItems.length, "--i": activeIndex } as React.CSSProperties} >
        {navItems.map((item, index) => (
            <li key={index} className={`nav-item ${activeIndex === index ? "active" : ""}`} onClick={() => handlePageChange(index)} >
                {item}
            </li>
        ))}
        <span className="pill-slider" aria-hidden />
    </ul>
  );
}

export default NavBar;
