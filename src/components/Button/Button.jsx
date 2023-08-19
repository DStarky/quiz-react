import styles from './Button.module.scss';

const Button = (props) => {
  const { isStart, setStart, text } = props;

  return (
    <button className={`${styles.Button} ${isStart ? styles.Hide : ''}`} onClick={() => setStart(true)}>{text}</button>
  )
}
export default Button