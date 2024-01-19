/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}
type GetTagState = () => TagState;

const getTagState: GetTagState = (): TagState => ({
  // tell typescript what it should expect in the return type
  tagSelected: 1,
  tags: [],
  // @ts-expect-error excess property
  qweqew: 123123 // typescript allows to add excess properties from the return values inside functions
});

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null
  });
  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState(
                (currentState): TagState => ({
                  ...currentState,
                  // @ts-expect-error excess property
                  tagselected: tag.id
                })
              );
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState(
            (currentState): TagState => ({
              ...currentState,
              tags: [
                ...currentState.tags,
                {
                  id: new Date().getTime(),
                  value: 'New',
                  // @ts-expect-error excess property
                  otherValue: 'something'
                }
              ]
            })
          );
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
