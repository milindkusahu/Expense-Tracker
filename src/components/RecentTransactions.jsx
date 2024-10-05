import React, { useState } from "react";
import {
  FaWifi,
  FaGift,
  FaCar,
  FaEdit,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import styles from "./RecentTransactions.module.css";

function RecentTransactions({ expenses, deleteExpense, editExpense }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const getIcon = (category) => {
    switch (category) {
      case "Food":
        return <FaWifi />;
      case "Entertainment":
        return <FaGift />;
      case "Travel":
        return <FaCar />;
      default:
        return <FaWifi />;
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = expenses.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(expenses.length / itemsPerPage);

  return (
    <div className={styles.recentTransactionsWrapper}>
      <h2 className={styles.heading}>Recent Transactions</h2>
      <div className={styles.recentTransactions}>
        <ul className={styles.transactionList}>
          {currentItems.map((expense) => (
            <li key={expense.id} className={styles.transactionItem}>
              <div className={styles.iconContainer}>
                {getIcon(expense.category)}
              </div>
              <div className={styles.transactionDetails}>
                <h3>{expense.title}</h3>
                <p>{new Date(expense.date).toLocaleDateString()}</p>
              </div>
              <div className={styles.amount}>₹{expense.amount}</div>
              <button
                onClick={() => editExpense(expense.id)}
                className={styles.actionButton}
              >
                <FaEdit />
              </button>
              <button
                onClick={() => deleteExpense(expense.id)}
                className={styles.actionButton}
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          <span className={styles.pageNumber}>{currentPage}</span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;
