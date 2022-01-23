import cx from 'clsx';
import { Scale, Pixel } from '../tokens/scale';
import { SpacingProp, Prefix, Direction } from './spacing';

type PaddingScale = Pixel | Scale;

export type Padding = SpacingProp<PaddingScale>;

type GetClassNameArgs = {
  direction: Direction;
  scale?: PaddingScale;
};

function getClassName({ direction, scale }: GetClassNameArgs): string {
  if (scale == null) {
    return '';
  }

  return `${Prefix.PADDING}${direction}-${scale}`;
}

export function resolvePadding(spacing: Padding): string {
  if (typeof spacing === 'number' || typeof spacing === 'string') {
    return getClassName({
      direction: Direction.ALL,
      scale: spacing,
    });
  }

  // Always resolve to the most specific
  const top = 'y' in spacing ? spacing.y : spacing.top;
  const bottom = 'y' in spacing ? spacing.y : spacing.bottom;
  const left = 'x' in spacing ? spacing.x : spacing.left;
  const right = 'x' in spacing ? spacing.x : spacing.right;

  if (top === bottom && left === right && top === left) {
    return getClassName({
      direction: Direction.ALL,
      scale: top,
    });
  }

  const classNames = [];

  if (top === bottom) {
    classNames.push(
      getClassName({
        direction: Direction.Y,
        scale: top,
      })
    );
  } else {
    classNames.push(
      getClassName({
        direction: Direction.TOP,
        scale: top,
      }),
      getClassName({
        direction: Direction.BOTTOM,
        scale: bottom,
      })
    );
  }

  if (left === right) {
    classNames.push(
      getClassName({
        direction: Direction.X,
        scale: left,
      })
    );
  } else {
    classNames.push(
      getClassName({
        direction: Direction.LEFT,
        scale: left,
      }),
      getClassName({
        direction: Direction.RIGHT,
        scale: right,
      })
    );
  }

  return cx(classNames);
}
