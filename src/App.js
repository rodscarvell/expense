import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 4500,
    createdAt: 1535767200000
  })
);
store.dispatch(
  addExpense({ description: 'Gas bill', createdAt: 1535767200000 })
);
store.dispatch(
  addExpense({ description: 'Rent', amount: 109500, createdAt: 1535767200000 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
