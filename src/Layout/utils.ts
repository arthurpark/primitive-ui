import cx from 'classnames';
import { Size } from '../utils/responsive';

export type Direction = 'row' | 'row-reverse' | 'col' | 'col-reverse';

// Use literal string because this will also be used by non elements
export type Justify = 'start' | 'end' | 'center' | 'between' | 'around';

export type Align = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type Wrap = 'no-wrap' | 'wrap' | 'wrap-reverse';

export type Grow = 'grow' | 'grow-0';

export type Shrink = 'shrink' | 'shrink-0';

type FlexBoxArgs = {
  direction?: Direction | Direction[];
  justify?: Justify | Direction[];
  align?: Align | Align[];
  wrap?: Wrap | Wrap[];
  grow?: Grow | Grow[];
  shrink?: Shrink | Shrink[];
};

export function resolveFlexBoxClassName(args?: FlexBoxArgs): string {
  if (!args) {
    return '';
  }

  const { direction, justify, align, wrap, grow, shrink } = args;

  return cx(
    'flex',
    resolveClassNames('flex', direction),
    resolveClassNames('justify', justify),
    resolveClassNames('items', align),
    resolveClassNames('flex', wrap),
    resolveClassNames('flex', grow),
    resolveClassNames('flex', shrink)
  );
}

function resolveClassNames(
  prefix: 'flex' | 'justify' | 'items',
  value?:
    | Direction
    | Direction[]
    | Justify
    | Justify[]
    | Align
    | Align[]
    | Wrap
    | Wrap[]
    | Grow
    | Grow[]
    | Shrink
    | Shrink[]
) {
  if (!Array.isArray(value)) {
    return value ? `${prefix}-${value}` : '';
  }

  const [sm, md, lg, xl] = value;

  if (value.length <= 1) {
    return sm ? `${prefix}-${sm}` : '';
  }

  if (value.length === 2) {
    return cx(`${prefix}-${sm}`, `${Size.MEDIUM}${prefix}-${md}`);
  }

  if (value.length === 3) {
    return cx(
      `${prefix}-${sm}`,
      `${Size.MEDIUM}${prefix}-${md}`,
      `${Size.LARGE}${prefix}-${lg}`
    );
  }

  if (value.length === 4) {
    return cx(
      `${prefix}-${sm}`,
      `${Size.MEDIUM}${prefix}-${md}`,
      `${Size.LARGE}${prefix}-${lg}`,
      `${Size.XLARGE}${prefix}-${xl}`
    );
  }

  throw new Error(`Invalid responsive ${prefix} value`);
}
