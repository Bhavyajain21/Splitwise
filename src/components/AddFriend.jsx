import { useState } from "react";
import { Link } from "react-router-dom";

const AddFriend = () => {
  const [name, setName] = useState("");
  return (
    <div className="addFriendBody">
      <div className="input-container">
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          value={name}
        />
      </div>
      <Link to={"/addTransaction/" + `${name}`}>
        <button
          disabled={!name && true}
          className={
            !name ? "addTransactionsBtnDefault" : "addTransactionsBtn"
          }>
          Add Transactions
        </button>
      </Link>
    </div>
  );
};

export default AddFriend;
