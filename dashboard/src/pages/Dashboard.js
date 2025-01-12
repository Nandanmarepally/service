import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../services/api'; // This should be your function to fetch transaction data
import TransactionsTable from '../components/TransactionsTable'; // Your table component

const Dashboard = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Define columns for the table
  const columns = [
    { Header: "Collect ID", accessor: "collect_id" },
    { Header: "School ID", accessor: "school_id" },
    { Header: "Gateway", accessor: "gateway" },
    { Header: "Order Amount", accessor: "order_amount" },
    { Header: "Transaction Amount", accessor: "transaction_amount" },
    { Header: "Status", accessor: "status" },
    { Header: "Custom Order ID", accessor: "custom_order_id" },
  ];

  // Fetch transactions from the API
  const getTransactions = async () => {
    setLoading(true);
    try {
      const response = await fetchTransactions(); // Assuming this function fetches the transaction data
      setTransactionData(response.data.transactions); // Store the fetched data
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <h1>Transaction Dashboard</h1>
      {loading ? (
        <p>Loading transactions...</p>
      ) : (
        <TransactionsTable columns={columns} data={transactionData} />
      )}
    </div>
  );
};

export default Dashboard;
