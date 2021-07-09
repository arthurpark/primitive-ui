import React from 'react';
import cx from 'classnames';
import { Color } from '../color';
import {
  Responsive,
  responsive,
  createPrefixValueResolver,
  resolveValue,
} from '../utils';
import {
  InputType,
  FontFamily,
  FontSize,
  FontSmoothing,
  FontStyle,
  FontWeight,
  FontVariantNumeric,
  LetterSpacing,
  LineHeight,
  ListStyleType,
  ListStylePosition,
  TextAlign,
  Opacity,
  TextDecoration,
  TextTransform,
  TextOverflow,
  VerticalAlign,
  Whitespace,
  WordBreak,
} from './types';
import { TextProps } from './Text';
import { resolveTextOverflow } from './utils';

type InputProps = TextProps & {
  type?: InputType;
  id?: string;
  name?: string;
  value?: string;
  placeholderColor?: Responsive<Color>;
  placeholderOpacity?: Responsive<Opacity>;
};

export function Input(props: InputProps) {
  const {
    type = 'text',
    family,
    size,
    smoothing,
    fontStyle,
    weight,
    variantNumeric,
    letterSpacing,
    lineHeight,
    listStyle,
    listStylePosition,
    align,
    color,
    opacity,
    decoration,
    transform,
    overflow,
    verticalAlign,
    whitespace,
    wordBreak,
    placeholderColor,
    placeholderOpacity,
    className,
    ...textProps
  } = props;

  return (
    <input
      type={type}
      className={cx(
        responsive<FontFamily>(createPrefixValueResolver('font'), family),
        responsive<FontSize>(createPrefixValueResolver('text'), size),
        responsive<FontSmoothing>(resolveValue, smoothing),
        responsive<FontStyle>(resolveValue, fontStyle),
        responsive<FontWeight>(createPrefixValueResolver('font'), weight),
        responsive<FontVariantNumeric>(resolveValue, variantNumeric),
        responsive<LetterSpacing>(
          createPrefixValueResolver('tracking'),
          letterSpacing
        ),
        responsive<LineHeight>(
          createPrefixValueResolver('leading'),
          lineHeight
        ),
        responsive<ListStyleType>(createPrefixValueResolver('list'), listStyle),
        responsive<ListStylePosition>(
          createPrefixValueResolver('list'),
          listStylePosition
        ),
        responsive<TextAlign>(createPrefixValueResolver('text'), align),
        responsive<Color>(createPrefixValueResolver('text'), color),
        responsive<Opacity>(createPrefixValueResolver('text-opacity'), opacity),
        responsive<TextDecoration>(resolveValue, decoration),
        responsive<TextTransform>(resolveValue, transform),
        responsive<TextOverflow>(resolveTextOverflow, overflow),
        responsive<VerticalAlign>(
          createPrefixValueResolver('align'),
          verticalAlign
        ),
        responsive<Whitespace>(
          createPrefixValueResolver('whitespace'),
          whitespace
        ),
        responsive<WordBreak>(createPrefixValueResolver('break'), wordBreak),
        responsive<Color>(
          createPrefixValueResolver('placeholder'),
          placeholderColor
        ),
        className
      )}
      {...textProps}
    />
  );
}
