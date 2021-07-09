export function createPrefixValueResolver<T>(prefix: string) {
  return (value: T): string => `${prefix}-${value}`;
}

export function resolveValue(value: unknown): string {
  return value as string;
}
