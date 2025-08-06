import moment from 'moment';

export const parseCardDate = (
  dateString?: string | null,
  copy?: string,
  fromNow: boolean = false,
) => {
  if (!dateString) return null;

  const date = moment(dateString);
  const fromNowString = fromNow && date ? ` (${date.fromNow()})` : ' ';

  return `${copy ?? 'Date'}: ${
    date ? `${date.format('DD MMMM YYYY')}${fromNowString}` : null
  }`;
};
