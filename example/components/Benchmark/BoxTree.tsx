import * as React from 'react';
import { Box } from '../../../dist';

export function Tree(props): JSX.Element {
  const { depth } = props;
  const color = `gray-${(depth % 10) * 100}`;

  return depth > 0 ? (
    <Box
      width={16}
      height={16}
      padding={[3, 4, 5]}
      background={{ color }}
      data-testid={depth}
    >
      <Tree depth={depth - 1} />
      <Tree depth={depth - 1} />
    </Box>
  ) : (
    <Box
      width={16}
      height={16}
      padding={[3, 4, 5]}
      background={{ color }}
      data-testid="leaf"
    >
      Leaf
    </Box>
  );
}
