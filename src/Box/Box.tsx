import {
  createElement,
  forwardRef,
  ReactNode,
  CSSProperties,
  ElementType,
  HTMLAttributes,
} from 'react';
import cx from 'classnames';
import { Responsive, responsive } from '../utils';
import { Padding, Margin, resolveMargin, resolvePadding } from './spacing';
import { Width, Height, resolveWidth, resolveHeight } from './dimension';
import { Color, resolveBackgroundColor } from '../Color';

export type BoxProps = HTMLAttributes<HTMLOrSVGElement> & {
  element?: ElementType;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  margin?: Responsive<Margin>;
  padding?: Responsive<Padding>;
  width?: Responsive<Width>;
  height?: Responsive<Height>;
  backgroundColor?: Responsive<Color>;
};

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const {
    element = 'div',
    className,
    margin,
    padding,
    width,
    height,
    backgroundColor,
    ...rest
  } = props;

  const marginClassName = responsive(resolveMargin, margin);
  const paddingClassName = responsive(resolvePadding, padding);
  const widthClassName = responsive(resolveWidth, width);
  const heightClassName = responsive(resolveHeight, height);
  const backgroundColorClassName = responsive(
    resolveBackgroundColor,
    backgroundColor
  );

  return createElement(element, {
    className: cx(
      marginClassName,
      paddingClassName,
      widthClassName,
      heightClassName,
      backgroundColorClassName,
      className
    ),
    ...rest,
    ref,
  });
});
