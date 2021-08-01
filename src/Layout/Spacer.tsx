import { FlexItemProps, FlexItem } from './FlexItem';

type Props = Omit<FlexItemProps, 'children'>;

// Spacer is special type of <FlexItem> without children
export function Spacer(props: Props): JSX.Element {
  const { width, height, ...flexItemProps } = props;

  return <FlexItem width={width} height={height} {...flexItemProps} />;
}
