import {useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';


const Counter = () => {
  
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)

  const dispatch = useDispatch()

  const toggleIncrement = () =>{
    dispatch(counterActions.increment())

  }
  const toggleDecrement = () =>{
    dispatch(counterActions.decrement())
  }

  const increaseByAmount = () => {
    dispatch(counterActions.increase(10))
  }


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };


  return (
    <main className={classes.counter} >
      <h1>Redux Counter</h1>
      <div>
      {show && <div className={classes.value}>{counter}</div>}
      </div>
      <div>
        <button onClick={toggleIncrement}>Increment</button>
        <button onClick={increaseByAmount}>Increase 10</button>
        <button onClick={toggleDecrement}>Decrement</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
