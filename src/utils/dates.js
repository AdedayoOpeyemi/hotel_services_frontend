export const today = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  day: new Date().getDate(),
};

const range = (low, up) => {
  const elements = up + 1 - low;
  return Array(elements).fill(0).map((_, i) => low + i);
};

export const nextYears = (years) => range(today.year, today.year + years);

const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'Do you remember?', 'October', 'November',
  'December'].map((name, i) => [name, i + 1]);

export const nextMonths = ({ year }) => {
  if (year === today.year) return months.slice(today.month - 1);
  return months;
};

export const nextDays = ({ year, month }) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  if (year === today.year && month === today.month) {
    return range(today.day, daysInMonth);
  }
  return range(1, daysInMonth);
};
