import Link from 'next/link';
import { Box, Columns, Spacer } from '../../dist';

// import '../styles/globals.css';
import 'tailwindcss/dist/tailwind.css';

function Header() {
  return (
    <Box
      element="nav"
      padding={{ x: 4 }}
      backgroundColor="white"
      className="fixed z-10 top-0 inset-x-0 shadow"
    >
      <Columns element="ul" align="center" height={16}>
        <Box element="li" padding={{ x: 4 }}>
          <Link href="/">Home</Link>
        </Box>
        <Box element="li" padding={{ x: 4 }}>
          <Link href="/typography">Typography</Link>
        </Box>
        <Box element="li" padding={{ x: 4 }}>
          <Link href="/box">Box</Link>
        </Box>
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
