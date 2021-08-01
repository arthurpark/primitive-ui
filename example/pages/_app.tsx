import Link from 'next/link';
import { Box, Columns, FlexItem } from '../../dist';

import '../styles/globals.css';

function Header(): JSX.Element {
  return (
    <Box
      element="nav"
      height={16}
      padding={{ x: 4 }}
      background={{ color: 'white' }}
      className="fixed z-10 top-0 inset-x-0 shadow"
    >
      <Columns element="ul" align="center" height={'full'}>
        <FlexItem element="li" padding={{ x: 4 }}>
          <Link href="/">Home</Link>
        </FlexItem>
        <FlexItem element="li" padding={{ x: 4 }}>
          <Link href="/typography">Typography</Link>
        </FlexItem>
        <FlexItem element="li" padding={{ x: 4 }}>
          <Link href="/box">Box</Link>
        </FlexItem>
      </Columns>
    </Box>
  );
}

export default function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
