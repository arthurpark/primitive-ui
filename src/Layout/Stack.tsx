import React from 'react';
import { FlexBox, FlexBoxProps } from './FlexBox';

type StackProps = Omit<FlexBoxProps, 'direction'>;

export function Stack(props: StackProps) {
  return <FlexBox {...props} direction={'col'} />;
}
