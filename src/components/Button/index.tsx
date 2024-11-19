import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './button.module.css';
import { cn } from '../../lib/utils';

// Props de botón
type ButtonProps =  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  href?: undefined;
};

// Anchor props
type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  href?: string;
};

const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props;

export type ButtonAnchorProps = (ButtonProps | AnchorProps) & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'outlined' | 'text';
  children?: React.ReactNode;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
};

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
