import { SchedulePerson } from '../types/schedule';

interface ChoreItemProps {
  text: string;
  schedule: SchedulePerson[];
  color?: string;
  todayIndex?: number;
}

const ChoreItem: React.FC<ChoreItemProps> = (props) => {
  const { text, schedule, todayIndex } = props;
  return (
    <>
      <div className="chore_title">{text}</div>
      {schedule.map((item, i) => {
        return <div key={i} className={`schedule_person ${item} ${todayIndex - 1 === i ? 'today' : ''}`}>{item}</div>;
      })}
    </>
  );
};

export default ChoreItem;
