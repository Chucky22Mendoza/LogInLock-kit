import styles from './badge.module.css';

function Badge({
  variant = 'primary',
  size = 'md',
  label,
  children,
  style = {},
  className = '',
}: BadgeProps): JSX.Element {
  if (!children) {
    return (
      <div style={style} className={`${className} ${styles['dot-wrapper']} ${styles[variant]}`}>
        <div className={styles.dot} />
        {label && <label>{label}</label>}
      </div>
    );
  }
  return (
    <div style={style} className={`${className} ${styles.badge} ${styles[variant]} ${styles[size]}`}>
      {children && <span>{children}</span>}
      {label && <label>{label}</label>}
    </div>
  );
}

export default Badge;
