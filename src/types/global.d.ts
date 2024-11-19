/// <reference types="react" />

/**
 * Represents the properties that can be applied to a global element.
 *
 * @property {React.CSSProperties} [style] - Optional CSS properties to apply to the element.
 * @property {string} [className] - Optional CSS class name to apply to the element.
 */
export type GlobalElementProps = {
  style?: React.CSSProperties;
  className?: string;
}

export type TagProps = GlobalElementProps & {
  variant: 'primary' | 'secondary' | 'outlined' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

export type TooltipProps = GlobalElementProps & {
  value: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export type TabsProps = GlobalElementProps & {
  items: TabProps[];
}

export type TabProps = GlobalElementProps & {
  badge: BadgeProps;
  content?: React.ReactElement;
  disabled?: boolean;
  label: string;
  startIcon?: React.ReactElement;
}

export type RateProps = GlobalElementProps & {
  value?: number;
  stars?: number;
  label?: string;
}

export type InputProps = GlobalElementProps & {
  id?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  size: 'lg' | 'md';
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean;
}

export type ButtonOrAnchorProps = GlobalElementProps & {
  variant: 'primary' | 'secondary' | 'outlined' | 'success' | 'danger' | 'warning';
  size?: 'lg' | 'md';
  href?: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children: React.ReactElement;
}

export type AvatarProps = GlobalElementProps & {
  size: 'md' | 'sm';
  shape?: 'circle' | 'square';
  src?: string;
  badge?: boolean;
  children?: React.ReactElement;
}
