import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoneyCheckAlt } from "react-icons/fa";
import TransactionDiv from "./TransactionDiv";
import NewTransactionDiv from "./NewTransactionDiv";

const PaymentHistory = () => {
  let items = { ...localStorage };
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

      <NewTransactionDiv items={items} />
      {/* <TransactionDiv items={items} /> */}
    </div>
  );
};

export default PaymentHistory;
