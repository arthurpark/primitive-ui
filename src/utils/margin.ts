import cx from 'clsx';
import { Scale, NegativeScale, Pixel } from 'tokens/scale';
import { SpacingProp, Prefix, Direction } from './spacing';

type MarginScale = Pixel | Scale | NegativeScale;

export type Margin = SpacingProp<MarginScale>;

type GetClassNameArgs = {
  direction: Direction;
  scale?: MarginScale;
};

function getClassName({ direction, scale }: GetClassNameArgs): string {
  if (scale == null) {
    return '';
  }

  if (scale === '-px' || scale < 0) {
    return `-${Prefix.MARGIN}${direction}-px`;
  }

  return `${Prefix.MARGIN}${direction}-${scale}`;
}

export function resolveMargin(spacing: Margin): string {
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
