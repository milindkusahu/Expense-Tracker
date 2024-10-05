import React, { useState } from "react";
import ReactModal from "react-modal";
import { useSnackbar } from "notistack";

function AddExpenseModal({ isOpen, onClose, addExpense, balance }) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.amount && !isNaN(expense.amount)) {
      const amount = parseFloat(expense.amount);
      if (amount > balance) {
        enqueueSnackbar("Expense amount exceeds current balance!", {
          variant: "error",
        });
      } else {
        addExpense({ ...expense, amount });
        enqueueSnackbar("Expense added successfully!", { variant: "success" });
        onClose();
      }
    } else {
      enqueueSnackbar("Please enter a valid amount", { variant: "error" });
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Expense"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={expense.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <select
          name="category"
          value={expense.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Travel">Travel</option>
        </select>
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          required
        />
        <button type="submit" className="button button-red">
          Add Expense
        </button>
        <button type="button" onClick={onClose} className="button">
          Cancel
        </button>
      </form>
    </ReactModal>
  );
}

export default AddExpenseModal;
