import * as React from 'react';
import { FlexItem, Stack, H1 } from '../../dist';

export function Screen(props: any) {
  return (
    <Stack padding={{ top: 16, bottom: 4, x: 4 }} className="relative z-0">
      <FlexItem padding={{ y: 2 }}>
        <H1>{props.title}</H1>
      </FlexItem>

      <FlexItem>{props.children}</FlexItem>
    </Stack>
  );
}
