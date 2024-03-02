import React from 'react';
import styles from './medium-button.module.css';

// Props de botón
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

// Anchor props
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
};

const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props;

export type MediumButtonProps = (ButtonProps | AnchorProps) & {
  type: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'delete' | 'disabled';
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
 * <MediumButton {...buttonProps} />
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the button. Can be one of 'primary', 'secondary', 'tertiary', or 'outline'.
 * @param {string} [props.text=null] - The text to be displayed on the button. If not provided, the children element will be used.
 * @param {function} [props.onClick=()=>{}] - The click event handler for the button.
 * @param {Object} [props.styleSheet={}] - The styles for the button.
 * @param {ReactNode} [props.children] - The children element to be rendered inside the button.
 *
 * @returns {JSX.Element} The rendered MediumButton component.
 */
function MediumButton({
  type,
  text = null,
  onClick = () => { },
  styleSheet = {},
  children,
  ...args
}: MediumButtonProps): JSX.Element {
  // renderizado de anchor
  if (hasHref(args)) {
    return (
      <a {...args as AnchorProps} style={styleSheet} className={`${styles.medium} ${styles[type]}`}>
        {text || children}
      </a>
    );
  }
  // renderizado de botón
  return (
    <button {...args as ButtonProps} style={styleSheet} className={`${styles.medium} ${styles[type]}`} onClick={onClick}>
      {text || children}
    </button>
  );
}

export default MediumButton;
