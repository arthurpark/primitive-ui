import React from 'react';
import cx from 'classnames';
import { Box, BoxProps } from '../Box';
import { Direction, Justify, Align, Wrap } from './types';
import { Responsive, responsive, createPrefixValueResolver } from '../utils';

export type FlexBoxProps = BoxProps & {
  direction: Responsive<Direction>;
  justify?: Responsive<Justify>;
  align?: Responsive<Align>;
  wrap?: Responsive<Wrap>;
};

export function FlexBox(props: FlexBoxProps) {
  const { className, direction, align, justify, wrap, ...boxProps } = props;

  const flexDirectionClassNames = responsive(
    createPrefixValueResolver('flex'),
    direction
  );
  const justifyContentClassNames = responsive(
    createPrefixValueResolver('justify'),
    justify
  );
  const alignItemsClassNames = responsive(
    createPrefixValueResolver('items'),
    align
  );
  const flexWrapClassNames = responsive(
    createPrefixValueResolver('flex'),
    wrap
  );

  return (
    <Box
      className={cx(
        'flex',
        flexDirectionClassNames,
        justifyContentClassNames,
        alignItemsClassNames,
        flexWrapClassNames,
        className
      )}
      {...boxProps}
    />
  );
}
