export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  styleParent?: React.CSSProperties | undefined;
  floatElement?: React.ReactElement | null;
  helper?: string | null;
  isInvalid?: boolean;
  onChange?: (value: string) => void;
};

const InputProps = (props: InputProps) => {
  return <input type={props?.type ?? 'text'} {...props} />;
};

export default InputProps;
