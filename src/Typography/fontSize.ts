import { FontSize } from './types';

export function resolveFontSizeClassName(size: FontSize = 'base') {
  return `text-${size}`;
}
