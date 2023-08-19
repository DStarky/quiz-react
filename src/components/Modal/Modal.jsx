import Quiz from '../Quiz/Quiz';
import styles from './Modal.module.scss';

const Modal = (props) => {
  const { isStart, setStart } = props;


  return (
    <div className={`${styles.Modal} ${isStart ? styles.Active : ''}`} onClick={() => setStart(false)}>
      <div className={`${styles.Content} ${isStart ? styles.Active : ''}`} onClick={(e) => e.stopPropagation()}>
        <Quiz />
      </div>
    </div>
  )
}
export default Modal