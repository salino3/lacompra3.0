import React, { Fragment } from 'react'

interface props {
  pl: string;
  tipo: string;
  valor: any;
  max: number | string;
  min: number | string
}

const Input = ({ pl, tipo, valor, max, min }: props) => {
  return (
    <Fragment>
      <input placeholder={pl} type={tipo} value={valor} max={max} min={min} />
    </Fragment>
  );
};

export default Input