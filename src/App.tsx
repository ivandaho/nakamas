import moment from 'moment';
import { useEffect, useRef } from 'react';
import './App.scss';
import Schedule from './pages/Schedule';

function App() {
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer.current = setTimeout(() => {
      // force reload after 12am
      window.location.reload();
    }, moment.duration(moment().endOf('day').diff(moment())).as('milliseconds') + 1000);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    <div className="root_container">
      <Schedule week={-1} />
      <Schedule />
      <Schedule week={1} />
      <div className="notes">
        <div>group 1: bathroom - sink, countertop, mirror</div>
        <div>group 2: kitchen - sink, countertop, stove, drying mat</div>
        <div>group 3: others - mop</div>
      </div>
    </div>
  );
}

export default App;
