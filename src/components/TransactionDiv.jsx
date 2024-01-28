import React from "react";
import TransactionHistory from "./TransactionHistory";
import { fillMainArr } from "../helper.js";

const TransactionDiv = ({ items }) => {
  return (
    <div>
      {Object.keys(items).map((key) => {
        // let { mainArr, paidByYou, totalsum } = fillMainArr(items, key);
        // console.log(mainArr);
      })}
    </div>
  );
};

export default TransactionDiv;
