import React from 'react';
import styles from './yimi.module.css';
import MoneyInput from './MoneyInput';

export type InputProps = {
  propsInput: React.InputHTMLAttributes<HTMLInputElement>;
  label?: string | undefined;
  styleParent?: React.CSSProperties | undefined;
  floatElement?: React.ReactElement | undefined;
  helper?: string | undefined;
  isInvalid?: boolean | undefined;
  onChange?: (value: string) => void;
  stylesHelper?: React.CSSProperties | undefined;
  helperElement?: React.ReactElement | undefined;
  iconRigth?: React.ReactElement | String;
  discount?: boolean | undefined;
};

function YimiInputText({
  propsInput,
  styleParent = undefined,
  floatElement = undefined,
  onChange,
  helper = undefined,
  isInvalid = false,
  label = undefined,
  stylesHelper = undefined,
  helperElement = undefined,
}: InputProps) {
  const shouldDisplayLabel = label && label !== '';

  return (
    <div className={`${styles['input-container']} ${isInvalid ? styles.error : ''}`} style={styleParent}>
      {shouldDisplayLabel && (
        <label htmlFor={propsInput.id} style={{ opacity: propsInput.value && propsInput.value !== '' ? '1' : '' }}>
          {label}
        </label>
      )}
      <input
        className={styles['custom-input']}
        {...propsInput}
        onChange={(e) => onChange?.call(onChange, e.target.value)}
      />
      {helperElement && <div className={styles.helper}>{helperElement}</div>}
      {helper && <div className={styles.helper}><span style={stylesHelper}>{helper}</span></div>}
      {floatElement}
    </div>
  );
}

export function YimiInputTextIcon({
  propsInput,
  styleParent = undefined,
  floatElement = undefined,
  onChange = () => {},
  helper = undefined,
  isInvalid = false,
  label = undefined,
  stylesHelper = undefined,
  helperElement = undefined,
  iconRigth = undefined
}: InputProps) {
  const shouldDisplayLabel = label && label !== '';

  return (
    <div className={`${styles['input-container']} ${isInvalid ? styles.error : ''}`} style={styleParent}>
      {shouldDisplayLabel && (
        <label htmlFor={propsInput.id} style={{ opacity: propsInput.value && propsInput.value !== '' ? '1' : '' }}>
          {label}
        </label>
      )}
      <div className={styles['input-wrapper']}>
        <input
          className={styles['custom-input']}
          {...propsInput}
          onChange={(e) => onChange(e.target.value)}
        />
        {iconRigth && (
          <div className={styles['icon-right']} onClick={() => ""}>
            {iconRigth}
          </div>
        )}
      </div>
      {helperElement && <div className={styles.helper}>{helperElement}</div>}
      {helper && <div className={styles.helper}><span style={stylesHelper}>{helper}</span></div>}
      {floatElement}
    </div>
  );
}

type PropsBlocked = {
  propsInput: React.InputHTMLAttributes<HTMLInputElement>;
  label?: string | undefined;
  styleParent?: React.CSSProperties | undefined;
  rightElement?: React.ReactElement | undefined;
};

export function YimiInputBlocked({ propsInput, styleParent = {}, label = undefined, rightElement = undefined }: PropsBlocked) {
  return (
    <div className={styles['input-blocked']} style={styleParent}>
      <label htmlFor={propsInput.id}>{label}</label>
      <input
        {...propsInput}
        disabled={true}
      />
      {rightElement}
    </div>
  );
}

export type IOption = {
  value: any;
  label: string;
};

type PropsSelect = {
  propsInput: React.SelectHTMLAttributes<HTMLSelectElement>;
  styleParent?: React.CSSProperties | undefined;
  options: IOption[];
  label?: string | undefined;
  onChange?: (value: string) => void;
  disable?: boolean;
};

export function YimiInputSelect({
  propsInput,
  styleParent = {},
  options,
  label = undefined,
  onChange = () => {},
  disable = false
}: PropsSelect) {
  return (
    <div className={styles['input-container']} style={styleParent}>
      <label style={{ opacity: '1' }} htmlFor={propsInput.id}>{label}</label>
      <select
        {...propsInput}
        onChange={(e) => onChange(e.target.value)}
        disabled={disable}
      >
        {
          options.map((opt: IOption) => (
            <option key={`${opt.value}-option-gender`} value={opt.value}>{opt.label}</option>
          ))
        }
      </select>
    </div>
  );
}

export function YimiInputMoney({
  propsInput,
  styleParent = undefined,
  floatElement = undefined,
  onChange = () => {},
  helper = undefined,
  isInvalid = false,
  label = undefined,
  stylesHelper = undefined,
  helperElement = undefined
}: InputProps) {
  const shouldDisplayLabel = label && label !== '';
  return (
    <div className={`${styles['input-container']} ${isInvalid ? styles.error : ''}`} style={styleParent}>
      {shouldDisplayLabel && (
        <label htmlFor={propsInput.id} style={{ opacity: propsInput.value && propsInput.value !== '' ? '1' : '' }}>
          {label}
        </label>
      )}
      <MoneyInput
        propsInput={{ ...propsInput, className: styles['custom-input'] }}
        onChange={(value) => onChange(String(value))}
      />
      {helperElement && <div className={styles.helper}>{helperElement}</div>}
      {helper && <div className={styles.helper}><span style={stylesHelper}>{helper}</span></div>}
      {floatElement}
    </div>
  );
}

export default YimiInputText;