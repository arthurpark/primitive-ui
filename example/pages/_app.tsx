import Link from 'next/link';
import { Box, Columns, FlexItem, Spacer } from '../../dist';

import '../styles/globals.css';

function Header() {
  return (
    <Box
      element="nav"
      height={16}
      padding={{ x: 4 }}
      backgroundColor="white"
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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
