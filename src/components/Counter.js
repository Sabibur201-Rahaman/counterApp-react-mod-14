import React, { useRef } from "react";
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment, setCustom } from "../redux/state/counter/CounterSlice";

function Counter() {
  const myNumber=useRef()
  const count=useSelector((state)=>state.counter.value)
  const disPatch=useDispatch()
  return (
    <div className="card">
      <div className="card-header bg-secondary">
      <h3>this is counter app</h3>
      </div>
      <div className="card-body">
        <h1>{count}</h1>
      </div>
     <div className="my-4">
        <button onClick={()=>{disPatch(increment())}} className="btn btn-success">Increase</button>
        
        <button onClick={()=>{disPatch(decrement())}} className="btn btn-danger">Decrese</button>
     </div>
     <div className="my-4">
     <input ref={myNumber} className='form-control w-50 m-4'  type='number'/>
     <button onClick={()=>{disPatch(setCustom(myNumber.current.value))}} className="btn w-50 my-4 btn-danger">set custom</button>

     </div>
    </div>
  );
}

export default Counter;
