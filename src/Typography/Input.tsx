import React, { CSSProperties } from 'react';
import cx from 'classnames';
import { Color } from '../Color';
import { resolveFontSizeClassName } from './fontSize';
import {
  InputType,
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

type InputProps = {
  type?: InputType;
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  smoothing?: FontSmoothing;
  fontStyle?: FontStyle;
  weight?: FontWeight;
  letterSpacing?: LetterSpacing;
  lineHeight?: LineHeight;
  placeholderColor?: Color;
  placeholderOpacity?: Opacity;
  align?: TextAlign;
  color?: Color;
  opacity?: Opacity;
  decoration?: TextDecoration;
  transform?: TextTransform;
  verticalAlign?: VerticalAlign;
  whitespace?: Whitespace;
  wordBreak?: WordBreak;
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  style?: CSSProperties;
};

export function Input(props: InputProps) {
  const {
    type = 'text',
    fontFamily = 'sans',
    fontSize,
    smoothing,
    fontStyle,
    weight,
    letterSpacing,
    lineHeight,
    placeholderColor,
    placeholderOpacity,
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

  return (
    <input
      type={type}
      className={cx(
        fontFamily ? `font-${fontFamily}` : '',
        resolveFontSizeClassName(fontSize),
        smoothing,
        fontStyle,
        weight ? `font-${weight}` : '',
        letterSpacing ? `tracking-${letterSpacing}` : '',
        lineHeight ? `leading-${lineHeight}` : '',
        placeholderColor ? `placeholder-${placeholderColor}` : '',
        placeholderOpacity ? `placeholder-${placeholderOpacity}` : '',
        align ? `text-${align}` : '',
        color ? `text-${color}` : '',
        opacity ? `text-opacity-${opacity}` : '',
        decoration,
        transform,
        verticalAlign ? `align-${verticalAlign}` : '',
        whitespace ? `whitespace-${whitespace}` : '',
        wordBreak,
        className
      )}
      {...rest}
    />
  );
}
