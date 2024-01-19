/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

export interface ButtonProps {
  className: string;
}

export const Button = (props: ButtonProps): JSX.Element => {
  return <button className={props.className}></button>;
};

const Parent = (): JSX.Element => {
  return (
    <>
      {/* @ts-expect-error some error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
