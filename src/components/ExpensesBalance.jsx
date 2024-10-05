import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddExpenseModal from "./AddExpenseModal";

function ExpensesBalance({ expenses, addExpense, balance }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="card expenses-balance">
      <h2>
        Expenses: <span style={{ color: "#ff7043" }}>₹{totalExpenses}</span>
      </h2>
      <button
        className="button button-red"
        onClick={() => setIsModalOpen(true)}
      >
        <FaPlus /> Add Expense
      </button>
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addExpense={addExpense}
        balance={balance}
      />
    </div>
  );
}

export default ExpensesBalance;
