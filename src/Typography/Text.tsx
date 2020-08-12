import React, { ReactNode, ElementType, CSSProperties } from 'react';
import cx from 'classnames';
import { Color } from '../Color';
import { resolveFontSizeClassName } from './fontSize';
import {
  FontFamily,
  FontSize,
  FontSmoothing,
  FontStyle,
  FontWeight,
  LetterSpacing,
  LineHeight,
  TextAlign,
  Opacity,
  TextDecoration,
  TextTransform,
  VerticalAlign,
  Whitespace,
  WordBreak,
} from './types';

export type TextProps = {
  element?: ElementType;
  family?: FontFamily;
  size?: FontSize;
  smoothing?: FontSmoothing;
  fontStyle?: FontStyle;
  weight?: FontWeight;
  letterSpacing?: LetterSpacing;
  lineHeight?: LineHeight;
  align?: TextAlign;
  color?: Color;
  opacity?: Opacity;
  decoration?: TextDecoration;
  transform?: TextTransform;
  verticalAlign?: VerticalAlign;
  whitespace?: Whitespace;
  wordBreak?: WordBreak;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export function Text(props: TextProps) {
  const {
    element = 'div',
    family,
    size,
    smoothing,
    fontStyle,
    weight,
    letterSpacing,
    lineHeight,
    align,
    color,
    opacity,
    decoration,
    transform,
    verticalAlign,
    whitespace,
    wordBreak,
    className,
    ...rest
  } = props;

  return React.createElement(element, {
    className: cx(
      family ? `font-${family}` : '',
      resolveFontSizeClassName(size),
      smoothing,
      fontStyle,
      weight ? `font-${weight}` : '',
      letterSpacing ? `tracking-${letterSpacing}` : '',
      lineHeight ? `leading-${lineHeight}` : '',
      align ? `text-${align}` : '',
      color ? `text-${color}` : '',
      opacity ? `text-opacity-${opacity}` : '',
      decoration,
      transform,
      verticalAlign ? `align-${verticalAlign}` : '',
      whitespace ? `whitespace-${whitespace}` : '',
      wordBreak,
      className
    ),
    ...rest,
  });
}
