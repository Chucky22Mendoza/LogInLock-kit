import styles from './spinner.module.css';

function Spinner({
  size,
  label,
  className,
  style,
}: SpinnerProps): JSX.Element {
  return (
    <div className={`${className} ${styles.wrap}`} style={style}>
      <div className={`${styles.spinner} ${styles[size]}`} />
      {label && <label>{label}</label>}
    </div>
  );
}

export default Spinner;
