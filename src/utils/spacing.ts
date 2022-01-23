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

type ExclusiveY<ScaleType> =
  | { y?: ScaleType; top?: never; bottom?: never }
  | { y?: never; top?: ScaleType; bottom?: ScaleType };
type ExclusiveX<ScaleType> =
  | { x?: ScaleType; left?: never; right?: never }
  | { x?: never; left?: ScaleType; right?: ScaleType };

export type SpacingProp<T> = T | (ExclusiveX<T> & ExclusiveY<T>);
