import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="body">
      <Link to="/addfriend">
        <div className="addFriendBtn">Add Friend</div>
      </Link>
      <Link to="/history">
        <div className="addFriendBtn">Show History</div>
      </Link>
    </div>
  );
};

export default Body;
