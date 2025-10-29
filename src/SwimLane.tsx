import { Button } from "react-bootstrap";
import "./SwimLane.css";

function SwimLane({ laneName }: { laneName: string }) {

    return (
        <div className="swim-lane">
            <div className="swim-header">
                <p>{laneName}</p>
                <Button variant="dark" size="sm">
                    <i className="bi bi-plus-lg" />
                </Button>
            </div>
            <div className="swim-content">
                <p><b>Placeholder content</b></p>
            </div>
        </div>
    );
}

export default SwimLane;
