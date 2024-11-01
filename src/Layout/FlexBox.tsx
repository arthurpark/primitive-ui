import cx from 'clsx';
import React from 'react';
import { Box, BoxProps } from '../Box';
import { Direction, Justify, Align, Wrap, Gap } from './types';
import { Responsive, responsive, createPrefixValueResolver } from '../utils';

export type FlexBoxProps = BoxProps & {
  direction: Responsive<Direction>;
  justify?: Responsive<Justify>;
  align?: Responsive<Align>;
  wrap?: Responsive<Wrap>;
  gap?: Responsive<Gap>;
};

export function FlexBox(props: FlexBoxProps): JSX.Element {
  const { className, direction, align, justify, wrap, gap, ...boxProps } =
    props;

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

  const gapClassNames = responsive(createPrefixValueResolver('gap'), gap);

  return (
    <Box
      className={cx(
        'flex',
        flexDirectionClassNames,
        justifyContentClassNames,
        alignItemsClassNames,
        flexWrapClassNames,
        gapClassNames,
        className
      )}
      {...boxProps}
    />
  );
}
