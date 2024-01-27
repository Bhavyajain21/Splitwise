import React from "react";

const TotalAmount = ({ total }) => {
  return (
    <div className="total">
      <div> Total Transaction </div>
      <div>Rs. {total}</div>
    </div>
  );
};

export default TotalAmount;
