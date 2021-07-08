export type FlexValue = 'none' | 1 | 'auto' | 'initial';

export function resolveFlex(value: FlexValue): string {
  return `flex-${value}`;
}
