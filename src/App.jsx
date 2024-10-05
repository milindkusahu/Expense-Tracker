import React, { useState, useEffect } from "react";
import { SnackbarProvider } from "notistack";
import WalletBalance from "./components/WalletBalance";
import ExpensesBalance from "./components/ExpensesBalance";
import ExpenseSummary from "./components/ExpenseSummary";
import RecentTransactions from "./components/RecentTransactions";
import TopExpenses from "./components/TopExpenses";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(4500);
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Samosa",
      amount: 150,
      category: "Food",
      date: "2024-03-20",
    },
    {
      id: 2,
      title: "Movie",
      amount: 300,
      category: "Entertainment",
      date: "2024-03-21",
    },
    {
      id: 3,
      title: "Auto",
      amount: 50,
      category: "Travel",
      date: "2024-03-22",
    },
  ]);

  useEffect(() => {
    const savedBalance = localStorage.getItem("walletBalance");
    const savedExpenses = localStorage.getItem("expenses");
    if (savedBalance) setBalance(parseFloat(savedBalance));
    if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
  }, []);

  useEffect(() => {
    localStorage.setItem("walletBalance", balance);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [balance, expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
    setBalance((prevBalance) => prevBalance - expense.amount);
  };

  const deleteExpense = (id) => {
    const expense = expenses.find((e) => e.id === id);
    setExpenses(expenses.filter((e) => e.id !== id));
    setBalance((prevBalance) => prevBalance + expense.amount);
  };

  const editExpense = (id, updatedExpense) => {
    const oldExpense = expenses.find((e) => e.id === id);
    setExpenses(
      expenses.map((e) => (e.id === id ? { ...updatedExpense, id } : e))
    );
    setBalance(
      (prevBalance) => prevBalance + oldExpense.amount - updatedExpense.amount
    );
  };

  const addIncome = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="app">
        <h1>Expense Tracker</h1>
        <div className="main-content">
          <div className="top-section">
            <WalletBalance balance={balance} addIncome={addIncome} />
            <ExpensesBalance
              expenses={expenses}
              addExpense={addExpense}
              balance={balance}
            />
            <ExpenseSummary expenses={expenses} />
          </div>
        </div>
        <div className="bottom-section">
          <RecentTransactions
            expenses={expenses}
            deleteExpense={deleteExpense}
            editExpense={editExpense}
          />
          <TopExpenses expenses={expenses} />
        </div>
      </div>
    </SnackbarProvider>
  );
}

export default App;
