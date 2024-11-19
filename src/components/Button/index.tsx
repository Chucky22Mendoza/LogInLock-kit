import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './button.module.css';
import { cn } from '../../lib/utils';

/**
 * Type definition for ButtonProps, extending the default HTML button attributes.
 *
 * @property {string} [href] - Optional property, should be undefined for button elements.
 */
type ButtonProps =  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  href?: undefined;
};

/**
 * Type definition for `AnchorProps`, which extends the default HTML anchor attributes.
 *
 * @property {string} [href] - An optional property representing the URL the anchor element points to.
 *                             If not provided, the anchor will not navigate to any URL.
 */
type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  href?: string;
};

/**
 * Renders a customizable button component that can function as either a button or an anchor element
 * based on the presence of an href attribute. Supports various styles and icons.
 *
 * @param {ButtonAnchorProps} props - The properties for the button component, including size, variant,
 * startIcon, endIcon, children, and className.
 * @returns {JSX.Element} A button or anchor element styled according to the provided props.
 */
const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props;

/**
 * Type definition for `ButtonAnchorProps`, which combines properties for both button and anchor elements.
 *
 * @property {'sm' | 'md' | 'lg'} [size] - Optional size of the button or anchor, determining its dimensions.
 * @property {'primary' | 'outlined' | 'text'} [variant] - Optional variant style of the button or anchor.
 * @property {React.ReactNode} [children] - Optional content to be displayed inside the button or anchor.
 * @property {React.ReactElement} [startIcon] - Optional icon to be displayed at the start of the button or anchor.
 * @property {React.ReactElement} [endIcon] - Optional icon to be displayed at the end of the button or anchor.
 */
export type ButtonAnchorProps = (ButtonProps | AnchorProps) & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'outlined' | 'text';
  children?: React.ReactNode;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
};

/**
 * Properties for the `Button` component, which can render as either a button or an anchor element.
 *
 * @property {'sm' | 'md' | 'lg'} [size='md'] - Optional size of the component, determining its dimensions.
 * @property {'primary' | 'outlined' | 'text'} [variant='primary'] - Optional style variant of the component.
 * @property {React.ReactNode} [children] - Optional content to be displayed inside the component.
 * @property {React.ReactElement} [startIcon] - Optional icon to be displayed at the start of the component.
 * @property {React.ReactElement} [endIcon] - Optional icon to be displayed at the end of the component.
 * @property {string} [className] - Optional additional CSS class names to apply to the component.
 */
function Button(props: ButtonAnchorProps) {
  const {
    size = 'md',
    variant = 'primary',
    startIcon,
    endIcon,
    children,
    className,
  } = props;

  let inputProps = {...props};
  delete inputProps.size;
  delete inputProps.variant;
  delete inputProps.startIcon;
  delete inputProps.endIcon;
  delete inputProps.children;
  delete inputProps.className;

  // renderizado de anchor
  if (hasHref(props)) {
    return (
      <a
        {...inputProps as AnchorProps}
        className={
          cn(
            styles.btn,
            size ? styles[size] : undefined,
            variant ? styles[variant] : undefined,
            className,
          )
        }
      >
        {startIcon}
        {children}
        {endIcon}
      </a>
    );
  }

  return (
    <button
      {...inputProps as ButtonProps}
      className={
        cn(
          styles.btn,
          styles[size],
          variant ? styles[variant] : undefined,
          className,
        )
      }
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
}

export default Button;
