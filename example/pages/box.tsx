import * as React from 'react';
import { Box, Color, Padding, Columns } from '../../dist';
import { Screen } from 'components/Screen';
import { Section } from 'components/Section';

export default function BoxPage() {
  const SCALE = [0, 1, 2, 3, 4, 5, 6, 8];

  return (
    <Screen title="Box">
      <Section title="Spacing">
        {SCALE.map((scale, index) => {
          const bg = `gray-${scale * 100 + 100}` as Color;
          return (
            <Box key={index} padding={1} backgroundColor={'white'}>
              <Box padding={scale as Padding} backgroundColor={bg}>
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
