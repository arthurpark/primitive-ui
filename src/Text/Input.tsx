import cx from 'clsx';
import { forwardRef, createElement } from 'react';
import { Color } from '../tokens/color';
import { Opacity } from '../tokens/scale';
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
  TextDecoration,
  TextTransform,
  TextOverflow,
  VerticalAlign,
  Whitespace,
  WordBreak,
} from './types';
import { TextProps } from './Text';
import { resolveTextOverflow } from '../utils/text';

type InputProps = TextProps & {
  type?: InputType;
  id?: string;
  name?: string;
  value?: string;
  placeholderColor?: Responsive<Color>;
  placeholderOpacity?: Responsive<Opacity>;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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

  return createElement('input', {
    type,

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
    ...textProps,
    ref,
  });
});
