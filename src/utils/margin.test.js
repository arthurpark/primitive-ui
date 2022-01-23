import { resolveMargin } from './margin';

describe('resolveMargin', () => {
  it('should return className for: 0', () => {
    expect(resolveMargin(0)).toBe('m-0');
    expect(resolveMargin({ x: 0 })).toBe('mx-0');
    expect(resolveMargin({ y: 0 })).toBe('my-0');
    expect(resolveMargin({ right: 0 })).toBe('mr-0');
  });

  it('should return className for all directions', () => {
    expect(resolveMargin(4)).toBe('m-4');
  });

  it('should return className for a direction', () => {
    expect(resolveMargin({ x: 4 })).toBe('mx-4');
    expect(resolveMargin({ y: 4 })).toBe('my-4');
    expect(resolveMargin({ top: 4 })).toBe('mt-4');
    expect(resolveMargin({ bottom: 4 })).toBe('mb-4');
    expect(resolveMargin({ left: 4 })).toBe('ml-4');
    expect(resolveMargin({ right: 4 })).toBe('mr-4');
  });

  it('should return classNames for multiple directions', () => {
    expect(resolveMargin({ x: 3, y: 4 })).toContain('mx-3');
    expect(resolveMargin({ x: 3, y: 4 })).toContain('my-4');

    expect(resolveMargin({ x: 3, top: 4 })).toContain('mx-3');
    expect(resolveMargin({ x: 3, top: 4 })).toContain('mt-4');

    expect(resolveMargin({ top: 3, right: 4 })).toContain('mt-3');
    expect(resolveMargin({ top: 3, right: 4 })).toContain('mr-4');
  });
});
