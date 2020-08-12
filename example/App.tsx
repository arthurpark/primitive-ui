import * as React from 'react';
import { Box, Color, SpacingScale, Stack, Columns } from '../.';

// import 'elemental-ui/dist/index.css';

function Screen(props: any) {
  return <Stack padding={{ all: 4 }}>{props.children}</Stack>;
}

export default function App() {
  const SCALE: SpacingScale[] = [0, 1, 2, 3, 4, 5, 6, 8];
  return (
    <Screen>
      {SCALE.map(scale => {
        const bg = `gray-${scale * 100 + 100}` as Color;
        return (
          <Box key={scale} padding={{ all: scale }} backgroundColor={bg}>
            <Columns
              justify="center"
              width={'full'}
              height={10}
              backgroundColor={'white'}
            >
              {`Padding Scale: ${scale}`}
            </Columns>
          </Box>
        );
      })}
    </Screen>
  );
}
