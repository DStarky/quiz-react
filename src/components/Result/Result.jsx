import styles from './Result.module.css'
import { ReactComponent as Restart } from '../../icons/restart.svg';

const Result = (props) => {
  const { rightCount, questionsCount, setQuest, setRightCount, allRight, setAllRight } = props;
  const restartHandle = () => {
    setQuest(0);
    setRightCount(0);
    setAllRight(false);
  }
  return (
    <div className={styles.Parent}>
      <div>
        <h2 className={styles.Title}>Quiz has been finished!</h2>
        <p className={styles.Text}>You answered <span className={`${allRight ? styles.Green : styles.Red}`}>{rightCount}</span> questions out of <span className={`${allRight ? styles.Green : styles.Red}`}>{questionsCount}</span> correctly</p>
      </div>
      <Restart className={styles.Icon} onClick={() => restartHandle()} />
    </div>
  )
}
export default Result