import { Text } from '../../dist';
import { H1, H2, H3, H4, H5, H6 } from 'components/Typography';
import { Screen } from 'components/Screen';
import { Section } from 'components/Section';

export default function TypographyPage(): JSX.Element {
  return (
    <Screen title="Typography">
      <Section title="Heading">
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
        <H6>Heading 6</H6>
      </Section>

      <Section title="Text">
        <Text>Unstyled Text</Text>
        <Text fontStyle="italic">Italicized Text</Text>
      </Section>
    </Screen>
  );
}
