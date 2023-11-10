import React from 'react'
import { Button } from 'react-bootstrap'
import CreateTodo from '../components/Todo/CreateTodo'
import TodoList from '../components/Todo/TodoList'
function Todo() {
  return (
    <div className='container my-5'>
        <div className='row'>
            
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h2>MY todo App</h2>
                    </div>
                    <div className='card-body'>
                        <CreateTodo/>
                        <TodoList/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo
