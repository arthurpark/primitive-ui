import * as React from 'react';
import { FlexItem, Stack } from '../../dist';
import { H1 } from './Typography';

type Props = {
  title?: string;
  children: React.ReactNode;
};

export function Screen(props: Props): JSX.Element {
  const { title, children } = props;

  return (
    <Stack padding={{ top: 16, bottom: 4, x: 4 }} className="relative z-0">
      {title && (
        <FlexItem padding={{ y: 4 }}>
          <H1>{title}</H1>
        </FlexItem>
      )}

      <FlexItem>{children}</FlexItem>
    </Stack>
  );
}
