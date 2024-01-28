import React, { useEffect, useState } from "react";
import TransactionRow from "./TransactionRow";
import TransactionHistory from "./TransactionHistory";
import { getFinalArr } from "../helper";
const NewTransactionDiv = ({ items }) => {
  const [mainArr, setMainArr] = useState([]);

  useEffect(() => {
    const finalArr = getFinalArr();
    setMainArr(finalArr);
    console.log("Bhavya");
  }, [localStorage]);

  return (
    <div>
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
        <h1>No History Found!!</h1>
      )}
    </div>
  );
};

export default NewTransactionDiv;
