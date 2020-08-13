import * as React from 'react';
import { Box, Stack, H2 } from '../../.';

export function Section(props: any) {
  const { title, children } = props;
  return (
    <Stack padding={{ all: 4 }}>
      <Box
        padding={{ y: 2 }}
        backgroundColor="white"
        className="sticky top-0 border-b-2 border-gray-300 bg-opacity-75"
        style={{ top: '3rem', backdropFilter: 'blur(4px)' }}
      >
        <H2>{title}</H2>
      </Box>

      <Box padding={{ y: 2 }}>{children}</Box>
    </Stack>
  );
}
