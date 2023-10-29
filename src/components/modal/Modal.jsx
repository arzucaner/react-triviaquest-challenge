import React from 'react'
import './Modal.css';

const Modal = ({ score }) => {
  return (
    <div className='modal'>
      <div className='modal-title'>Skor : {score}</div>
      <div className='modal-btn'>Start again</div>
    </div>
  )
}

export default Modal
