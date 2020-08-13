import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { TypographyScreen } from './Typography';
import { BoxScreen } from './Box';
import { Box, Columns, Spacer } from '../.';

import '../dist/elemental-ui.esm.css';

export default function App() {
  return (
    <Router>
      <Header />

      <ScreenContainer>
        <Switch>
          <Route path="/typography">
            <TypographyScreen />
          </Route>
          <Route path="/box">
            <BoxScreen />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </ScreenContainer>
    </Router>
  );
}

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
          <Link to="/">Home</Link>
        </Box>
        <Box element="li" padding={{ x: 4 }}>
          <Link to="/typography">Typography</Link>
        </Box>
        <Box element="li" padding={{ x: 4 }}>
          <Link to="/box">Box</Link>
        </Box>
      </Columns>
    </Box>
  );
}

function ScreenContainer(props: any) {
  return (
    <Box>
      <Spacer height={16} />
      {props.children}
    </Box>
  );
}
