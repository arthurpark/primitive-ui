import { Scale, Auto, Pixel, Full, Screen } from '../scale';

enum Prefix {
  WIDTH = 'w',
  HEIGHT = 'h',
}

type FractionScale =
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
  | '5/6';

type Fraction12thScale =
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

type FluidWidthScale = FractionScale | Fraction12thScale;

type FluidHeightScale = FractionScale;

export type Width = Auto | Pixel | Scale | FluidWidthScale | Full | Screen;

export type Height = Auto | Pixel | Scale | FluidHeightScale | Full | Screen;

function resolveClassName(prefix: Prefix, value: Width | Height): string {
  return `${prefix}-${value}`;
}

export function resolveWidth(value: Width): string {
  return resolveClassName(Prefix.WIDTH, value);
}

export function resolveHeight(value: Height): string {
  return resolveClassName(Prefix.HEIGHT, value);
}
