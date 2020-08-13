import * as React from 'react';
import { Box, Color, SpacingScale, Columns } from '../../.';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';

export function BoxScreen() {
  const SCALE: SpacingScale[] = [0, 1, 2, 3, 4, 5, 6, 8];

  return (
    <Screen title="Box">
      <Section title="Spacing">
        {SCALE.map(scale => {
          const bg = `gray-${scale * 100 + 100}` as Color;
          return (
            <Box key={scale} padding={{ all: 1 }} backgroundColor={'white'}>
              <Box padding={{ all: scale }} backgroundColor={bg}>
                <Columns
                  justify="center"
                  align="center"
                  width={'full'}
                  height={16}
                  backgroundColor={'purple-100'}
                >
                  {`Padding Scale: ${scale}`}
                </Columns>
              </Box>
            </Box>
          );
        })}
      </Section>
    </Screen>
  );
}
