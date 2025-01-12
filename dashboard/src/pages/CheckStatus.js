import React, { useState } from 'react';
import { checkTransactionStatus } from '../services/api';

const CheckStatus = () => {
  const [customOrderId, setCustomOrderId] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchStatus = async () => {
    if (!customOrderId) {
      setError("Custom Order ID is required.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await checkTransactionStatus(customOrderId);
      setStatus(response.data.status);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to retrieve transaction status."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Check Transaction Status</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Custom Order ID"
          value={customOrderId}
          onChange={(e) => setCustomOrderId(e.target.value)}
        />
        <button onClick={fetchStatus} disabled={loading}>
          {loading ? "Checking..." : "Check Status"}
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {status && (
        <div>
          <h3>Transaction Status</h3>
          <p>Status: <strong>{status}</strong></p>
        </div>
      )}
    </div>
  );
};

export default CheckStatus;
