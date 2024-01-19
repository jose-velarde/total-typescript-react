/* eslint-disable @typescript-eslint/no-unused-vars */
import { Reducer, useReducer } from 'react';

type ReducerState = { count: number };
type ReducerAction =
  | { type: 'add'; add: number }
  | { type: 'subtract'; subtract: number };

const reducer: Reducer<ReducerState, ReducerAction> = (state, action) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + action.add };
    case 'subtract':
      return { count: state.count - action.subtract };
    default:
      throw new Error();
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

// @ts-expect-error typo
dispatch({ type: 'SUBTRACT', subtract: 1 });

// @ts-expect-error missing arg
dispatch({ type: 'add' });

// @ts-expect-error wrong arg
dispatch({ type: 'subtract', subtract: '123' });
