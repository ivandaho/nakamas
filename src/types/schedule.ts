export enum Nakama {
  Ivan = 'Ivan',
  Germ = 'Germ',
  Gina = 'Gina'
}

export type SchedulePerson = Nakama | '';

export type Chore = {
  text: string;
  schedule: [
    SchedulePerson,
    SchedulePerson,
    SchedulePerson,
    SchedulePerson,
    SchedulePerson,
    SchedulePerson,
    SchedulePerson
  ];
};
