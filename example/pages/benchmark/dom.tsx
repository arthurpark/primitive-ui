import * as React from 'react';
import { Tree } from 'components/Benchmark/DomTree';

export default function DomTree(): JSX.Element {
  if (typeof window !== 'undefined') {
    window.performance.mark('BeginDomTree');
  }

  React.useEffect(() => {
    window.performance.mark('EndDomTree');

    window.performance.measure('measure', 'BeginDomTree', 'EndDomTree');

    console.log(window.performance.getEntriesByName('measure'));
  }, []);

  return <Tree depth={17} />;
}
