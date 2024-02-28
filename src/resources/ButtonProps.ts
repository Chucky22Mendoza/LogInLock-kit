import React from 'react';

// Props de botón
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

export type ButtonAnchorProps = {
  size: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'delete' | 'disabled';
  text?: string | null;
  href?: string | null;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  styleSheet?: React.CSSProperties | undefined;
  children?: React.ReactNode;
};

export type DefaultProps = Omit<ButtonAnchorProps, 'size'>;

export const defaultButtonAnchorProps: DefaultProps = {
  text: null,
  href: null,
  onClick: () => {},
  styleSheet: {},
};

export interface ButtonAnchorSmallProps extends DefaultProps {
  size: 'primary' | 'primary-active' | 'primary-disabled' | 'primary-hover' | 'secondary' | 'secondary-active' | 'secondary-disabled' | 'secondary-hover' | 'secondary-outline' | 'tertiary';
}

// Opciones de entrada / salida
export type Overload = {
  (props: ButtonAnchorProps): JSX.Element;
  (props: ButtonAnchorProps): JSX.Element;
};
