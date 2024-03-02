import styles from './divider.module.css';

function index({
  size,
  direction,
  className,
  style
}: DividerProps): JSX.Element {
  console.log(`${className ?? ''} ${styles[direction as string]} ${styles[size as string]}`);

  return (
    <div style={style} className={`${className ? className : ''} ${styles[direction as string]} ${styles[size as string]}`} />
  );
}

export default index;
