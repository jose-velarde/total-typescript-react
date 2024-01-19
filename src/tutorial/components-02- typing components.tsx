/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface Props {
  className: string;
}
// export const Button: React.FC<Props> = (props: Props) => {
export const Button = (props: Props): JSX.Element => {
  return <div></div>;
};

const Parent = (): JSX.Element => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
