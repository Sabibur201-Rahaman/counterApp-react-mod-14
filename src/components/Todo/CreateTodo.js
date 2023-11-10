import React from "react";

function CreateTodo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <input type="text" placeholder="TaskName" className="form-control" />
        </div>
        <div className="container">
            <button className="btn btn-primary">AddTodo</button>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
