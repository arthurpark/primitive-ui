import * as React from 'react';
import { Tree } from 'components/Benchmark/DomTree';

export default function DomTree(): JSX.Element {
  const [measurements, setMeasurements] = React.useState([]);

  if (typeof window !== 'undefined') {
    window.performance.mark('BeginDomTree');
  }

  React.useEffect(() => {
    window.performance.mark('EndDomTree');

    window.performance.measure('measure', 'BeginDomTree', 'EndDomTree');

    setMeasurements(window.performance.getEntriesByName('measure'));
  }, []);

  return (
    <>
      <Tree depth={17} />

      <div className="fixed z-10 top-20 right-5 inset-x-0 shadow text-right">
        Duration:{' '}
        {measurements.length > 0 ? measurements[0].duration.toFixed(2) : ''} ms
      </div>
    </>
  );
}
