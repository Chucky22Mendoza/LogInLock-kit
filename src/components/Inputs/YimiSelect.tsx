import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactSelect, { Options } from 'react-select';
import ReactSelectCreatable from 'react-select/creatable';
import styles from './yimi.module.css';

type OptionProps = {
  label: string;
  value: string | undefined;
};

type Props = {
  options?: OptionProps[];
  placeholder?: string;
  defaultValue?: OptionProps | undefined;
  label?: string | undefined;
  disabled?: boolean;
  onChange?: (response: string) => void;
  onOptionsDisabled?: (option: OptionProps, selectValue: Options<OptionProps>) => boolean;
};

export function YimiSelect({
  options = [],
  placeholder = '',
  defaultValue = undefined,
  label = undefined,
  disabled = false,
  onChange = () => {},
  onOptionsDisabled = () => false,
}: Props) {
  return (
    <div className={styles['input-container']}>
      {label && <label htmlFor="" style={{ opacity: '1' }}>{label}</label>}
      <ReactSelect
        id={uuidv4()}
        options={options}
        placeholder={placeholder}
        // defaultValue={defaultValue}
        value={defaultValue}
        isDisabled={disabled}
        styles={{
          container: (styles) => ({
            ...styles,
            alignSelf: 'stretch',
            border: 'none',
          }),
          control: (styles, { isFocused }) => ({
            ...styles,
            alignSelf: 'stretch',
            height: '5rem',
            background: 'var(--y-input-bg)',
            border: isFocused ? '.1rem solid var(--y-border-brand)' : '.2rem solid var(--y-input-border)',
            borderRadius: '1rem',
            ':hover:focus': {
              ...styles[':focus'],
              borderColor: '.1rem solid var(--y-border-brand)',
            },
          }),
          option: (styles, { isFocused, isDisabled, isSelected }) => ({
            ...styles,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            letterSpacing: '0.025rem',
            color: isDisabled ? 'var(--y-btn-generic-disabled-text)' : isSelected ? 'var(--y-text-inverse)' : 'var(--y-text-primary)',
            backgroundColor: isSelected ? 'var(--y-bg-brand)' : isFocused ? 'var(--y-btn-hover-border)' : isDisabled ? 'var(--y-btn-generic-disabled-bg)' : 'var(--y-input-bg)',
            transition: 'background-color .3s',
          }),
          placeholder: (styles) => ({
            ...styles,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            letterSpacing: '0.025rem',
            color: 'var(--y-btn-generic-disabled-text)',
            border: 'none',
          }),
          input: (styles) => ({
            ...styles,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            letterSpacing: '0.025rem',
            color: 'var(--y-text-primary)',
            border: 'none',
          }),
          singleValue: (styles) => ({
            ...styles,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            letterSpacing: '0.025rem',
            color: 'var(--y-text-primary)',
            border: 'none',
          }),
        }}
        isOptionDisabled={onOptionsDisabled}
        onChange={(response) => onChange(response?.value ?? '')}
      />
    </div>
  );
}

export function YimiMultiSelect({
  options = [],
  placeholder = '',
  defaultValue = undefined,
  label = undefined,
  onChange = () => {},
}: Props) {
  return (
    <div className={styles['input-container']}>
      {label && <label htmlFor="" style={{ opacity: '1' }}>{label}</label>}
      <ReactSelectCreatable
        id={uuidv4()}
        options={options}
        placeholder={placeholder}
        defaultValue={defaultValue}
        isMulti
        formatCreateLabel={(value) => `Agregar: ${value}`}
        styles={{
          container: (styles) => ({
            ...styles,
            alignSelf: 'stretch',
            border: 'none',
          }),
          control: (styles, { isFocused }) => ({
            ...styles,
            alignSelf: 'stretch',
            height: '5rem',
            background: 'var(--y-input-bg)',
            border: isFocused ? '.1rem solid var(--y-border-brand)' : '.2rem solid var(--y-input-border)',
            borderRadius: '1rem',
            ':hover:focus': {
              ...styles[':focus'],
              borderColor: '.1rem solid var(--y-border-brand)',
            },
          }),
          option: (styles, { isFocused }) => ({
            ...styles,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            letterSpacing: '0.025rem',
            color: 'var(--y-text-primary)',
            backgroundColor: isFocused ? 'var(--y-btn-hover-border)' : 'var(--y-input-bg)',
            transition: 'background-color .3s'
          }),
          placeholder: (styles) => ({
            ...styles,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            letterSpacing: '0.025rem',
            color: 'var(--y-btn-generic-disabled-text)',
            border: 'none',
          }),
          input: (styles) => ({
            ...styles,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            letterSpacing: '0.025rem',
            color: 'var(--y-text-primary)',
            border: 'none',
          }),
          singleValue: (styles) => ({
            ...styles,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            letterSpacing: '0.025rem',
            color: 'var(--y-text-primary)',
            border: 'none',
          }),
        }}
      />
    </div>
  );
}
