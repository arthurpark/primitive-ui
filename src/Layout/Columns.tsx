import { FlexBox, FlexBoxProps } from './FlexBox';

type ColumnsProps = Omit<FlexBoxProps, 'direction'>;

export function Columns(props: ColumnsProps): JSX.Element {
  return <FlexBox {...props} direction="row" />;
}
