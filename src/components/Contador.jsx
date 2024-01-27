import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, increment5, decrement, decrement5, reset } from '../storeRedux/contadorSlice';


function Contador() {
  
  const contador = useSelector((state)=> state.contador)
  
  const dispatch = useDispatch()
  
  
  return (
    <>
      <h3>Contador: {contador}</h3>
      <button onClick={() => dispatch(increment())}>Sumar</button>
      <button onClick={() => dispatch(increment5(5))}>Sumar 5</button>
      <button onClick={() => dispatch(reset())}>RESETEAR</button>
      <button onClick={() => dispatch(decrement())}>Restar</button>
      <button onClick={() => dispatch(decrement5(5))}>Restar 5</button>
    </>
  );
}
export default Contador; 