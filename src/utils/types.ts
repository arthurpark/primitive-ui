export type ExclusiveX<ScaleType> =
  | { x?: ScaleType; left?: never; right?: never }
  | { x?: never; left?: ScaleType; right?: ScaleType };

export type ExclusiveY<ScaleType> =
  | { y?: ScaleType; top?: never; bottom?: never }
  | { y?: never; top?: ScaleType; bottom?: ScaleType };

export type ExclusiveXY<ScaleType> = ExclusiveX<ScaleType> &
  ExclusiveY<ScaleType>;
