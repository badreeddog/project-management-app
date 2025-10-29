import "./Home.css";
import { Button } from "react-bootstrap";
import SwimLane from "./SwimLane";
import { useState } from "react";

function Home() {
    const [lanes, setLanes] = useState(["To Do", "In Progress", "Done"]);

    return (
        <>
            <div className="page-header">
                <h1>home</h1>
                <Button variant="light" className="rounded-circle">
                    <i className="bi bi-plus-lg" />
                </Button>
            </div>
            <div className="swim-board">
                {lanes.map((lane, index) =>
                    <SwimLane key={index} laneName={lane} />
                )}
            </div>
        </>
    );
}

export default Home;
