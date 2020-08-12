import React from 'react';
import cx from 'classnames';
import { Box } from '../Box';
import type { BoxProps } from '../Box';
import {
  Direction,
  Justify,
  Align,
  Wrap,
  resolveFlexBoxClassName
} from './utils';

export type FlexBoxProps = BoxProps & {
  direction: Direction;
  justify?: Justify;
  align?: Align;
  wrap?: Wrap;
};

export function FlexBox(props: FlexBoxProps) {
  const { className, direction, align, justify, wrap, ...rest } = props;

  const flexboxClassName = resolveFlexBoxClassName({
    direction,
    align,
    justify,
    wrap
  });

  return (
    <Box className={cx(flexboxClassName, className)} {...rest} />
  );
}
