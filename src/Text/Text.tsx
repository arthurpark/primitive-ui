import { createElement, ElementType, HTMLAttributes, forwardRef } from 'react';
import cx from 'clsx';
import { Color } from '../color';
import { Opacity } from '../scale';
import {
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
  TextDecoration,
  TextTransform,
  TextOverflow,
  VerticalAlign,
  Whitespace,
  WordBreak,
} from './types';
import {
  Responsive,
  responsive,
  createPrefixValueResolver,
  resolveValue,
} from '../utils';
import { resolveTextOverflow } from './utils';

export type TextProps = HTMLAttributes<HTMLElement> & {
  element?: ElementType;
  family?: Responsive<FontFamily>;
  size?: Responsive<FontSize>;
  smoothing?: Responsive<FontSmoothing>;
  fontStyle?: Responsive<FontStyle>;
  weight?: Responsive<FontWeight>;
  variantNumeric?: Responsive<FontVariantNumeric>;
  letterSpacing?: Responsive<LetterSpacing>;
  lineHeight?: Responsive<LineHeight>;
  listStyle?: Responsive<ListStyleType>;
  listStylePosition?: Responsive<ListStylePosition>;
  align?: Responsive<TextAlign>;
  color?: Responsive<Color>;
  opacity?: Responsive<Opacity>;
  decoration?: Responsive<TextDecoration>;
  transform?: Responsive<TextTransform>;
  overflow?: Responsive<TextOverflow>;
  verticalAlign?: Responsive<VerticalAlign>;
  whitespace?: Responsive<Whitespace>;
  wordBreak?: Responsive<WordBreak>;
};

export const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
  const {
    element = 'div',
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
    className,
    ...rest
  } = props;

  return createElement(element, {
    className: cx(
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
      responsive<LineHeight>(createPrefixValueResolver('leading'), lineHeight),
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
      className
    ),
    ...rest,
    ref,
  });
});
