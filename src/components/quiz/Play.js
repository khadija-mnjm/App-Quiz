import React, { useState, useEffect } from 'react';
import questions from './questions.json';
import '../play.css';

const Play = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [users, setUsers] = useState([
        { id: 1, name: 'Player 1', score: 0, questionsAnswered: 0, answers: [] },
        { id: 2, name: 'Player 2', score: 0, questionsAnswered: 0, answers: [] },

    ]);
    const [showResult, setShowResult] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(15);
    const [questionCount, setQuestionCount] = useState(0);


    const handleOptionSelect = (selectedAnswer) => {
        const updatedUsers = users.map((user) =>
            user.id === 1
                ? {
                      ...user,
                      score: selectedAnswer === questions[currentQuestion].answer ? user.score + 1 : user.score,
                      questionsAnswered: user.questionsAnswered + 1,
                      answers: [...user.answers, { question: questions[currentQuestion].question, selectedAnswer }],
                  }
                : user
        );

        setUsers(updatedUsers);
        const incrementQuestionCount=()=>{
            setQuestionCount(questionCount+1);
           };
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setTimeRemaining(15); 
                incrementQuestionCount();
            } else {
                setEndTime(new Date().getTime());
                setShowResult(true);
            }
        }, 1000);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setUsers((prevUsers) =>
            prevUsers.map((user) => ({ ...user, score: 0, questionsAnswered: 0, answers: [] }))
        );
        setShowResult(false);
        setStartTime(new Date().getTime());
        setEndTime(null);
        setTimeRemaining(15);
        setQuestionCount(0);
    };

    useEffect(() => {
        const questionTimer = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 1);

            if (timeRemaining === 0) {
                clearInterval(questionTimer);
                handleOptionSelect(''); 
            }
        }, 1000);

        return () => clearInterval(questionTimer);
    }, [currentQuestion, timeRemaining]); 

    const getPercentage = () => {
        const totalQuestions = questions.length;
        const totalCorrectAnswers = users.reduce((total, user) => total + user.score, 0);
        return (totalCorrectAnswers / (totalQuestions * users.length)) * 100;
    };

    const renderSummaryPage = () => {
        const totalCorrectAnswers = users[0].score;
        const totalTimeTaken = ((endTime - startTime) / 1000).toFixed(2);
        const percentage = getPercentage().toFixed(2);
      
        
        return (
            <div >
      <h1 className='h1res'>Le quiz est terminé<br/></h1>
            
                <h2 className='res'>Resultat</h2>
                <p>Score: {totalCorrectAnswers}</p>
                <p>Nombre total de questions répondues : {questionCount}</p>
                <p>Temps total pris : {totalTimeTaken} seconds</p>
                <p>Percentage: {percentage}%</p>
                <h3 className='res'>Les reponses:</h3>
                <ul>
                    {questions.map((question, index) => (
                        <li key={index}>
                            {question.question}:
                            <span style={{ color: 'green' }}> Réponse correcte : {question.answer}</span>
                            <span style={{ color: 'red' }}>Votre réponse {users[0].answers[index].selectedAnswer}</span>
                        </li>
                    ))}
                </ul>

                <button onClick={restartQuiz}>Restart Quiz</button>
               
            </div>
        );
    };

    const renderQuestionPage = () => {
        return (
            <div className='stylequestion'>
                <h2 className='h2question'>
                    {questions[currentQuestion].question}
                    {' '}
                    ({currentQuestion + 1}/{questions.length})
                </h2>
                
                <ul>
                    {['A', 'B', 'C', 'D'].map((option) => (
                        <li className='listqu'
                            key={option}
                            onClick={() => handleOptionSelect(questions[currentQuestion][`option${option}`])}
                        >
                            {questions[currentQuestion][`option${option}`]}
                        </li>
                        
                    ))}
                    <p className='timeb'>Time : {timeRemaining} seconds</p>
                </ul><br/><br/>
                
            </div>
        );
    };

    return (
        <div className="quiz-container">
            {showResult ? renderSummaryPage() : renderQuestionPage()}
            {questionCount % 5 === 0 && questionCount > 0 && !showResult && (
                <div>
                    <h2>Summary for the Last 5 Questions</h2>
                    <p>Total Score: {users[0].score}</p>
                    <p>Total Questions Answered: {questionCount}</p>
                    <p>Percentage: {getPercentage().toFixed(2)}%</p> {/* Additional information or statistics for the last 5 questions can be added here */}
                </div>
            )}
        </div>
    );
};

export default Play;