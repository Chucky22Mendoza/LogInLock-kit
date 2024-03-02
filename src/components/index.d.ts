type DividerProps = {
  size: 'thin' | 'thick';
  direction?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
  className?: string;
};

type BadgeProps = {
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  label?: string;
  size?: 'md' | 'lg';
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

type SpinnerProps = {
  size: 'xl'| 'lg' | 'md' | 'sm' | 'xs';
  label?: string;
  style?: React.CSSProperties;
  className?: string;
};

type TagProps = {
  variant: 'primary' | 'secondary' | 'outlined' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  style?: React.CSSProperties;
  className?: string;
};

type TooltipProps = {
  value: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

type TabsProps = {
  items: TabProps[];
  style?: React.CSSProperties;
  className?: string;
};

type TabProps = {
  badge: {
    children?: React.ReactElement;
  },
  content?: React.ReactElement;
  disabled?: boolean;
  label: string;
  startIcon?: React.ReactElement;
  style?: React.CSSProperties;
  className?: string;
};

type RateProps = {
  value?: number;
  stars?: number;
  label?: string;
  style?: React.CSSProperties;
  className?: string;
};

type InputProps = {
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
  style?: React.CSSProperties;
  className?: string;
};

type ButtonOrAnchorProps = {
  variant: 'primary' | 'secondary' | 'outlined' | 'success' | 'danger' | 'warning';
  size?: 'lg' | 'md';
  href?: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children: React.ReactElement;
  style?: React.CSSProperties;
  className?: string;
};

type AvatarProps = {
  size: 'md' | 'sm';
  shape?: 'circle' | 'square';
  src?: string;
  badge?: boolean;
  children?: React.ReactElement;
  style?: React.CSSProperties;
  className?: string;
};