import React from 'react';
import { Box, BoxProps } from '../Box';

export function Spacer(props: BoxProps) {
  const { width, height, ...rest } = props;

  return <Box width={width} height={height} {...rest} />;
}
