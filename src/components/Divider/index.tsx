import { GlobalElementProps } from '../../types/global';
import styles from './divider.module.css';

/**
 * Represents the properties for a Divider component.
 *
 * @extends GlobalElementProps
 *
 * @property size - Specifies the thickness of the divider.
 *                  Can be either 'thin' or 'thick'.
 *
 * @property direction - Optional. Determines the orientation of the divider.
 *                       Can be 'horizontal' or 'vertical'.
 */
export type DividerProps = GlobalElementProps & {
  size: 'thin' | 'thick';
  direction?: 'horizontal' | 'vertical';
}

/**
 * Renders a Divider component with customizable size and direction.
 *
 * @param {Object} props - The properties for the Divider component.
 * @param {string} props.size - The size of the divider, determining its height or width.
 * @param {string} props.direction - The direction of the divider, either horizontal or vertical.
 * @param {string} [props.className] - Optional additional class names for styling.
 * @param {React.CSSProperties} [props.style] - Optional inline styles for the divider.
 * @returns {JSX.Element} A styled divider element.
 */
function Divider({
  size,
  direction,
  className,
  style
}: DividerProps): JSX.Element {
  return (
    <div style={style} className={`${className ? className : ''} ${styles[direction as string]} ${styles[size as string]}`} />
  );
}

export default Divider;
