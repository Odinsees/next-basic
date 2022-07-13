import moment from 'moment';

export const formatDate = (date: Date) => {
  const formatDate = moment(date).format('MMM DD, YYYY, HH:mm');
  return formatDate;
};
