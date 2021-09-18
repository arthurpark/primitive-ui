import * as React from 'react';
import { Text } from '../../../dist';
import type {
  FontSize,
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
} from '../../../dist/Text/types';
import { Screen } from 'components/Screen';
import { Section } from 'components/Section';

export default function TypographyPage(): JSX.Element {
  return (
    <Screen title="Typography">
      <Section title="Font family">
        <Text family="mono">Mono</Text>
        <Text family="sans">Sans</Text>
        <Text family="serif">Serif</Text>
      </Section>

      <Section title="Font size">
        {[
          'xs',
          'sm',
          'base',
          'lg',
          'xl',
          '2xl',
          '3xl',
          '4xl',
          '5xl',
          '6xl',
          '7xl',
          '8xl',
          '9xl',
        ]
          .reverse()
          .map((size: FontSize) => (
            <Text key={size} size={size}>
              {size}
            </Text>
          ))}
      </Section>

      <Section title="Font Smoothing">
        <Text smoothing="antialiased">Antialiased Text</Text>
        <Text smoothing="subpixel-antialiased">Subpixel antialiased Text</Text>
      </Section>

      <Section title="Font Style">
        <Text>Unstyled Text</Text>
        <Text fontStyle="italic">Italicized Text</Text>
        <Text fontStyle="non-italic">Non Italicized Text</Text>
      </Section>

      <Section title="Font Weight">
        {[
          'thin',
          'extralight',
          'light',
          'normal',
          'medium',
          'semibold',
          'bold',
          'extrabold',
          'black',
        ].map((weight: FontWeight) => (
          <Text key={weight} weight={weight}>
            {weight}
          </Text>
        ))}
      </Section>

      <Section title="Font Variant Numeric">
        {[
          'normal-nums',
          'ordinal',
          'slashed-zero',
          'lining-nums',
          'oldstyle-nums',
          'proportional-nums',
          'tabular-nums',
          'diagonal-fractions',
          'stacked-fractions',
        ].map((variantNumeric: FontVariantNumeric) => (
          <Text key={variantNumeric} variantNumeric={variantNumeric}>
            {variantNumeric}
          </Text>
        ))}
      </Section>

      <Section title="Letter Spacing">
        {['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'].map(
          (letterSpacing: LetterSpacing) => (
            <Text key={letterSpacing} letterSpacing={letterSpacing}>
              {letterSpacing}
            </Text>
          )
        )}
      </Section>

      <Section title="Line Height">
        {[
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          'none',
          'tight',
          'snug',
          'normal',
          'relaxed',
          'loose',
        ].map((lineHeight: LineHeight) => (
          <Text key={lineHeight} lineHeight={lineHeight}>
            {lineHeight}
          </Text>
        ))}
      </Section>

      <Section title="List Style Type">
        {['none', 'disc', 'decimal'].map((listStyle: ListStyleType) => (
          <Text key={listStyle} listStyle={listStyle}>
            {listStyle}
          </Text>
        ))}
      </Section>

      <Section title="List Style Position">
        {['inside', 'outside'].map((listStylePosition: ListStylePosition) => (
          <Text key={listStylePosition} listStylePosition={listStylePosition}>
            {listStylePosition}
          </Text>
        ))}
      </Section>

      <Section title="Text Align">
        {['left', 'cennter', 'right', 'justify'].map((align: TextAlign) => (
          <Text key={align} align={align}>
            {align}
          </Text>
        ))}
      </Section>

      <Section title="Text Decoration">
        {['underline', 'line-through', 'no-underline'].map(
          (decoration: TextDecoration) => (
            <Text key={decoration} decoration={decoration}>
              {decoration}
            </Text>
          )
        )}
      </Section>

      <Section title="Text Transform">
        {['uppercase', 'lowercase', 'capitalize', 'normal-case'].map(
          (transform: TextTransform) => (
            <Text key={transform} transform={transform}>
              {transform}
            </Text>
          )
        )}
      </Section>

      <Section title="Text Overflow">
        {['truncate', 'ellipsis', 'clip'].map((overflow: TextOverflow) => (
          <Text key={overflow} overflow={overflow}>
            {overflow}
          </Text>
        ))}
      </Section>

      <Section title="Vertical Align">
        {['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom'].map(
          (verticalAlign: VerticalAlign) => (
            <Text key={verticalAlign} verticalAlign={verticalAlign}>
              {verticalAlign}
            </Text>
          )
        )}
      </Section>

      <Section title="Whitespace">
        {['normal', 'no-wrap', 'pre', 'pre-line', 'pre-wrap'].map(
          (whitespace: Whitespace) => (
            <Text key={whitespace} whitespace={whitespace}>
              {whitespace}
            </Text>
          )
        )}
      </Section>

      <Section title="Word Break">
        {['break-normal', 'break-word', 'break-all'].map(
          (wordBreak: WordBreak) => (
            <Text key={wordBreak} wordBreak={wordBreak}>
              {wordBreak}
            </Text>
          )
        )}
      </Section>
    </Screen>
  );
}
