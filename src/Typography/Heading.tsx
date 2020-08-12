import React from 'react';
import { Text, TextProps } from './Text';

type HeadingProps = TextProps & {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight: 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
};

export function Heading(props: HeadingProps) {
  const { element, size, weight, children, ...rest } = props;
  return (
    <Text element={element} size={size} weight={weight} {...rest}>
      {children}
    </Text>
  );
}

type HProps = Omit<TextProps, 'element' | 'size' | 'weight'>;

export function H1(props: HProps) {
  return <Heading element="h1" size="6xl" weight="bold" {...props} />;
}

export function H2(props: HProps) {
  return <Heading element="h2" size="5xl" weight="bold" {...props} />;
}

export function H3(props: HProps) {
  return <Heading element="h3" size="4xl" weight="bold" {...props} />;
}

export function H4(props: HProps) {
  return <Heading element="h4" size="3xl" weight="bold" {...props} />;
}

export function H5(props: HProps) {
  return <Heading element="h5" size="2xl" weight="bold" {...props} />;
}

export function H6(props: HProps) {
  return <Heading element="h6" size="xl" weight="bold" {...props} />;
}
