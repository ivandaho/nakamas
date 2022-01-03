import moment, { Moment } from 'moment';
import { formatDateForWeek } from './utils';

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

interface DaysOfWeekProps {
  spacer?: boolean;
  startDate: Moment;
}
const DaysOfWeek: React.FC<DaysOfWeekProps> = (props) => {
  const { spacer, startDate } = props;
  const daysWithSpacer = [...(spacer ? [''] : []), ...days];
  return (
    <>
      {daysWithSpacer.map((day, i) => {
        const date = formatDateForWeek(startDate.clone().add(spacer ? i - 1 : i, 'days'));
        return spacer && i === 0 ? (
          <div key={i} className="day_of_week"></div>
        ) : (
          <div key={i} className="day_of_week">
            <div>{date}</div>
            <div>{day}</div>
          </div>
        );
      })}
    </>
  );
};

export default DaysOfWeek;
