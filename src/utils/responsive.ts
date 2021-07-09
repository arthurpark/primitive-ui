import cx from 'classnames';

enum Size {
  ALL = '',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  XLARGE = 'xl',
  XXLARGE = '2xl',
}

export type Responsive<T> = T | [all: T, sm: T, md?: T, lg?: T, xl?: T, xxl?: T];

export function responsive<T>(
  resolverFn: (value: T) => string,
  value?: Responsive<T>
): string {
  if (value == null) {
    return '';
  }

  if (Array.isArray(value)) {
    return cx(
      value[0] ? resolverFn(value[0]) : '',
      value[1] ? `${Size.SMALL}:${resolverFn(value[1])}` : '',
      value[2] ? `${Size.MEDIUM}:${resolverFn(value[2])}` : '',
      value[3] ? `${Size.LARGE}:${resolverFn(value[3])}` : '',
      value[4] ? `${Size.XLARGE}:${resolverFn(value[4])}` : '',
      value[5] ? `${Size.XXLARGE}:${resolverFn(value[5])}` : ''
    );
  }

  return resolverFn(value);
}
