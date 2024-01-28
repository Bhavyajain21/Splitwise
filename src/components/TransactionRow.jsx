import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { getFinalArr } from "../helper";

const TransactionRow = ({ name, arr, index, setMainArr }) => {
  const handleTransactionDelete = (i) => {
    console.log(i, name);
    const index = i * 3;
    let getLocalStorageValues = localStorage.getItem(name).split(",");
    console.log("init", getLocalStorageValues);
    getLocalStorageValues.splice(index, 3);
    console.log("after delete", getLocalStorageValues);
    localStorage.setItem(name, getLocalStorageValues);
    if (localStorage.getItem(name) == "") {
      localStorage.removeItem(name);
    }
    let finalArr = getFinalArr();
    console.log(localStorage.getItem(name));
    setMainArr(finalArr);
  };

  return (
    <div>
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
        <div
          onClick={() => handleTransactionDelete(index)}
          className="deleteIcon">
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default TransactionRow;
