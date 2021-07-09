import {
  createElement,
  forwardRef,
  ReactNode,
  CSSProperties,
  ElementType,
  HTMLAttributes,
} from 'react';
import cx from 'classnames';
import { Responsive, responsive, createPrefixValueResolver } from '../utils';
import { Padding, Margin, resolveMargin, resolvePadding } from './spacing';
import { Width, Height, resolveWidth, resolveHeight } from './dimension';
import {
  BackgroundAttachment,
  BackgroundClip,
  BackgroundColor,
  BackgroundOpacity,
  BackgroundOrigin,
  BackgroundPosition,
  BackgroundRepeat,
  BackgroundSize,
  BackgroundImage,
  GradientFrom,
  GradientVia,
  GradientTo,
} from './background';

export type BoxProps = HTMLAttributes<HTMLOrSVGElement> & {
  element?: ElementType;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  margin?: Responsive<Margin>;
  padding?: Responsive<Padding>;
  width?: Responsive<Width>;
  height?: Responsive<Height>;
  background?: {
    attachment?: Responsive<BackgroundAttachment>;
    clip?: Responsive<BackgroundClip>;
    color?: Responsive<BackgroundColor>;
    opacity?: Responsive<BackgroundOpacity>;
    origin?: Responsive<BackgroundOrigin>;
    position?: Responsive<BackgroundPosition>;
    repeat?: Responsive<BackgroundRepeat>;
    size?: Responsive<BackgroundSize>;
    image?: Responsive<BackgroundImage>;
    gradient?: {
      from?: Responsive<GradientFrom>;
      via?: Responsive<GradientVia>;
      to?: Responsive<GradientTo>;
    };
  };
};

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const {
    element = 'div',
    className,
    margin,
    padding,
    width,
    height,
    background,
    ...rest
  } = props;

  const marginClassName = responsive(resolveMargin, margin);
  const paddingClassName = responsive(resolvePadding, padding);
  const widthClassName = responsive(resolveWidth, width);
  const heightClassName = responsive(resolveHeight, height);

  const backgroundAttachmentClassName = responsive(
    createPrefixValueResolver('bg'),
    background?.attachment
  );
  const backgroundClipClassName = responsive(
    createPrefixValueResolver('bg-clip'),
    background?.clip
  );
  const backgroundColorClassName = responsive(
    createPrefixValueResolver('bg'),
    background?.color
  );
  const backgroundOpacityClassName = responsive(
    createPrefixValueResolver('bg-opacity'),
    background?.opacity
  );
  const backgroundOriginClassName = responsive(
    createPrefixValueResolver('bg-origin'),
    background?.origin
  );
  const backgroundPositionClassName = responsive(
    createPrefixValueResolver('bg'),
    background?.position
  );
  const backgroundRepeatClassName = responsive(
    createPrefixValueResolver('bg'),
    background?.repeat
  );
  const backgroundSizeClassName = responsive(
    createPrefixValueResolver('bg'),
    background?.size
  );
  const backgroundImageClassName = responsive(
    createPrefixValueResolver('bg'),
    background?.image
  );
  const gradientFromClassName = responsive(
    createPrefixValueResolver('from'),
    background?.gradient?.from
  );
  const gradientViaClassName = responsive(
    createPrefixValueResolver('bg'),
    background?.gradient?.via
  );

  const gradientToClassName = responsive(
    createPrefixValueResolver('bg'),
    background?.gradient?.to
  );

  return createElement(element, {
    className: cx(
      marginClassName,
      paddingClassName,
      widthClassName,
      heightClassName,
      backgroundAttachmentClassName,
      backgroundClipClassName,
      backgroundColorClassName,
      backgroundOpacityClassName,
      backgroundOriginClassName,
      backgroundPositionClassName,
      backgroundRepeatClassName,
      backgroundSizeClassName,
      backgroundImageClassName,
      gradientFromClassName,
      gradientViaClassName,
      gradientToClassName,
      className
    ),
    ...rest,
    ref,
  });
});
