import { responsive } from './responsive';

function resolverFn() {
  return 'classname';
}

describe('responsive', () => {
  it('should resolve to empty string: null | undefined', () => {
    expect(responsive(resolverFn)).toBe('');
    expect(responsive(resolverFn, null)).toBe('');
  });

  it('should resolve to a class name: single', () => {
    expect(responsive(resolverFn, 1)).toBe('classname');
  });

  it('should resolve to a class name: tuple', () => {
    expect(responsive(resolverFn, [1, 2])).toBe('classname sm:classname');
  });

  it('should resolve to a class name: 3-tuple', () => {
    expect(responsive(resolverFn, [1, 2, 3])).toBe(
      'classname sm:classname md:classname'
    );
  });

  it('should resolve to a class name: 4-tuple', () => {
    expect(responsive(resolverFn, [1, 2, 3, 4])).toBe(
      'classname sm:classname md:classname lg:classname'
    );
  });

  it('should resolve to a class name: 5-tuple', () => {
    expect(responsive(resolverFn, [1, 2, 3, 4, 5])).toBe(
      'classname sm:classname md:classname lg:classname xl:classname'
    );
  });

  it('should resolve to a class name: 6-tuple', () => {
    expect(responsive(resolverFn, [1, 2, 3, 4, 5, 6])).toBe(
      'classname sm:classname md:classname lg:classname xl:classname 2xl:classname'
    );
  });
});
