import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export const getTimeAgo = (createdDate: string) => {
  dayjs.extend(relativeTime);
  return dayjs(createdDate).fromNow();
};
