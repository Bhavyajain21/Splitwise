import React from "react";
import TotalAmount from "./TotalAmount";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TransactionRow from "./TransactionRow";
import TransactionRowHead from "./TransactionRowHead";

const TransactionHistory = ({
  name,
  paidByYou,
  totalsum,
  mainArr,
  setMainArr,
  items,
}) => {
  return (
    <div className="transactions-history">
      <TransactionRowHead
        name={name}
        paidByYou={paidByYou}
        totalsum={totalsum}
      />

      {mainArr.map((arr, index) => {
        return (
          <TransactionRow
            name={name}
            arr={arr}
            index={index}
            setMainArr={setMainArr}
            items={items}
          />
        );
      })}

      <TotalAmount total={totalsum} />

      <Link to={"/addTransaction/" + `${name}`}>
        <div className="addMore">
          <Button className="submit-btn">Add More Expenses With {name}</Button>
        </div>
      </Link>
    </div>
  );
};

export default TransactionHistory;
