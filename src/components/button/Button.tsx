import { FC } from 'react';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
