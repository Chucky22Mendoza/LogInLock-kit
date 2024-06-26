import React from 'react';
import styles from './small-button.module.css';

// Props de botón
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

// Anchor props
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
};

const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props;

export type SmallButtonProps = (ButtonProps | AnchorProps) & {
  type: 'primary' | 'secondary' | 'tertiary' | 'outline';
  state?: 'active' | 'disabled' | 'hover' | 'default';
  text?: string | null;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  styleSheet?: React.CSSProperties | undefined;
  children?: React.ReactNode;
};

/**
 * Represents a small button component.
 *
 * @component
 * @example
 * const buttonProps = {
 *   type: 'primary',
 *   state: 'default',
 *   text: 'Click me',
 *   onClick: () => {
 *     console.log('Button clicked');
 *   },
 *   styleSheet: {
 *     color: 'red',
 *     fontSize: '16px',
 *   },
 *   children: <span>Click me</span>,
 * };
 *
 * <SmallButton {...buttonProps} />
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the button. Can be one of 'primary', 'secondary', 'tertiary', or 'outline'.
 * @param {string} [props.state="default"] - The state of the button. Can be one of 'active', 'disabled', 'hover' or 'default'.
 * @param {string} [props.text=null] - The text to be displayed on the button. If not provided, the children element will be used.
 * @param {function} [props.onClick=()=>{}] - The click event handler for the button.
 * @param {Object} [props.styleSheet={}] - The styles for the button.
 * @param {ReactNode} [props.children] - The children element to be rendered inside the button.
 *
 * @returns {JSX.Element} The rendered SmallButton component.
 */
function SmallButton({
  type,
  state = 'default',
  text = null,
  onClick = () => {},
  styleSheet = {},
  children,
  ...args
}: SmallButtonProps): JSX.Element {
  const classRender = `${type}${state && state !== 'default' ? `-${state}` : ''}`;
  // renderizado de anchor
  if (hasHref(args)) {
    return (
      <a {...args as AnchorProps} style={styleSheet} className={styles[classRender]}>
        {text || children}
      </a>
    );
  }
  // renderizado de botón
  return (
    <button {...args as ButtonProps} style={styleSheet} className={styles[classRender]} onClick={onClick}>
      {text || children}
    </button>
  );
}

export default SmallButton;
