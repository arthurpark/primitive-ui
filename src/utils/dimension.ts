import {
  Scale,
  FractionScale,
  Fraction12thScale,
  Auto,
  Pixel,
  Full,
  Screen,
} from '../tokens/scale';

enum Prefix {
  WIDTH = 'w',
  HEIGHT = 'h',
}

type FluidWidthScale = FractionScale | Fraction12thScale;

type FluidHeightScale = FractionScale;

export type Width = Auto | Pixel | Scale | FluidWidthScale | Full | Screen;

export function resolveWidth(value: Width): string {
  return `${Prefix.WIDTH}-${value}`;
}

export type Height = Auto | Pixel | Scale | FluidHeightScale | Full | Screen;

export function resolveHeight(value: Height): string {
  return `${Prefix.HEIGHT}-${value}`;
}
