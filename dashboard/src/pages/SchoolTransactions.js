import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../services/api'; // Your API call to fetch transactions
import TransactionsTable from '../components/TransactionsTable'; // Your table component

const SchoolTransactions = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Define the columns for your table
  const columns = [
    { Header: "Collect ID", accessor: "collect_id" },
    { Header: "School ID", accessor: "school_id" },
    { Header: "Gateway", accessor: "gateway" },
    { Header: "Order Amount", accessor: "order_amount" },
    { Header: "Transaction Amount", accessor: "transaction_amount" },
    { Header: "Status", accessor: "status" },
    { Header: "Custom Order ID", accessor: "custom_order_id" },
  ];

  // Fetch the transactions for a specific school_id
  const getTransactions = async () => {
    setLoading(true);
    try {
      const response = await fetchTransactions(); // Assuming fetchTransactions is your API call
      setTransactionData(response.data.transactions); // Update the state with fetched data
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
      <h1>School Transactions</h1>
      {loading ? (
        <p>Loading transactions...</p>
      ) : (
        <TransactionsTable columns={columns} data={transactionData} />
      )}
    </div>
  );
};

export default SchoolTransactions;
