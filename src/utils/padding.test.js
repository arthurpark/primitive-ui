import { resolvePadding } from './padding';

describe('resolvePadding', () => {
  it('should return className for: 0', () => {
    expect(resolvePadding(0)).toBe('p-0');
    expect(resolvePadding({ x: 0 })).toBe('px-0');
    expect(resolvePadding({ y: 0 })).toBe('py-0');
    expect(resolvePadding({ right: 0 })).toBe('pr-0');
  });

  it('should return className for all directions', () => {
    expect(resolvePadding(4)).toBe('p-4');
  });

  it('should return className for a direction', () => {
    expect(resolvePadding({ x: 4 })).toBe('px-4');
    expect(resolvePadding({ y: 4 })).toBe('py-4');
    expect(resolvePadding({ top: 4 })).toBe('pt-4');
    expect(resolvePadding({ bottom: 4 })).toBe('pb-4');
    expect(resolvePadding({ left: 4 })).toBe('pl-4');
    expect(resolvePadding({ right: 4 })).toBe('pr-4');
  });

  it('should return classNames for multiple directions', () => {
    expect(resolvePadding({ x: 3, y: 4 })).toContain('px-3');
    expect(resolvePadding({ x: 3, y: 4 })).toContain('py-4');

    expect(resolvePadding({ x: 3, top: 4 })).toContain('px-3');
    expect(resolvePadding({ x: 3, top: 4 })).toContain('pt-4');

    expect(resolvePadding({ top: 3, right: 4 })).toContain('pt-3');
    expect(resolvePadding({ top: 3, right: 4 })).toContain('pr-4');
  });
});
