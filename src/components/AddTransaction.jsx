import { useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React from "react";
import { IoMdClose } from "react-icons/io";

const AddTransaction = () => {
  const { transId } = useParams();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [payByMe, setPayByMe] = useState(false);
  const [payByFriend, setPayByFriend] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const handlePayByMe = () => {
    setPayByMe(!payByMe);
    setPayByFriend(false);
  };

  const handlePayByFriend = () => {
    setPayByFriend(!payByFriend);
    setPayByMe(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    if (localStorage.getItem(transId) != null) {
      const currValue = localStorage.getItem(transId);
      const arr = [];
      arr.push(currValue);
      arr.push([description, amount]);
      localStorage.setItem(transId, arr);
      return;
    }
    localStorage.setItem(transId, [description, amount]);
  };

  return (
    <div className="transaction-container">
      <h1 className="transaction-heading">
        Add Transactions with <span className="friendName">{transId}</span>
      </h1>
      <div className="transaction-info">
        <div className="transaction-description">
          <input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"></input>
        </div>
        <div className="transaction-amount">
          <input
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"></input>
        </div>
      </div>
      <button
        disabled={(!description || !amount) && true}
        className={
          !description || !amount
            ? "addTransactionsBtnDefault"
            : "addTransactionsBtn"
        }
        onClick={() => setOpen(true)}>
        Add to Payment History
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="modal-heading">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Select One
            </Typography>
            <div onClick={() => setOpen(false)} className="close-btn">
              <IoMdClose />
            </div>
          </div>

          <div className="pay-container">
            <div
              onClick={handlePayByMe}
              className={!payByMe ? "paidByYou" : "paidByYouSelected"}>
              Paid by you and split equally
            </div>
            <div
              onClick={handlePayByFriend}
              className={
                !payByFriend ? "paidByFriend" : "paidByFriendSelected"
              }>
              Paid by {transId} and split equally
            </div>
          </div>

          {(payByFriend || payByMe) && (
            <Link to="/history">
              <Button onClick={handleSubmit} className="submit-btn">
                Submit
              </Button>
            </Link>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default AddTransaction;