
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, reset } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function incrementFunc() {
    dispatch(increment());
  }

  function decrementFunc() {
    dispatch(decrement());
  }

  function resetFunc() {
    dispatch(reset());
  }
  return (
    <div className="App">
      <h1>Namaste Dunia!!</h1>
      <h1>React with Redux Toolkit Intro</h1>
      <h1>Basic Counter Application.</h1>
      <button onClick={incrementFunc}>+</button>
      <h1>Count: {count > 0 ? count : 0}</h1>
      <button onClick={decrementFunc}>-</button>
      <button onClick={resetFunc

      }>Reset</button>
    </div>
  );
}

export default App;
