import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../api/api';
import './Quiz.css';
import QuestionCard from '../../components/questionCard/QuestionCard';
import Modal from '../../components/modal/Modal';

const Quiz = () => {
    const { difficulty, amount } = useParams();
    const [questionsData, setQuestionsData] = useState([]);
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await api.fetchQuizData(difficulty, amount);
                console.log(data);
                setQuestionsData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData();
    }, [difficulty, amount]);

    const handleModalClose = () => {
        setModal(false);
    };

    return (
        <div className='quiz'>
            {
                modal ? (
                    <Modal score={score} onClose={handleModalClose} />
                ) : (
                    <QuestionCard
                        questionsData={questionsData}
                        score={score}
                        setScore={setScore}
                        count={count}
                        setCount={setCount}
                        modal={modal}
                        setModal={setModal}
                    />
                )}
        </div>
    );
};
export default Quiz;
