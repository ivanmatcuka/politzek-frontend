import moment from 'moment';

import { Gender } from '~/components/extractions/Status';

export const getRosfinStrings = (
  gender: Gender | null = 'женский',
  rosfinStart: string,
  rosfinEnd?: string,
) => {
  const ending = gender === 'женский' ? 'a' : '';

  const startDate = moment(rosfinStart).format('DD MMMM YYYY');
  const endDate = rosfinEnd ? moment(rosfinEnd).format('DD MMMM YYYY') : null;

  const startString = `${startDate} включен${ending} в список террористов и экстремистов Росфинмониторинга`;
  const endString = endDate
    ? `${endDate} исключен${ending} из списка террористов и экстремистов Росфинмониторинга`
    : null;

  return [startString, endString] as const;
};
