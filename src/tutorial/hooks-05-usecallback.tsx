import { useCallback } from 'react';

export const Buttons = (props: { id: string }) => {
  // useCallback type argument expects a function, just 'string' won't work
  // const onClick = useCallback<(buttonName: string) => void>(
  const onClick = useCallback(
    (buttonName: string) => {
      console.log(props.id, buttonName);
    },
    [props.id]
  );

  return (
    <div>
      <button onClick={() => onClick('A')}>A</button>
      <button onClick={() => onClick('B')}>B</button>
      <button onClick={() => onClick('C')}>C</button>
    </div>
  );
};
