import { createElement, AnchorHTMLAttributes, forwardRef } from 'react';
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
import { responsive, createPrefixValueResolver, resolveValue } from '../utils';
import { resolveTextOverflow } from './utils';
import { TextProps } from './Text';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<TextProps, 'element'>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    href,
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

  return createElement('a', {
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
