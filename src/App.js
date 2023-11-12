import React from "react";
import Todo from "./pages/TodoPage";
import CounterPage from "./pages/CounterPage";
import CreateTodo from "./components/Todo/CreateTodo";
function App() {
  return (
    <div className="App">
      {/* <CounterPage/> */}
      <Todo/>
    </div>
  );
}

export default App;
