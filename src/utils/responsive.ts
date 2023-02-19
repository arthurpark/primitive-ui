import cx from 'clsx';

enum Size {
  ALL = '',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  XLARGE = 'xl',
  XXLARGE = '2xl',
}

export type Responsive<T> =
  | T
  | [all: T, sm: T, md?: T, lg?: T, xl?: T, xxl?: T];

export function responsive<T>(
  resolverFn: (value: T) => string,
  value?: Responsive<T>
): string {
  if (value == null) {
    return '';
  }

  if (Array.isArray(value)) {
    const [all, sm, md, lg, xl, xxl] = value;

    return cx(
      all ? resolverFn(all) : '',
      sm ? `${Size.SMALL}:${resolverFn(sm)}` : '',
      md ? `${Size.MEDIUM}:${resolverFn(md)}` : '',
      lg ? `${Size.LARGE}:${resolverFn(lg)}` : '',
      xl ? `${Size.XLARGE}:${resolverFn(xl)}` : '',
      xxl ? `${Size.XXLARGE}:${resolverFn(xxl)}` : ''
    );
  }

  return resolverFn(value);
}
