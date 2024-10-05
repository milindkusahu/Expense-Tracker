import React from "react";
import styles from "./TopExpenses.module.css";

function TopExpenses({ expenses }) {
  const data = expenses.reduce((acc, expense) => {
    const category = acc.find((item) => item.category === expense.category);
    if (category) {
      category.amount += expense.amount;
    } else {
      acc.push({ category: expense.category, amount: expense.amount });
    }
    return acc;
  }, []);

  data.sort((a, b) => b.amount - a.amount);

  const maxAmount = Math.max(...data.map((item) => item.amount));

  return (
    <div className={styles.topExpensesWrapper}>
      <h2 className={styles.heading}>Top Expenses</h2>
      <div className={styles.topExpenses}>
        <ul className={styles.expenseList}>
          {data.map((item, index) => (
            <li key={index} className={styles.expenseItem}>
              <span className={styles.category}>{item.category}</span>
              <div className={styles.barContainer}>
                <div
                  className={styles.bar}
                  style={{ width: `${(item.amount / maxAmount) * 100}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopExpenses;
