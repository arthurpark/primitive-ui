import React from 'react';
import { FlexBox, FlexBoxProps } from './FlexBox';

type ColumnsProps = Omit<FlexBoxProps, 'direction'>;

export function Columns(props: ColumnsProps) {
  return <FlexBox {...props} direction="row" />;
}
