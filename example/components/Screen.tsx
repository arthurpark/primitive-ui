import { FlexItem, Stack } from '../../dist';
import { H1 } from './Typography';

export function Screen(props: any): JSX.Element {
  return (
    <Stack padding={{ top: 16, bottom: 4, x: 4 }} className="relative z-0">
      <FlexItem padding={{ y: 2 }}>
        <H1>{props.title}</H1>
      </FlexItem>

      <FlexItem>{props.children}</FlexItem>
    </Stack>
  );
}
