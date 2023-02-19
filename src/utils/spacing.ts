import { ExclusiveXY } from './types';

export enum Prefix {
  PADDING = 'p',
  MARGIN = 'm',
}

export enum Direction {
  ALL = '',
  Y = 'y',
  X = 'x',
  LEFT = 'l',
  RIGHT = 'r',
  TOP = 't',
  BOTTOM = 'b',
}

export type SpacingProp<T> = T | ExclusiveXY<T>;
