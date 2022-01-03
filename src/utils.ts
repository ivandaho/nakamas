import moment from 'moment';
import { Moment } from 'moment';
import { SPECIAL_CHORE_CYCLE_NAKAMAS, SPECIAL_CHORE_CYCLE_START_DATE } from './constants';
import { Nakama } from './types/schedule';

export const formatDateForWeek = (m: Moment) => {
  return m.format('DD/MM');
};


export const getWeekSpecialChoreNakamaIndex = (m: Moment) => {
  const diff = Math.floor(moment.duration(m.diff(SPECIAL_CHORE_CYCLE_START_DATE)).as('weeks'));

  return diff % SPECIAL_CHORE_CYCLE_NAKAMAS.length;
};

export const getAt = (array: any[], atIndex: number) => {
  atIndex = Math.trunc(atIndex) || 0;
  // Allow negative indexing from the end
  if (atIndex < 0) atIndex += array.length;
  // OOB access is guaranteed to return undefined
  if (atIndex === array.length) return array[0];
  if (atIndex < 0 || atIndex >= array.length) return undefined;
  // Otherwise, array is just normal property access
  return array[atIndex];
};
