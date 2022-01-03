import moment from 'moment';
import { useMemo } from 'react';
import ChoreItem from '../components/ChoreItem';
import SpecialChores from '../components/SpecialChores';
import { SPECIAL_CHORE_CYCLE_NAKAMAS } from '../constants';
import DaysOfWeek from '../DaysOfWeek';
import { Chore, Nakama } from '../types/schedule';
import { getAt, getWeekSpecialChoreNakamaIndex } from '../utils';

interface ScheduleProps {
  week?: -1 | 1;
}

const offset = 0;

const Schedule: React.FC<ScheduleProps> = (props) => {
  const { week } = props;
  const startOfWeekDate = moment().add(offset, 'weeks').day('monday').add(week, 'week');
  const today = moment().add(offset, 'weeks').startOf('day');
  const todayIndex = today.day();
  const specialChoreNakamaIndex = getWeekSpecialChoreNakamaIndex(startOfWeekDate);
  const specialChoreNakama = getAt(SPECIAL_CHORE_CYCLE_NAKAMAS, specialChoreNakamaIndex);
  const chores: Chore[] = useMemo(() => {
    return [
      {
        text: 'Dish rack',
        schedule: [Nakama.Ivan, Nakama.Germ, Nakama.Gina, Nakama.Ivan, Nakama.Germ, Nakama.Gina, specialChoreNakama]
      },
      {
        text: 'Throw trash',
        schedule: [Nakama.Ivan, Nakama.Germ, Nakama.Gina, Nakama.Ivan, Nakama.Germ, Nakama.Gina, specialChoreNakama]
      },
      { text: 'Vacuum', schedule: [Nakama.Gina, '', Nakama.Germ, '', Nakama.Ivan, '', ''] }
    ];
  }, [specialChoreNakama]);

  return (
    <div className={`schedule_container ${!week ? 'current' : ''}`}>
      <div className={`week_schedule week${week}`}>
        <DaysOfWeek startDate={startOfWeekDate} spacer />
        {chores.map((c, i) => (
          <ChoreItem key={i} text={c.text} schedule={c.schedule} todayIndex={!week ? todayIndex : -1} />
        ))}
      </div>
      <div className={`special_chores week${week}`}>
        <div className="header">Group 1</div>
        <div className="header">Group 2</div>
        <div className="header">Group 3</div>
        <SpecialChores nakama={specialChoreNakama} />
        <SpecialChores nakama={getAt(SPECIAL_CHORE_CYCLE_NAKAMAS, specialChoreNakamaIndex - 1)} />
        <SpecialChores nakama={getAt(SPECIAL_CHORE_CYCLE_NAKAMAS, specialChoreNakamaIndex - 2)} />
      </div>
    </div>
  );
};

export default Schedule;
