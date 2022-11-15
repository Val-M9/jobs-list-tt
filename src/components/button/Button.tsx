import { FC } from 'react';

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {}

const Button: FC<ButtonProps> = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

export { Button };
