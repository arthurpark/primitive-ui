import * as React from 'react';

export function Tree(props): JSX.Element {
  const { depth } = props;
  const color = `gray-${(depth % 10) * 100}`;

  return depth > 0 ? (
    <div
      className={`p-3 sm:p-4 md:p-5 w-16 h-16 bg-${color}`}
      data-testid={depth}
    >
      <Tree depth={depth - 1} />
      <Tree depth={depth - 1} />
    </div>
  ) : (
    <div
      className={`p-3 sm:p-4 md:p-5 w-16 h-16 bg-${color}`}
      data-testid={'leaf'}
    >
      Leaf
    </div>
  );
}
