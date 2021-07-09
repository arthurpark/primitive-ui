import React from 'react';
import cx from 'classnames';
import { Box, BoxProps } from '../Box';
import { Flex, Grow, Shrink } from './types';
import { Responsive, responsive, createPrefixValueResolver } from '../utils';

export type FlexItemProps = BoxProps & {
  flex?: Responsive<Flex>;
  grow?: Responsive<Grow>;
  shrink?: Responsive<Shrink>;
};

export function FlexItem(props: FlexItemProps) {
  const { className, flex, grow, shrink, ...boxProps } = props;

  const flexClassNames = responsive(createPrefixValueResolver('flex'), flex);
  const flexGrowClassNames = responsive(
    createPrefixValueResolver('flex'),
    grow
  );
  const flexShrinkClassNames = responsive(
    createPrefixValueResolver('flex'),
    shrink
  );

  return (
    <Box
      className={cx(
        flexClassNames,
        flexGrowClassNames,
        flexShrinkClassNames,
        className
      )}
      {...boxProps}
    />
  );
}
