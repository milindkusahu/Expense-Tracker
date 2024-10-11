# Expense Tracker

## Overview

Expense Tracker is a web application built with React that helps users manage their personal finances by tracking income and expenses. It provides a user-friendly interface for adding, editing, and visualizing financial transactions.

![Expense Tracker Screenshot](https://raw.githubusercontent.com/milindkusahu/Expense-Tracker/refs/heads/main/expensetracker.png)

## Features

- **Wallet Balance Management**: Keep track of your current balance and easily add income.
- **Expense Tracking**: Add, edit, and delete expenses with details like title, amount, category, and date.
- **Visual Summaries**: View your spending habits with intuitive pie and bar charts.
- **Recent Transactions**: Quick access to your latest financial activities.
- **Responsive Design**: Fully functional on both desktop and mobile devices.
- **Data Persistence**: Your financial data is saved in the browser's local storage.

## Technologies Used

- React.js
- HTML5 & CSS3
- JavaScript (ES6+)
- recharts (for data visualization)
- react-modal (for modal dialogs)
- react-icons (for UI icons)
- notistack (for notifications)

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/milindkusahu/Expense-Tracker.git
   ```
2. Navigate to the project directory:

   ```
   cd expense-tracker
   ```
3. Install the dependencies:

   ```
   npm install
   ```
4. Start the development server:

   ```
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173` to view the application.

## Usage

1. **Adding Income**:

   - Click on the "Add Income" button in the Wallet Balance section.
   - Enter the amount in the modal and click "Add Balance".
2. **Adding an Expense**:

   - Click on the "Add Expense" button in the Expenses section.
   - Fill in the expense details (title, amount, category, date) in the modal.
   - Click "Add Expense" to save.
3. **Editing an Expense**:

   - In the Recent Transactions section, click the edit icon next to an expense.
   - Modify the details in the modal and click "Update Expense".
4. **Deleting an Expense**:

   - In the Recent Transactions section, click the delete icon next to an expense.
5. **Viewing Summaries**:

   - The pie chart shows the distribution of expenses by category.
   - The bar chart in the Top Expenses section displays your highest spending categories.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- Thanks to [Recharts](https://recharts.org/) for the charting library.
- Icon assets provided by [React Icons](https://react-icons.github.io/react-icons/).

## Contact

If you have any questions, feel free to reach out to Milind Kumar Sahu at milindsahu2000@gmail.com.

---

Happy expense tracking!
