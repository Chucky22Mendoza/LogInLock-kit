import styles from './tag.module.css';

function Tag({
  variant = 'primary',
  endIcon,
  startIcon,
  children,
  style = {},
  className = '',
}: TagProps): JSX.Element {
  return (
    <div style={style} className={`${className} ${styles.tag} ${styles[variant]}`}>
      {startIcon}
      {children && <span>{children}</span>}
      {endIcon}
    </div>
  );
}

export default Tag;
