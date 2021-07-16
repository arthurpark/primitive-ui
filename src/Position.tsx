import cx from 'classnames';
import React from 'react';
import { Auto, Pixel, Scale, NegativeScale } from 'scale';
import { Responsive, responsive, resolveValue } from 'utils';
import { Box, BoxProps } from 'Box';

enum Direction {
  INSET = 'inset',
  Y = 'inset-y',
  X = 'inset-x',
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

type PositionScale = Scale | Pixel | NegativeScale;

type PositionDirection =
  | {
      inset?: PositionScale;
      x?: never;
      y?: never;
      top?: never;
      bottom?: never;
      left?: never;
      right?: never;
    }
  | {
      x: PositionScale;
      top?: PositionScale;
      bottom?: PositionScale;
      y?: never;
      left?: never;
      right?: never;
      inset?: never;
    }
  | {
      y: PositionScale;
      left?: PositionScale;
      right?: PositionScale;
      x?: never;
      top?: never;
      bottom?: never;
      inset?: never;
    }
  | {
      x: PositionScale;
      y: PositionScale;
      top?: never;
      bottom?: never;
      left?: never;
      right?: never;
      inset?: never;
    }
  | {
      top?: PositionScale;
      bottom?: PositionScale;
      left?: PositionScale;
      right?: PositionScale;
      x?: never;
      y?: never;
      inset?: never;
    };

type ZIndex = 0 | 10 | 20 | 30 | 40 | 50 | Auto;

type SpecificPositionProps = BoxProps &
  PositionDirection & {
    zIndex?: Responsive<ZIndex>;
  };

type PositionProps = SpecificPositionProps & {
  position: Responsive<Position>;
};

function Position(props: PositionProps) {
  const {
    className,
    position,
    zIndex,
    inset,
    x,
    y,
    top,
    bottom,
    left,
    right,
    ...boxProps
  } = props;

  // TODO: Support responsive
  const positionDirectionClassNames = resolveClassName({
    inset,
    x,
    y,
    top,
    bottom,
    left,
    right,
  } as PositionDirection);

  return (
    <Box
      className={cx(
        responsive<Position>(resolveValue, position),
        positionDirectionClassNames,
        responsive<ZIndex>(resolveValue, zIndex),
        className
      )}
      {...boxProps}
    />
  );
}

export function Static(props: SpecificPositionProps) {
  return <Position position="static" {...props} />;
}

export function Relative(props: SpecificPositionProps) {
  return <Position position="relative" {...props} />;
}

export function Absolute(props: SpecificPositionProps) {
  return <Position position="absolute" {...props} />;
}

export function Fixed(props: SpecificPositionProps) {
  return <Position position="fixed" {...props} />;
}

export function Sticky(props: SpecificPositionProps) {
  return <Position position="sticky" {...props} />;
}

function getClassName(dir: Direction, value?: PositionScale): string {
  if (value == null) {
    return '';
  }

  const isNegative =
    (typeof value === 'number' && value < 0) ||
    (typeof value === 'string' && value[0] === '-');

  const normalizedValue =
    typeof value === 'number' ? Math.abs(value) : value.substring(1);

  const className = `${dir}-${normalizedValue}`;

  return isNegative ? `-${className}` : className;
}

function resolveClassName(direction: PositionDirection): string {
  if ('isnet' in direction) {
    return getClassName(Direction.INSET, direction);
  }

  // Always resolve to the most specific
  const top = 'y' in direction ? direction.y : direction.top;
  const bottom = 'y' in direction ? direction.y : direction.bottom;
  const left = 'x' in direction ? direction.x : direction.left;
  const right = 'x' in direction ? direction.x : direction.right;

  if (top === bottom && left === right && top === left) {
    return getClassName(Direction.INSET, top);
  }

  const classNames = [];

  if (top === bottom) {
    classNames.push(getClassName(Direction.Y, top));
  } else {
    classNames.push(
      getClassName(Direction.TOP, top),
      getClassName(Direction.BOTTOM, bottom)
    );
  }

  if (left === right) {
    classNames.push(getClassName(Direction.X, left));
  } else {
    classNames.push(
      getClassName(Direction.LEFT, left),
      getClassName(Direction.RIGHT, right)
    );
  }

  return cx(classNames);
}
