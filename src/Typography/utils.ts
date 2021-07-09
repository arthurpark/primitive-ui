import { TextOverflow } from './types';

export function resolveTextOverflow(value: TextOverflow): string {
  switch (value) {
    case 'truncate':
      return value;
    default:
      return `overflow-${value}`;
  }
}
