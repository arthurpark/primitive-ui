import * as React from 'react';
import { Box, Stack, H1 } from '../../.';

export function Screen(props: any) {
  return (
    <Stack padding={4} className="relative z-0">
      <Box padding={{ y: 2 }}>
        <H1>{props.title}</H1>
      </Box>
      {props.children}
    </Stack>
  );
}
