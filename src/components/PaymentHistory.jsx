import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import ReturnOweStatement from "./ReturnOweStatement";
import TotalAmount from "./TotalAmount";

const PaymentHistory = () => {
  const items = { ...localStorage };

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
        <input placeholder="Search History"></input>
      </div>

      {Object.keys(items).map((key) => {
        let totalsum = 0;
        let paidByYou = 0;
        const arr = items[key].split(",");
        const mainArr = [];
        for (let i = 0; i < arr.length; i += 3) {
          const subArr = [];
          subArr.push(arr[i]);
          subArr.push(parseFloat(arr[i + 1]));
          subArr.push(arr[i + 2]);
          if (arr[i + 2] === "You paid") {
            paidByYou += parseFloat(arr[i + 1]);
          }
          totalsum += parseFloat(arr[i + 1]);
          mainArr.push(subArr);
        }

        return (
          <div className="transactions-history">
            <div className="transaction-history-key">
              <h3>
                Transactions with <span className="tag-Friend">{key}</span>
              </h3>
              <ReturnOweStatement
                friend={key}
                paidByYou={paidByYou}
                total={totalsum}
              />
            </div>
            {mainArr.map((arr) => {
              return (
                <div className="upper">
                  <div className="transaction-history-values">
                    <div className="transaction-desc">
                      {arr[0]} - <span className="paid-by">{arr[2]}</span>
                    </div>
                    <div className="transaction-amount">Rs. {arr[1]}</div>
                  </div>
                  <div className="editIcon">
                    <FaRegEdit />
                  </div>
                  <div className="deleteIcon">
                    <MdDelete />
                  </div>
                </div>
              );
            })}
            <TotalAmount total={totalsum} />
            <Link to={"/addTransaction/" + `${key}`}>
              <div className="addMore">
                <Button className="submit-btn">
                  Add More Expenses With {key}
                </Button>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentHistory;
