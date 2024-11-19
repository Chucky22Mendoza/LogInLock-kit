import { GlobalElementProps } from '../../types/global';
import styles from './spinner.module.css';

/**
 * Represents the properties for a Spinner component.
 *
 * @extends GlobalElementProps
 *
 * @property {'xl' | 'lg' | 'md' | 'sm' | 'xs'} size - Specifies the size of the spinner.
 * @property {string} [label] - Optional label for accessibility purposes.
 */
export type SpinnerProps = GlobalElementProps & {
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  label?: string;
}

/**
 * Renders a customizable spinner component.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.size - The size of the spinner, which determines the CSS class applied.
 * @param {string} [props.label] - An optional label to display alongside the spinner.
 * @param {string} [props.className] - Additional CSS classes to apply to the spinner container.
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the spinner container.
 * @returns {JSX.Element} The rendered spinner component.
 */
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
