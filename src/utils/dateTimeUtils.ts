import moment from "moment";

export const formatDate = (date: string | Date) => {
  const formattedDate = moment(date).format('MMMM d, YYYY');
  return formattedDate;
}
