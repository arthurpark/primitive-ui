import * as React from 'react';
import { Box, Stack, Heading } from '../../.';

function SectionTitle(props: any) {
  return (
    <Heading element="h2" size="2xl" weight="medium">
      {props.children}
    </Heading>
  );
}

export function Section(props: any) {
  return (
    <Stack padding={{ all: 4 }}>
      <Box padding={{ y: 2 }}>
        <SectionTitle>{props.title}</SectionTitle>
      </Box>
      {props.children}
    </Stack>
  );
}
