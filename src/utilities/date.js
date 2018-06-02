import startOfWeek from 'date-fns/start_of_week';
import lastDayOfWeek from 'date-fns/last_day_of_week';
import format from 'date-fns/format';
import frLocale from 'date-fns/locale/fr';

const weekStartsOn = 3; // week begins on a wednesday
const today = new Date();
const firstDay = startOfWeek(today, {weekStartsOn});
const lastDay = lastDayOfWeek(today, {weekStartsOn});

export default {
  getFirstDayOfTheWeek: pattern => format(firstDay, pattern, {locale: frLocale}),
  getLastDayOfTheWeek: pattern => format(lastDay, pattern, {locale: frLocale}),
};