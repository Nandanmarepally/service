import axios from 'axios';

const API_BASE_URL = "https://your-api-domain.com";

export const fetchTransactions = async (params) => {
  return axios.get(`${API_BASE_URL}/transactions`, { params });
};

export const checkTransactionStatus = async (customOrderId) => {
  return axios.get(`${API_BASE_URL}/check-status`, {
    params: { custom_order_id: customOrderId },
  });
};
