import React, { useState, useEffect } from 'react';
import './QuestionCard.css';

const QuestionCard = ({ questionsData, score, setScore, count, setCount, modal, setModal }) => {
  const [timer, setTimer] = useState(30);

  const approvedChoice = (e) => {
    console.log(e.currentTarget.value);
    const checkAnswer = e.currentTarget.value === questionsData[count]?.correct_answer;
    console.log(checkAnswer);
    if (checkAnswer) {
      setScore(score + 100);
    }
    if (count < questionsData.length - 1) {
      setCount(count + 1);
      setTimer(30);
    } else {
      setModal(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else if (count < questionsData.length - 1) {
        setCount(count + 1);
        setTimer(30);
      } else {
        setModal(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, count, questionsData, setCount, setModal]);

  return (
    <div className='questionCard'>
      <div className='questionCard-timer'>{timer}</div>
      <div className='questionCard-title'>{count + 1} /10/ {questionsData.length} -{questionsData[count]?.question}</div>
      {questionsData[count]?.answers?.map((answer, i) => (
        <button key={i} onClick={approvedChoice} value={answer}>{answer}</button>
      ))}
    </div>
  );
};

export default QuestionCard;
