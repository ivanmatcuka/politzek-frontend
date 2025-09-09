import moment from 'moment';

export const parseCardDate = (
  copy: string,
  dateString?: string | null,
  fromNow: boolean = false,
) => {
  const date = moment(dateString).isValid() ? moment(dateString) : null;
  const fromNowString = fromNow && date ? ` (${date.fromNow()})` : '';
  const formattedDate = date
    ? `${date.format('DD MMMM YYYY')}${fromNowString}`
    : '-';

  return `${copy}: ${formattedDate}`;
};
