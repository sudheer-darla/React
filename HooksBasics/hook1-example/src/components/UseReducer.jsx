import { useReducer } from 'react';

/***
 * useReducer
 *   have all the state managment logic of a componet at one place using reducer
 *   you get on;y one disptach function to make all the state mutation.
 *
 *
 */
function CounterUseReducer() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      case 'double':
        return state * 2;
      case 'half':
        return ~~(state / 2);

      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div style={{ color: 'white' }}>{count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('double')}>Double</button>
      <button onClick={() => dispatch('half')}>Half</button>
    </>
  );
}

export default CounterUseReducer;
