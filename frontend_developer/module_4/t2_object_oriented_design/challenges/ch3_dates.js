import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import format from 'date-fns/format';

const buildRange2 = (dates, beginDate, endDate) => {
  const datesInterval = eachDayOfInterval({
    start: beginDate,
    end: endDate,
  });

  const values = dates.reduce((acc, date) => ({ ...acc, [date.date]: date.value }), {});

  return datesInterval.map((date) => {
    const formDate = format(date, 'dd.MM.yyyy');
    return { values: values[formDate] ?? 0, date: formDate };
  });
};

const dates = [
  { value: 14, date: '02.08.2018' },
  { value: 43, date: '03.08.2018' },
];
const beginDate = '2018-08-01';
const endDate = '2018-08-04';

console.log(buildRange2(dates, beginDate, endDate));
