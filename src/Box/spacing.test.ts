import { resolvePaddingClassName, SpacingScale } from './spacing';

describe('spacing', () => {
  describe('resolvePaddingClassName', () => {
    it('should return empty string when missing value', () => {
      expect(resolvePaddingClassName()).toBe('');
    });

    it('should return empty string when value is 0', () => {
      expect(resolvePaddingClassName(0)).toBe('p-0');
      expect(resolvePaddingClassName({ x: 0 })).toBe('px-0');
      expect(resolvePaddingClassName({ y: 0 })).toBe('py-0');
      expect(resolvePaddingClassName({ right: 0 })).toBe('pr-0');
    });

    it('should return className for all directions', () => {
      expect(resolvePaddingClassName(4)).toBe('p-4');
    });

    it('should return className for a direction', () => {
      expect(resolvePaddingClassName({ x: 4 })).toBe('px-4');
      expect(resolvePaddingClassName({ y: 4 })).toBe('py-4');
      expect(resolvePaddingClassName({ top: 4 })).toBe('pt-4');
      expect(resolvePaddingClassName({ bottom: 4 })).toBe('pb-4');
      expect(resolvePaddingClassName({ left: 4 })).toBe('pl-4');
      expect(resolvePaddingClassName({ right: 4 })).toBe('pr-4');
    });

    it('should return classNames for multiple directions', () => {
      expect(resolvePaddingClassName({ x: 3, y: 4 })).toContain('px-3');
      expect(resolvePaddingClassName({ x: 3, y: 4 })).toContain('py-4');

      expect(resolvePaddingClassName({ x: 3, top: 4 })).toContain('px-3');
      expect(resolvePaddingClassName({ x: 3, top: 4 })).toContain('pt-4');

      expect(resolvePaddingClassName({ top: 3, right: 4 })).toContain('pt-3');
      expect(resolvePaddingClassName({ top: 3, right: 4 })).toContain('pr-4');
    });

    it('should return responsive classNames', () => {
      const responsiveProp: SpacingScale[] = [2, 3, 4, 5];

      expect(resolvePaddingClassName(responsiveProp)).toContain('p-2');
      expect(resolvePaddingClassName(responsiveProp)).toContain('md:p-3');
      expect(resolvePaddingClassName(responsiveProp)).toContain('lg:p-4');
      expect(resolvePaddingClassName(responsiveProp)).toContain('xl:p-5');
    });
  });
});
