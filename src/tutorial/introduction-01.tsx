/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
export const Component = () => {
  return (
    <div
      // How do I figure out what type aria-posinset expects?
      aria-posinset={1} // number | undefined
      // How do I figure out what type onChange expects?
      onChange={(e) => {}} // React.FormEventHandler<HTMLDivElement> | undefined

      // How do I get autocomplete with JSX? ctrl space
    />
  );
};
