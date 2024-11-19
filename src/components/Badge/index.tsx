import { cn } from '../../lib/utils';
import { GlobalElementProps } from '../../types/global';
import styles from './badge.module.css';

/**
 * BadgeProps defines the properties for a Badge component.
 *
 * @extends GlobalElementProps
 *
 * @property {('primary' | 'secondary' | 'success' | 'warning' | 'danger')} variant
 * - Specifies the visual style of the badge.
 *
 * @property {string} [label]
 * - Optional text label to display within the badge.
 *
 * @property {('md' | 'lg')} [size]
 * - Optional size of the badge, either medium or large.
 *
 * @property {React.ReactNode} [children]
 * - Optional React nodes to be rendered inside the badge.
 */
export type BadgeProps = GlobalElementProps & {
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  label?: string;
  size?: 'md' | 'lg';
  children?: React.ReactNode;
}

/**
 * Renders a Badge component with customizable variant, size, label, and children.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.variant='primary'] - The variant style of the badge.
 * @param {string} [props.size='md'] - The size of the badge.
 * @param {string} props.label - The label text to display within the badge.
 * @param {React.ReactNode} props.children - The children elements to render inside the badge.
 * @param {React.CSSProperties} [props.style={}] - Additional inline styles for the badge.
 * @param {string} [props.className=''] - Additional class names for the badge.
 *
 * @returns {JSX.Element} The rendered badge component.
 */
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
      <div
        style={style}
        className={
          cn(
            className,
            styles['dot-wrapper'],
            styles[variant]
          )
        }
      >
        <div className={styles.dot} />
        {label && <label>{label}</label>}
      </div>
    );
  }
  return (
    <div
      style={style}
      className={
        cn(
          className,
          styles.badge,
          styles[variant],
          styles[size]
        )
      }
    >
      {children && <span>{children}</span>}
      {label && <label>{label}</label>}
    </div>
  );
}

export default Badge;
