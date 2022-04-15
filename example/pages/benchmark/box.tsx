import * as React from 'react';
import { Tree } from 'components/Benchmark/BoxTree';

export default function BoxTree(): JSX.Element {
  const [measurements, setMeasurements] = React.useState([]);

  if (typeof window !== 'undefined') {
    window.performance.mark('BeginBoxTree');
  }

  React.useEffect(() => {
    window.performance.mark('EndBoxTree');

    window.performance.measure('measure', 'BeginBoxTree', 'EndBoxTree');

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
