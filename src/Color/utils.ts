import type { Color } from './color';

export function resolveBackgroundColorClassName(color?: Color): string {
  return color ? `bg-${color}` : '';
}

export function resolveTextColorClassName(color?: Color): string {
  return color ? `text-${color}` : '';
}
