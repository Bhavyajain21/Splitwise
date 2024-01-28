import React, { useEffect, useState } from "react";
import TransactionRow from "./TransactionRow";
import TransactionHistory from "./TransactionHistory";
import { getFinalArr } from "../helper";
import { Link } from "react-router-dom";

const NewTransactionDiv = ({ items }) => {
  const [mainArr, setMainArr] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const finalArr = getFinalArr();
    setMainArr(finalArr);
  }, [localStorage]);

  return (
    <div>
      {mainArr.length != 0 && (
        <div className="transaction-search">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Search History"></input>
        </div>
      )}
      {mainArr.length != 0 ? (
        mainArr.map((arr, index) => {
          let newArr = arr.slice(1);
          let paidByYou = 0;
          let totalsum = 0;
          for (let i = 0; i < newArr.length; i++) {
            if (newArr[i][2] == "You paid") {
              paidByYou += parseFloat(newArr[i][1]);
            }
            totalsum += parseFloat(newArr[i][1]);
          }
          return (
            <TransactionHistory
              name={arr[0]}
              paidByYou={paidByYou}
              totalsum={totalsum}
              mainArr={newArr}
              setMainArr={setMainArr}
              items={items}
            />
          );
        })
      ) : (
        <div className="goHome">
          <h1 className="no-history">No History Found!!</h1>
          <Link to="/"> Go Home </Link>
        </div>
      )}
    </div>
  );
};

export default NewTransactionDiv;
