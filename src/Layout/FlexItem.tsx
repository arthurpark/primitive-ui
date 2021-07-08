import React from 'react';
import cx from 'classnames';
import { Box, BoxProps } from '../Box';
import { Flex, Grow, Shrink, createFlexResolver } from './utils';
import { Responsive, responsive } from '../utils';

export type FlexItemProps = BoxProps & {
  flex?: Responsive<Flex>;
  grow?: Responsive<Grow>;
  shrink?: Responsive<Shrink>;
};

export function FlexItem(props: FlexItemProps) {
  const { className, flex, grow, shrink, ...boxProps } = props;

  const flexClassNames = responsive(createFlexResolver('flex'), flex);
  const flexGrowClassNames = responsive(createFlexResolver('flex'), grow);
  const flexShrinkClassNames = responsive(createFlexResolver('flex'), shrink);

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
