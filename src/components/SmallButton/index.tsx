import PropTypes from 'prop-types';
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

type Props = (ButtonProps | AnchorProps) & {
  type: 'primary' | 'secondary' | 'tertiary' | 'outline';
  state?: 'active' | 'disabled' | 'hover' | null;
  text?: string | null;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  styleSheet?: React.CSSProperties | undefined;
  children?: React.ReactNode;
};

function SmallButton({
  type,
  state = null,
  text = null,
  onClick = () => {},
  styleSheet = {},
  children,
  ...args
}: Props) {
  const classRender = type === 'outline' ? 'outline' : `${type}${state ? `-${state}` : ''}`;
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

SmallButton.propTypes = {
  /**
   * Children element into the button
   */
  children: PropTypes.node,
  /**
   * Which type should the button be?
   */
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'outline',
  ]),
  /**
   * Which state the button have?
   */
  state: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Styles for the button
   */
  styleSheet: PropTypes.object,
  /**
   * Button span text attribute if children is undefined
   */
  text: PropTypes.string,
};

SmallButton.defaultProps = {
  state: null,
  text: null,
  onClick: () => {},
  styleSheet: {},
  children: undefined,
};

export default SmallButton;
