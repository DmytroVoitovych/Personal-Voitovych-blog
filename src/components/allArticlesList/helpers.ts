const month: Intl.DateTimeFormatOptions = {
  month: "long",
};
const day: Intl.DateTimeFormatOptions = {
  day: "numeric",
};

const year: Intl.DateTimeFormatOptions = {
  year: "numeric",
};

const createDate = (optionsDate: Intl.DateTimeFormatOptions, date: string): string =>
  new Date(date).toLocaleDateString(undefined, optionsDate);

const getTransformedMonth = (month: string): string =>
  month
    .split("")
    .map((e, i) => (i === 0 ? e.toLocaleUpperCase() : e))
    .join("");

export const getLocalDate = (date: string): string =>
  `${getTransformedMonth(createDate(month, date))} ${createDate(
    day,
    date
  )}, ${createDate(year, date)}`;
