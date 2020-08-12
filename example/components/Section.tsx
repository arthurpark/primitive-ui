import * as React from 'react';
import { Stack } from '../../.';

export function Section(props: any) {
  return <Stack padding={{ all: 4 }}>{props.children}</Stack>;
}
