/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type ComponentProps } from 'react';

export const Button = ({
  className,
  ...rest
}: ComponentProps<'button'>): JSX.Element => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = (): JSX.Element => {
  return <Button onClick={() => {}} type="button"></Button>;
};
