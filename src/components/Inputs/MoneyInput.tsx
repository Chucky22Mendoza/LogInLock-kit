import { formatDecimals } from '@/utils/Currency';
import React, { ChangeEvent } from 'react';

type Props = {
  propsInput: React.InputHTMLAttributes<HTMLInputElement>;
  onChange?: (value: string) => void;
  coin?: string;
};

function MoneyInput({ propsInput, onChange = () => {}, coin = '$' }: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (/^\$?\d*\.?\d{0,2}$/.test(event.target.value)) {
      // Filtrar solo números y el punto decimal
      const inputValue = event.target.value.replace(/[^0-9.]/g, '');
      // Asegurar un único punto decimal
      const formattedValue = inputValue.replace(/\.(?=.*\.)/, '');
      onChange(formattedValue);
    }
  };

  // Mostrar el valor con el signo "$" al inicio
  const displayValue = Number(propsInput.value) > 0
    ? `${coin}${propsInput.value}`
    : '';

  return (
    <input
      {...propsInput}
      type="text"
      placeholder={`${coin}0.00`}
      value={displayValue}
      onChange={handleChange}
      // onBlur={(e) =>
      //   onChange(Number(formatDecimals(e.target.value.replaceAll(coin, '') as unknown as number).replaceAll(',', '')))
      // }
    />
  );
};

export default MoneyInput;
