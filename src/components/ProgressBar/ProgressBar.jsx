import styles from './ProgressBar.module.scss';

const ProgressBar = (props) => {
  const { percentage, allRight } = props;
  return (
    <div className={styles.Parent}>
      <div className={`${styles.Child} ${allRight ? styles.Green : ''}`} style={{ width: `${percentage}%` }}></div>
    </div>
  )
}
export default ProgressBar