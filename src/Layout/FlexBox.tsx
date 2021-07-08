import React from 'react';
import cx from 'classnames';
import { Box, BoxProps } from '../Box';
import { Direction, Justify, Align, Wrap, createFlexResolver } from './utils';
import { Responsive, responsive } from '../utils';

export type FlexBoxProps = BoxProps & {
  direction: Responsive<Direction>;
  justify?: Responsive<Justify>;
  align?: Responsive<Align>;
  wrap?: Responsive<Wrap>;
};

export function FlexBox(props: FlexBoxProps) {
  const { className, direction, align, justify, wrap, ...boxProps } = props;

  const flexDirectionClassNames = responsive(
    createFlexResolver('flex'),
    direction
  );
  const justifyContentClassNames = responsive(
    createFlexResolver('justify'),
    justify
  );
  const alignItemsClassNames = responsive(createFlexResolver('items'), align);
  const flexWrapClassNames = responsive(createFlexResolver('flex'), wrap);

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
