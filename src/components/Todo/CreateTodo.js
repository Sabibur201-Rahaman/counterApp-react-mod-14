import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../../redux/state/todo/TodoSlice";
function CreateTodo() {
  const disPatch=useDispatch()
  const myTodo=useRef()
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <input ref={myTodo} type="text" placeholder="TaskName" className="form-control" />
        </div>
        <div className="container">
            <button onClick={()=>disPatch(AddTodo(myTodo.current.value))} className="btn btn-primary">AddTodo</button>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
