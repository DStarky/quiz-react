import Question from '../Question/Question';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './Quiz.module.scss';
import questions from '../../data/questions.json'
import { useState, useEffect } from 'react';
import Result from '../Result/Result';


const Quiz = () => {
  const [curQuest, setQuest] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const [allRight, setAllRight] = useState(false);
  useEffect(() => {
    if (rightCount === questions.length) {
      setAllRight(true);
    };

  }, [rightCount])


  const percentage = (curQuest / questions.length) * 100;

  return (
    <div>
      <ProgressBar percentage={percentage} allRight={allRight} />
      {curQuest < questions.length
        ? <Question question={questions[curQuest]} setQuest={setQuest} curQuest={curQuest} rightCount={rightCount} setRightCount={setRightCount} />
        : <Result rightCount={rightCount} questionsCount={questions.length} setQuest={setQuest} setRightCount={setRightCount} allRight={allRight} setAllRight={setAllRight} />}

    </div>
  )
}
export default Quiz