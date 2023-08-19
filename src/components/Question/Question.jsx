import styles from './Question.module.scss';

const Question = (props) => {
  const { question, setQuest, curQuest, rightCount, setRightCount } = props;

  const chooseAnswer = (i) => {
    setQuest(curQuest + 1);
    if (question.rightAnswerIndex === i) setRightCount(rightCount + 1); 
  }

  return (
    <div>
      <h2 className={styles.Title}>{question.question}</h2>
      {question.answers.map((answer, index) => {
        return <div className={styles.Answer} key={index} onClick={() => chooseAnswer(index)}>{answer}</div>
      })}
    </div>
  )
}
export default Question