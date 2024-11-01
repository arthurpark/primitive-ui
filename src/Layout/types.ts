import { Scale, Pixel } from '../tokens/scale';

export type Direction = 'row' | 'row-reverse' | 'col' | 'col-reverse';

// Use literal string because this will also be used by non elements
export type Justify = 'start' | 'end' | 'center' | 'between' | 'around';

export type Align = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type Wrap = 'no-wrap' | 'wrap' | 'wrap-reverse';

// For flex items
export type Flex = 'none' | 1 | 'auto' | 'initial';
export type Grow = 'grow' | 'grow-0';
export type Shrink = 'shrink' | 'shrink-0';
export type Gap = Pixel | Scale;
