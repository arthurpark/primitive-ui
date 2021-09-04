import { resolvePadding, resolveMargin } from './spacing';

describe('spacing', () => {
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
});
