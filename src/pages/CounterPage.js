import React from 'react'
import Counter from '../components/Counter'

function CounterPage() {
  return (
    <div className='container mt-5'>
        <div className='row d-flex justify-content-center'>
            <div className='col-md-6'>
            <Counter/>
            </div>

        </div>
      
    </div>
  )
}

export default CounterPage
