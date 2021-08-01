import { FlexBox, FlexBoxProps } from './FlexBox';

type StackProps = Omit<FlexBoxProps, 'direction'>;

export function Stack(props: StackProps): JSX.Element {
  return <FlexBox {...props} direction={'col'} />;
}
