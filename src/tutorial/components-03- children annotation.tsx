/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

export const Button = (props: { children: React.ReactNode }): JSX.Element => {
  return <button>{props.children}</button>;
};

const Parent = (): JSX.Element => {
  return (
    <>
      {/* @ts-expect-error some error */}
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
