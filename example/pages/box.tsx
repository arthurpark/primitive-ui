import { Box, Color, Padding, Columns } from '../../dist';
import { Screen } from 'components/Screen';
import { Section } from 'components/Section';

export default function BoxPage(): JSX.Element {
  const SCALE = [0, 1, 2, 3, 4, 5, 6, 8];

  return (
    <Screen title="Box">
      <Section title="Spacing">
        <div className="space-y-3">
          {SCALE.map((scale, index) => {
            const bg = `gray-${scale * 100 + 100}` as Color;
            return (
              <Box
                key={index}
                padding={scale as Padding}
                background={{ color: bg }}
              >
                <Columns
                  justify="center"
                  align="center"
                  width={'full'}
                  height={16}
                  background={{ color: 'purple-100' }}
                >
                  {`Padding Scale: ${scale}`}
                </Columns>
              </Box>
            );
          })}
        </div>
      </Section>

      <Section title="Spacing">
        <div className="space-y-3">
          {SCALE.map((scale, index) => {
            const bg = `gray-${scale * 100 + 100}` as Color;
            return (
              <Box
                key={index}
                padding={scale as Padding}
                background={{ color: bg }}
              >
                <Columns
                  justify="center"
                  align="center"
                  width={'full'}
                  height={16}
                  background={{ color: 'purple-100' }}
                >
                  {`Padding Scale: ${scale}`}
                </Columns>
              </Box>
            );
          })}
        </div>
      </Section>
    </Screen>
  );
}
