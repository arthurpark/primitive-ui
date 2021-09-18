import * as React from 'react';
import Head from 'next/head';
import { Box, Text, Stack, Columns } from '../../dist';
import { Screen } from 'components/Screen';
import { H1 } from 'components/Typography';

function ExternalLink({ href, label, description }): JSX.Element {
  return (
    <a
      href={href}
      className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    >
      <h3 className="text-2xl font-bold">{label}</h3>
      <p className="mt-4 text-xl">{description}</p>
    </a>
  );
}

export default function Home(): JSX.Element {
  return (
    <Screen>
      <Stack
        align="center"
        justify="center"
        padding={{ y: 2 }}
        className="min-h-screen"
      >
        <Head>
          <title>Element UI</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Stack
          element="main"
          align="center"
          justify="center"
          padding={{ x: 20 }}
          className="flex-1 text-center"
        >
          <H1>Element UI</H1>
          <Box padding={{ top: 3 }}>
            <Text element="p" size="2xl">
              An experimental library of low level React components to build
              your own components that targets Tailwind CSS under the hood.
            </Text>
          </Box>

          <Box width="full" padding={{ x: 20, y: 10 }}>
            <Box
              width="full"
              padding={{ x: 20, y: 10 }}
              background={{ color: 'gray-100' }}
            >
              Hero Image
            </Box>
          </Box>

          {/* Benefits */}
          <Columns
            wrap="wrap"
            align="center"
            justify="around"
            margin={{ top: 6 }}
            width={'full'}
            className="max-w-4xl"
          >
            <ExternalLink
              href="https://nextjs.org/docs"
              label="Documentation &rarr;"
              description="Find in-depth information about Next.js features and API."
            />
            <ExternalLink
              href="https://nextjs.org/learn"
              label="Learn &rarr;"
              description="Learn about Next.js in an interactive course with quizzes!"
            />

            <ExternalLink
              href="https://github.com/vercel/next.js/tree/master/examples"
              label="Examples &rarr;"
              description="Discover and deploy boilerplate example Next.js projects."
            />

            <ExternalLink
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              label="Deploy &rarr;"
              description="Instantly deploy your Next.js site to a public URL with Vercel."
            />
          </Columns>
        </Stack>

        <Columns
          align="center"
          justify="center"
          width="full"
          height={24}
          // className="border-t"
        >
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
        </Columns>
      </Stack>
    </Screen>
  );
}
