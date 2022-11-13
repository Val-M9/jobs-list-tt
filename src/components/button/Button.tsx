import { FC } from 'react';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

export { Button };
