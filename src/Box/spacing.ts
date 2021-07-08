import cx from 'classnames';
import { Scale, Pixel } from '../scale';

enum Prefix {
  PADDING = 'p',
  MARGIN = 'm',
}

enum Direction {
  ALL = '',
  Y = 'y',
  X = 'x',
  LEFT = 'l',
  RIGHT = 'r',
  TOP = 't',
  BOTTOM = 'b',
}

type PaddingScale = Pixel | Scale;

export type Padding =
  | PaddingScale
  | { x: PaddingScale; top?: PaddingScale; bottom?: PaddingScale; y?: never }
  | { y: PaddingScale; left?: PaddingScale; right?: PaddingScale; x?: never }
  | {
      x: PaddingScale;
      y: PaddingScale;
      top?: never;
      bottom?: never;
      left?: never;
      right?: never;
    }
  | {
      top?: PaddingScale;
      bottom?: PaddingScale;
      left?: PaddingScale;
      right?: PaddingScale;
      x?: never;
      y?: never;
    };

// prettier-ignore
type NegativeScale = 
  | '-px' 
  | -0.5 | -1 | -1.5 | -2 | -2.5 | -3 | -3.5 | -4 | -5 | -6 | -7 | -8 | -9 | -10 
  | -11 | -12 | -14 | -16 | -20 | -24 | -28 | -32 | -36 | -40 | -44 | -48 
  | -52 | -56 | -60 | -64 | -72 | -80 | -96;

type MarginScale = PaddingScale | NegativeScale;

export type Margin =
  | MarginScale
  | { x: MarginScale; top?: MarginScale; bottom?: MarginScale; y?: never }
  | { y: MarginScale; left?: MarginScale; right?: MarginScale; x?: never }
  | {
      x: MarginScale;
      y: MarginScale;
      top?: never;
      bottom?: never;
      left?: never;
      right?: never;
    }
  | {
      top?: MarginScale;
      bottom?: MarginScale;
      left?: MarginScale;
      right?: MarginScale;
      x?: never;
      y?: never;
    };

function getClassName(
  prefix: Prefix,
  direction: Direction,
  scale?: PaddingScale | MarginScale
): string {
  if (scale == null) {
    return '';
  }

  if (scale === '-px') {
    return `-${prefix}${direction}-px`;
  }

  if (scale < 0) {
    return `-${prefix}${direction}-${scale}`;
  }

  return `${prefix}${direction}-${scale}`;
}

function resolveClassName(prefix: Prefix, spacing: Padding | Margin): string {
  if (typeof spacing === 'number' || typeof spacing === 'string') {
    return getClassName(prefix, Direction.ALL, spacing);
  }

  // Always resolve to the most specific
  const top = 'y' in spacing ? spacing.y : spacing.top;
  const bottom = 'y' in spacing ? spacing.y : spacing.bottom;
  const left = 'x' in spacing ? spacing.x : spacing.left;
  const right = 'x' in spacing ? spacing.x : spacing.right;

  if (top === bottom && left === right && top === left) {
    return getClassName(prefix, Direction.ALL, top);
  }

  const classNames = [];

  if (top === bottom) {
    classNames.push(getClassName(prefix, Direction.Y, top));
  } else {
    classNames.push(
      getClassName(prefix, Direction.TOP, top),
      getClassName(prefix, Direction.BOTTOM, bottom)
    );
  }

  if (left === right) {
    classNames.push(getClassName(prefix, Direction.X, left));
  } else {
    classNames.push(
      getClassName(prefix, Direction.LEFT, left),
      getClassName(prefix, Direction.RIGHT, right)
    );
  }

  return cx(classNames);
}

export function resolvePadding(value: Padding): string {
  return resolveClassName(Prefix.PADDING, value);
}

export function resolveMargin(value: Margin): string {
  return resolveClassName(Prefix.MARGIN, value);
}
