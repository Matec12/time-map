import moment from 'moment';

export const formatUTCDate = (date) => moment(new Date(date)).format('hh:mm a');

export const formatTime = (date) => moment(new Date(date)).format('hh:mm a');