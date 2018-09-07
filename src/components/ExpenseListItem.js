import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>{description}</Link>
    </h3>
    <p>
      ${(amount / 100).toFixed(2)} - {moment(createdAt).format('DD/MM/YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
