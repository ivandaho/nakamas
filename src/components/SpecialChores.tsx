import { Nakama } from '../types/schedule';

interface SpecialChoresProps {
  // group?: 1 | 2 | 3;
  nakama: Nakama;
}

const SpecialChores: React.FC<SpecialChoresProps> = (props) => {
  const { nakama } = props;

  return <div className={`schedule_person ${nakama}`}>{nakama}</div>;
};

export default SpecialChores;
