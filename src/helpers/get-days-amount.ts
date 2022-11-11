import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export const getDaysAmount = (createdDate: string) => {
  dayjs.extend(relativeTime);
  return dayjs(createdDate).fromNow();
};
