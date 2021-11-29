import moment from 'moment';
import { today } from './dates';

const isPast = ({ year, month, day }) => {
  const inputDate = moment([year, month - 1, day]);
  const todayDate = moment([today.year, today.month, today.day]);
  return inputDate.diff(todayDate, 'days') < 0;
};

const isReservationValid = ({ serviceId, date, city }, services = []) => {
  const validation = {
    valid: true,
    service: '',
    date: '',
  };

  if (!city) {
    validation.valid = false;
    validation.date = 'Please, select a city';
  }

  if (!moment([date.year, date.month - 1, date.day]).isValid()) {
    validation.valid = false;
    validation.date = 'Please, input a valid date\n';
  }

  if (isPast(date)) {
    validation.valid = false;
    validation.date += 'Please, input a future date';
  }

  validation.date = validation.date.trim();

  if (!services.some((service) => service.id === serviceId)) {
    validation.valid = false;
    validation.date = 'Please, select a service to reserve';
  }

  return validation;
};

export default isReservationValid;
