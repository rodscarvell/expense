import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should remove Expense', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should edit expense', () => {
  const action = editExpense(
    { id: '123abc' },
    { description: 'test', amount: 123, createdAt: 100, note: 'test note' }
  );
  expect(action).toEqual({
    id: {
      id: '123abc'
    },
    type: 'EDIT_EXPENSE',
    updates: {
      description: 'test',
      amount: 123,
      createdAt: 100,
      note: 'test note'
    }
  });
});
test('should add new expense with data', () => {
  const expenseData = {
    description: 'test',
    amount: 123,
    createdAt: 100,
    note: 'test note'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
test('should add new expense with defaults', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      amount: 0,
      note: '',
      description: '',
      createdAt: 0
    }
  });
});
