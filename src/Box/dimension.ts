import cx from 'classnames';
import { Size } from '../utils/responsive';

enum Prefix {
  WIDTH = 'w',
  HEIGHT = 'h'
}

type Auto = 'auto';

type Pixel = '1px';

type Scale =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64;

type FluidScale =
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5'
  | '1/6'
  | '2/6'
  | '3/6'
  | '4/6'
  | '5/6'
  | '1/12'
  | '2/12'
  | '3/12'
  | '4/12'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12';

type Full = 'full';

type Screen = 'screen';

export type Width = Auto | Pixel | Scale | FluidScale | Full | Screen;

export type Height = Auto | Pixel | Scale | Full | Screen;

export function resolveWidthClassName(width?: Width | Width[]) {
  if (typeof width !== 'number') {
    return '';
  }
  return responsive(Prefix.WIDTH, width);
}

export function resolveHeightClassName(height?: Height | Height[]) {
  if (typeof height !== 'number') {
    return '';
  }

  return responsive(Prefix.HEIGHT, height);
}

function resolveClassName(prefix: Prefix, value: Width | Height, size: Size) {
  return `${size}${prefix}-${value}`;
}

function responsive(
  prefix: Prefix,
  value: Width | Width[] | Height | Height[]
) {
  if (!Array.isArray(value)) {
    return `${prefix}-${value}`;
  }

  const [sm, md, lg, xl] = value;

  if (value.length <= 1) {
    return !value && typeof value !== 'number'
      ? ''
      : resolveClassName(prefix, sm, Size.ALL);
  }

  if (value.length === 2) {
    return cx(
      resolveClassName(prefix, sm, Size.ALL),
      resolveClassName(prefix, md, Size.MEDIUM)
    );
  }

  if (value.length === 3) {
    return cx(
      resolveClassName(prefix, sm, Size.ALL),
      resolveClassName(prefix, md, Size.MEDIUM),
      resolveClassName(prefix, lg, Size.LARGE)
    );
  }

  if (value.length === 4) {
    return cx(
      resolveClassName(prefix, sm, Size.ALL),
      resolveClassName(prefix, md, Size.MEDIUM),
      resolveClassName(prefix, lg, Size.LARGE),
      resolveClassName(prefix, xl, Size.XLARGE)
    );
  }

  throw new Error(
    `Invalid reponsive ${prefix === Prefix.WIDTH ? 'width' : 'height'} value`
  );
}
