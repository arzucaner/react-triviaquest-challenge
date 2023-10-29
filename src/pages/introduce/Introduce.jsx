import React, { useState } from 'react';
import Dropdown from '../../components/dropdown/Dropdown'
import './Introduce.css'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {
    const difficulty = ["Easy", "Medium", "Hard"]
    const [difficultyChange, setDifficultyChange] = useState('')
    const navigate = useNavigate()
    const TOTAL_QUESTIONS = 10

    console.log(difficultyChange, "difficultyChange");

    const startQuiz = () => {
        if (difficultyChange) {
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
        }
    }
    return (
        <div className='introduce'>
            <div className="introduce-container">
                <img src="/images/logo.png" alt="logo" />
                <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
                <div onClick={startQuiz} className='introduce-btn'> Start Quiz</div>
            </div>
        </div>
    )
}

export default Introduce