import React, { useState } from "react";
import ReactModal from "react-modal";
import { useSnackbar } from "notistack";

function AddIncomeModal({ isOpen, onClose, addIncome }) {
  const [amount, setAmount] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && !isNaN(amount)) {
      addIncome(parseFloat(amount));
      enqueueSnackbar("Income added successfully!", { variant: "success" });
      onClose();
    } else {
      enqueueSnackbar("Please enter a valid amount", { variant: "error" });
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Income"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Add Income</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
        <button type="submit" className="button button-green">
          Add Income
        </button>
        <button type="button" onClick={onClose} className="button">
          Cancel
        </button>
      </form>
    </ReactModal>
  );
}

export default AddIncomeModal;
