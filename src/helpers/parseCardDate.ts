import moment from 'moment';

export const parseCardDate = (
  dateString?: string | null,
  copy?: string,
  fromNow: boolean = false,
) => {
  const date = dateString ? moment(dateString) : null;
  const fromNowString = fromNow && date ? ` (${date.fromNow()})` : ' ';

  return `${copy ?? 'Date'}: ${
    date ? `${date.format('DD MMMM YYYY')}${fromNowString}` : '–'
  }`;
};
