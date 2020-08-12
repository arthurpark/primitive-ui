import cx from 'classnames';
import { Size } from '../utils/responsive';

export type FlexScale = 'none' | 1 | 'auto' | 'initial';

export function resolveFlexClassName(scale?: FlexScale | FlexScale[]): string {
  if (!Array.isArray(scale)) {
    return scale ? `flex-${scale}` : '';
  }

  const [sm, md, lg, xl] = scale;

  if (scale.length <= 1) {
    return sm ? `flex-${sm}` : '';
  }

  if (scale.length === 2) {
    return cx(`flex-${sm}`, `${Size.MEDIUM}flex-${md}`);
  }

  if (scale.length === 3) {
    return cx(
      `flex-${sm}`,
      `${Size.MEDIUM}flex-${md}`,
      `${Size.LARGE}flex-${lg}`
    );
  }

  if (scale.length === 4) {
    return cx(
      `flex-${sm}`,
      `${Size.MEDIUM}flex-${md}`,
      `${Size.LARGE}flex-${lg}`,
      `${Size.XLARGE}flex-${xl}`
    );
  }

  throw new Error(`Invalid reponsive flex value`);
}
