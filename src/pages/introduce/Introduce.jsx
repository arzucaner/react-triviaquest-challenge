import React from 'react';
import Dropdown from '../../components/dropdown/Dropdown'
import './Introduce.css'

const Introduce = () => {
    const difficulty = ["easy", "medium", "hard"]
  return (
    <div className='introduce'>
        <div className="introduce-container">
             <img src="/images/logo.png" alt="logo" />
             <Dropdown/>
             <div className='introduce-btn'> Start Quiz</div>
             
        </div>
    </div>
  )
}

export default Introduce