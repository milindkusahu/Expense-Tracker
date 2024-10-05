import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddIncomeModal from "./AddIncomeModal";

function WalletBalance({ balance, addIncome }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="card wallet-balance">
      <h2>
        Wallet Balance: <span style={{ color: "#8bc34a" }}>₹{balance}</span>
      </h2>
      <button
        className="button button-green"
        onClick={() => setIsModalOpen(true)}
      >
        <FaPlus /> Add Income
      </button>
      <AddIncomeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addIncome={addIncome}
      />
    </div>
  );
}

export default WalletBalance;
