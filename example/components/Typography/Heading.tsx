import * as React from 'react';
import { Text, TextProps } from '../../../dist';

type HeadingProps = TextProps & {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight: 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
};

export function Heading(props: HeadingProps): JSX.Element {
  const { element, size, weight, children, ...rest } = props;
  return (
    <Text element={element} size={size} weight={weight} {...rest}>
      {children}
    </Text>
  );
}

type HProps = Omit<TextProps, 'element' | 'size' | 'weight'>;

export function H1(props: HProps): JSX.Element {
  return <Heading element="h1" size="3xl" weight="bold" {...props} />;
}

export function H2(props: HProps): JSX.Element {
  return <Heading element="h2" size="xl" weight="bold" {...props} />;
}

export function H3(props: HProps): JSX.Element {
  return <Heading element="h3" size="lg" weight="bold" {...props} />;
}

export function H4(props: HProps): JSX.Element {
  return <Heading element="h4" size="base" weight="bold" {...props} />;
}

export function H5(props: HProps): JSX.Element {
  return <Heading element="h5" size="sm" weight="bold" {...props} />;
}

export function H6(props: HProps): JSX.Element {
  return <Heading element="h6" size="xs" weight="bold" {...props} />;
}
