import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Filters = ({ onStatusChange, onDateChange }) => {
  return (
    <div>
      <select onChange={(e) => onStatusChange(e.target.value)}>
        <option value="">All Statuses</option>
        <option value="Success">Success</option>
        <option value="Pending">Pending</option>
        <option value="Failed">Failed</option>
      </select>
      <DatePicker
        selectsRange
        onChange={(update) => onDateChange(update)}
        isClearable
      />
    </div>
  );
};

export default Filters;
