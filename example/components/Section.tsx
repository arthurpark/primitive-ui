import * as React from 'react';
import { Stack, FlexItem, H2 } from '../../dist';

export function Section(props: any) {
  const { title, children } = props;

  return (
    <Stack padding={4}>
      <FlexItem
        padding={{ y: 2 }}
        backgroundColor="white"
        className="sticky top-16 border-b-2 border-gray-300 bg-opacity-75"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        <H2>{title}</H2>
      </FlexItem>

      <FlexItem padding={{ y: 2 }}>{children}</FlexItem>
    </Stack>
  );
}
