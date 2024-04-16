interface IStylesElements {
  style?: React.CSSProperties;
  className?: string;
}

interface DividerProps extends IStylesElements {
  size: 'thin' | 'thick';
  direction?: 'horizontal' | 'vertical';
}

interface BadgeProps extends IStylesElements {
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  label?: string;
  size?: 'md' | 'lg';
  children?: React.ReactNode;
};

interface SpinnerProps extends IStylesElements {
  size: 'xl'| 'lg' | 'md' | 'sm' | 'xs';
  label?: string;
};

interface TagProps extends IStylesElements {
  variant: 'primary' | 'secondary' | 'outlined' | 'success' | 'warning' | 'danger';
  children: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
};

interface TooltipProps extends IStylesElements {
  value: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

interface TabsProps extends IStylesElements {
  items: TabProps[];
};

interface TabProps extends IStylesElements {
  badge: BadgeProps;
  content?: React.ReactElement;
  disabled?: boolean;
  label: string;
  startIcon?: React.ReactElement;
};

interface RateProps extends IStylesElements {
  value?: number;
  stars?: number;
  label?: string;
};

interface InputProps extends IStylesElements {
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
};

interface ButtonOrAnchorProps extends IStylesElements {
  variant: 'primary' | 'secondary' | 'outlined' | 'success' | 'danger' | 'warning';
  size?: 'lg' | 'md';
  href?: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children: React.ReactElement;
};

interface AvatarProps extends IStylesElements {
  size: 'md' | 'sm';
  shape?: 'circle' | 'square';
  src?: string;
  badge?: boolean;
  children?: React.ReactElement;
};
