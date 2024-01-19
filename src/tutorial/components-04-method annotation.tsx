/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  // Defaut to basic element
  // onClick: React.MouseEventHandler;
}

export const Button = ({
  children,
  className,
  onClick
}: ButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

const Parent = (): JSX.Element => {
  return (
    <Button className="=" onClick={(e) => {}}>
      Children
    </Button>
  );
};
