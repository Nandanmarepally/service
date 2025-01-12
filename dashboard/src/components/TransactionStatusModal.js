import React, { useState } from 'react';
import { checkTransactionStatus } from '../services/api';

const TransactionStatusModal = () => {
  const [customOrderId, setCustomOrderId] = useState("");
  const [status, setStatus] = useState("");

  const fetchStatus = () => {
    checkTransactionStatus(customOrderId).then((response) =>
      setStatus(response.data.status)
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Custom Order ID"
        value={customOrderId}
        onChange={(e) => setCustomOrderId(e.target.value)}
      />
      <button onClick={fetchStatus}>Check Status</button>
      {status && <p>Status: {status}</p>}
    </div>
  );
};

export default TransactionStatusModal;
