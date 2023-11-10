import React from 'react'

function TodoList() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-4'>
            <table className='table'> 
                <thead>
                    <tr>
                    <th>no</th>
                    <th>TaskName</th>
                    <th>edit</th>
                    <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                    <td>n1</td>
                    <td>taskName</td>
                    <td><button className="btn btn-primary">Edit</button></td>
                    <td><button className='"btn btn-danger"'>Remove</button></td>
                    
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default TodoList
