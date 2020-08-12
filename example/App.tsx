import * as React from 'react';
import {
  Box,
  Color,
  SpacingScale,
  Columns,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from '../.';
import { Section } from './components/Section';

import '../dist/elemental-ui.esm.css';

export default function App() {
  const SCALE: SpacingScale[] = [0, 1, 2, 3, 4, 5, 6, 8];
  return (
    <>
      <Section title="Typography">
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
        <H6>Heading 6</H6>
      </Section>
      <Section title="Box">
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
                  backgroundColor={'purple-200'}
                >
                  {`Padding Scale: ${scale}`}
                </Columns>
              </Box>
            </Box>
          );
        })}
      </Section>
    </>
  );
}
