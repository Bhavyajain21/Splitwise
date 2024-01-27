import React from "react";

const ReturnOweStatement = ({ paidByYou, total, friend }) => {
  const paidByFriend = total - paidByYou;
  const splitVal = total / 2;
  return (
    <h4>
      {paidByYou > splitVal ? (
        <span className="friendOwe">
          {" "}
          {friend} owes Rs. {splitVal - paidByFriend}
        </span>
      ) : paidByYou == splitVal ? (
        <span className="settledUp">All Settled Up!!</span>
      ) : (
        <span className="youOwe">you owe Rs. {splitVal - paidByYou}</span>
      )}
    </h4>
  );
};

export default ReturnOweStatement;
