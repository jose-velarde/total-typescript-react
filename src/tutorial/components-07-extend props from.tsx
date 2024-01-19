/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type ComponentProps } from 'react';

// Imagine NavBar is an external library!
export const NavBar = (props: {
  title: string;
  links: string[];
  children: React.ReactNode;
}): JSX.Element => {
  return <div>Some content</div>;
};

type NavBarProps = ComponentProps<typeof NavBar>;
