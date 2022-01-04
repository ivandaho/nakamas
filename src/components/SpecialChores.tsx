import { Nakama } from '../types/schedule';

interface SpecialChoresProps {
  // group?: 1 | 2 | 3;
  nakama: Nakama;
  row?: boolean;
  active?: boolean;
}

const SpecialChores: React.FC<SpecialChoresProps> = (props) => {
  const { nakama, row, active } = props;

  if (!row) {
    return <div className={`schedule_person ${nakama}`}>{nakama}</div>;
  }
  return <div className={`schedule_person row ${nakama} ${active ? 'today' : ''}`}>{nakama}</div>;
};

export default SpecialChores;
