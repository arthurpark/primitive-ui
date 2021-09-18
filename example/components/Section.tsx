import * as React from 'react';
import { Stack, FlexItem, Text, Link } from '../../dist';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Section(props: Props): JSX.Element {
  const { title, children } = props;

  const href = title.replace(/\s/g, '-').toLowerCase();

  return (
    <Stack padding={{ y: 4 }}>
      <FlexItem
        padding={{ y: 2 }}
        background={{ color: 'white' }}
        className="sticky top-16 border-b-2 border-gray-300 bg-opacity-75 backdrop-filter backdrop-blur-lg"
      >
        <Text
          element="h2"
          id={href}
          className="group"
          size="xl"
          weight="bold"
          color="gray-900"
        >
          <Link
            href={`#${href}`}
            color="gray-300"
            decoration="no-underline"
            whitespace="pre-wrap"
            className="absolute opacity-0 group-hover:opacity-100 -ml-4"
          >
            #
          </Link>
          {title}
        </Text>
      </FlexItem>

      <FlexItem padding={{ y: 2 }}>{children}</FlexItem>
    </Stack>
  );
}
