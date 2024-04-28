import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/AllPlayers" className="nav-link">
        All Players
      </Link>
      <Link to="/CreateNewPlayer" className="nav-link">
        Create New Player
      </Link>
      <Link to="/SinglePlayer" className="nav-link">
        Single Player
      </Link>
    </div>
  );
};

export default Navigation;
