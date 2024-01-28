import React from "react";
import ReturnOweStatement from "./ReturnOweStatement";

const TransactionRowHead = ({ name, paidByYou, totalsum }) => {
  return (
    <div>
      <div className="transaction-history-key">
        <h3>
          Transactions with <span className="tag-Friend">{name}</span>
        </h3>
        <ReturnOweStatement
          friend={name}
          paidByYou={paidByYou}
          total={totalsum}
        />
      </div>
    </div>
  );
};

export default TransactionRowHead;
