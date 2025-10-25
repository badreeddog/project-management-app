import "./Home.css";
import { Button } from "react-bootstrap";

function Home() {

  return (
    <>
        <div className="page-header">
            <h1>home</h1>
            <Button variant="light" className="rounded-circle">
                <i className="bi bi-plus-lg" />
            </Button>
        </div>
        <div className="swim-board">
            <div className="swim-lane">
                <h6>To Do</h6>
            </div>
            <div className="swim-lane">
                <h6>In Progress</h6>
            </div>
            <div className="swim-lane">
                <h6>Completed</h6>
            </div>
            <div className="swim-lane">
                <h6>Test</h6>
            </div>
            <div className="swim-lane">
                <h6>Test</h6>
            </div>
            <div className="swim-lane">
                <h6>Test</h6>
            </div>
        </div>
    </>
  );
}

export default Home;
