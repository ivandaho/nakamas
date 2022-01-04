import { Moment } from 'moment';
import { formatDateForWeek } from './utils';

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

interface DaysOfWeekProps {
  spacer?: boolean;
  startDate: Moment;
  today: Moment;
}
const DaysOfWeek: React.FC<DaysOfWeekProps> = (props) => {
  const { spacer, startDate, today } = props;
  const daysWithSpacer = [...(spacer ? [''] : []), ...days];
  return (
    <>
      {daysWithSpacer.map((day, i) => {
        const mDate = startDate
          .clone()
          .add(spacer ? i - 1 : i, 'days')
          .startOf('day');
        const isToday = today.isSame(mDate);
        const date = formatDateForWeek(mDate);
        return spacer && i === 0 ? (
          <div key={i} className="day_of_week"></div>
        ) : (
          <div key={i} className={`day_of_week ${isToday ? 'today' : ''}`}>
            <div>{date}</div>
            <div className="day_indicator">{day}</div>
          </div>
        );
      })}
    </>
  );
};

export default DaysOfWeek;
