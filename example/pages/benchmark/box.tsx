import * as React from 'react';
import { Tree } from 'components/Benchmark/BoxTree';

export default function BoxTree(): JSX.Element {
  if (typeof window !== 'undefined') {
    window.performance.mark('BeginBoxTree');
  }

  React.useEffect(() => {
    window.performance.mark('EndBoxTree');

    window.performance.measure('measure', 'BeginBoxTree', 'EndBoxTree');

    console.log(window.performance.getEntriesByName('measure'));
  }, []);

  return <Tree depth={17} />;
}
