import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import "./Profile.css";

function Profile() {
  const [clicked, setClicked] = useState(false);
  const duration = 300;

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), duration);
  };

  return (
    <Button
      variant="link"
      className="p-0 me-4 rounded-circle"
      onClick={handleClick}
    >
      <Image
        className={`profile-image ${clicked ? "profile-animation" : ""}`}
        src="profile-image.jpg"
        alt="Profile"
        width={40}
        height={40}
        roundedCircle
        style={{ "--duration": `${duration}ms` } as React.CSSProperties}
      />
    </Button>
  );
}

export default Profile;
