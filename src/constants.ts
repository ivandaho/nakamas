import moment from 'moment';
import { Nakama } from './types/schedule';

export const SPECIAL_CHORE_CYCLE_NAKAMAS = [Nakama.Ivan, Nakama.Gina, Nakama.Germ];
/** the Monday of the start of the chore cycle */
export const SPECIAL_CHORE_CYCLE_START_DATE = moment('2022-01-03');
