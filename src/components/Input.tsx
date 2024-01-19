import React from 'react';
import { type ComponentProps } from 'react';

type OverrideProps<T, TOverriden> = Omit<T, keyof TOverriden> & TOverriden;

type InputProps = OverrideProps<
  ComponentProps<'input'>,
  { onChange: (value: string) => void }
>;

// interface InputProps extends Omit<ComponentProps<'input'>, 'onChange'> {
//   onChange: (value: string) => void;
// }

// type InputProps = Omit<ComponentProps<'input'>, 'onChange'> & {
//   onChange: (value: string) => void;
// };

export const Input = (props: InputProps): JSX.Element => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};
