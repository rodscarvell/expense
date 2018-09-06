import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'text string'
  });
  expect(state.text).toBe('text string');
});

// should set startDate
test('should set startDate', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: 100
  });
  expect(state.startDate).toBe(100);
});

// should set endDate
test('should set startDate', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: 100
  });
  expect(state.endDate).toBe(100);
});
