import {
  createElement,
  forwardRef,
  ReactNode,
  CSSProperties,
  ElementType,
  HTMLAttributes,
} from 'react';
import cx from 'classnames';
import { Spacing, resolvePaddingClassName } from './spacing';
import { FlexScale, resolveFlexClassName } from './flex';
import {
  Width,
  Height,
  resolveWidthClassName,
  resolveHeightClassName,
} from './dimension';
import { Color, resolveBackgroundColorClassName } from '../Color';

export type BoxProps = HTMLAttributes<HTMLOrSVGElement> & {
  element?: ElementType;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  padding?: Spacing | Spacing[]; // ALL X Y L R T B
  width?: Width | Width[];
  height?: Height | Height[];
  flex?: FlexScale | FlexScale[];
  backgroundColor?: Color;
};

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const {
    element = 'div',
    className,
    padding,
    width,
    height,
    flex,
    backgroundColor,
    ...rest
  } = props;

  const paddingClassName = resolvePaddingClassName(padding);
  const widthClassName = resolveWidthClassName(width);
  const heightClassName = resolveHeightClassName(height);
  const flexClassName = resolveFlexClassName(flex);
  const backgroundColorClassName = resolveBackgroundColorClassName(
    backgroundColor
  );

  return createElement(element, {
    className: cx(
      paddingClassName,
      widthClassName,
      heightClassName,
      flexClassName,
      backgroundColorClassName,
      className
    ),
    ...rest,
    ref,
  });
});
