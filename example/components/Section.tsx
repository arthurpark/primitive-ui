import { Stack, FlexItem } from '../../dist';
import { H2 } from './Typography';

export function Section(props: any): JSX.Element {
  const { title, children } = props;

  return (
    <Stack padding={4}>
      <FlexItem
        padding={{ y: 2 }}
        background={{ color: 'white' }}
        className="sticky top-16 border-b-2 border-gray-300 bg-opacity-75"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        <H2>{title}</H2>
      </FlexItem>

      <FlexItem padding={{ y: 2 }}>{children}</FlexItem>
    </Stack>
  );
}
