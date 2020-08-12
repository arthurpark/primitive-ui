import cx from 'classnames';
import { Size } from '../utils/responsive';

export type SpacingScale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

enum Prefix {
  PADDING = 'p',
  MARGIN = 'm'
}

enum Direction {
  ALL = '',
  Y = 'y',
  X = 'x',
  LEFT = 'l',
  RIGHT = 'r',
  TOP = 't',
  BOTTOM = 'b'
}

function getSpacing(
  type: Prefix,
  scale?: SpacingScale,
  direction?: Direction,
  size?: Size
) {
  if (typeof scale !== 'number') {
    return '';
  }
  const spacingSize = size || Size.ALL;
  const spacingScale = scale;
  const spacingDirection = direction || Direction.ALL;
  return `${spacingSize}${type}${spacingDirection}-${spacingScale}`;
}

export type Spacing = {
  all?: SpacingScale;
  y?: SpacingScale;
  x?: SpacingScale;
  top?: SpacingScale;
  bottom?: SpacingScale;
  left?: SpacingScale;
  right?: SpacingScale;
};

export function resolvePaddingClassName(spacing?: Spacing | Spacing[]) {
  if (!spacing) {
    return '';
  }

  return resolveResponsiveProps(Prefix.PADDING, spacing);
}

function resolveClassName(prefix: Prefix, spacing: Spacing, size: Size) {
  const { all, x, y, top, bottom, left, right } = spacing;

  // Always resolve to the most specific
  const topScale = all ?? y ?? top ?? 0;
  const bottomScale = all ?? y ?? bottom ?? 0;
  const leftScale = all ?? x ?? left ?? 0;
  const rightScale = all ?? x ?? right ?? 0;

  if (
    topScale === bottomScale &&
    leftScale === rightScale &&
    topScale === leftScale
  ) {
    return getSpacing(prefix, topScale, Direction.ALL, size);
  }

  const classNames = [];

  if (topScale === bottomScale) {
    classNames.push(getSpacing(prefix, topScale, Direction.Y, size));
  } else {
    classNames.push(
      getSpacing(prefix, topScale, Direction.TOP, size),
      getSpacing(prefix, bottomScale, Direction.BOTTOM, size)
    );
  }

  if (leftScale === rightScale) {
    classNames.push(getSpacing(prefix, leftScale, Direction.X, size));
  } else {
    classNames.push(
      getSpacing(prefix, leftScale, Direction.LEFT, size),
      getSpacing(prefix, rightScale, Direction.RIGHT, size)
    );
  }

  return cx(classNames);
}

function resolveResponsiveProps(prefix: Prefix, spacing: Spacing | Spacing[]) {
  if (!Array.isArray(spacing)) {
    return resolveClassName(prefix, spacing, Size.ALL);
  }

  const [sm, md, lg, xl] = spacing;

  if (spacing.length <= 1) {
    return sm ? resolveClassName(prefix, sm, Size.ALL) : '';
  }

  if (spacing.length === 2) {
    return cx(
      resolveClassName(prefix, sm, Size.ALL),
      resolveClassName(prefix, md, Size.MEDIUM)
    );
  }

  if (spacing.length === 3) {
    return cx(
      resolveClassName(prefix, sm, Size.ALL),
      resolveClassName(prefix, md, Size.MEDIUM),
      resolveClassName(prefix, lg, Size.LARGE)
    );
  }

  if (spacing.length === 4) {
    return cx(
      resolveClassName(prefix, sm, Size.ALL),
      resolveClassName(prefix, md, Size.MEDIUM),
      resolveClassName(prefix, lg, Size.LARGE),
      resolveClassName(prefix, xl, Size.XLARGE)
    );
  }

  throw new Error(
    `Invalid reponsive ${
      prefix === Prefix.PADDING ? 'padding' : 'margin'
    } value`
  );
}
