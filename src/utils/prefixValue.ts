export function createPrefixValueResolver<T>(prefix: string) {
  return (value: T): string => `${prefix}-${value}`;
}
