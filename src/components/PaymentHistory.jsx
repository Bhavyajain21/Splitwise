import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoneyCheckAlt } from "react-icons/fa";
import TransactionDiv from "./TransactionDiv";
import NewTransactionDiv from "./NewTransactionDiv";

const PaymentHistory = () => {
  let items = { ...localStorage };
  const [name, setName] = useState("");
  return (
    <div className="history-container">
      <Link to="/addFriend">
        <div className="addExpense">
          <FaMoneyCheckAlt /> <span>Add Expense</span>
        </div>
      </Link>
      <div className="history-heading">
        <h1>
          Transaction <span className="tag">History</span>
        </h1>
      </div>

      <div className="transaction-search">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Search History"></input>
      </div>
      <NewTransactionDiv items={items} />
      {/* <TransactionDiv items={items} /> */}
    </div>
  );
};

export default PaymentHistory;
