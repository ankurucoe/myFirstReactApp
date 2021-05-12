export const WeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
export const WeatherAppContents = [
  {
    Date: 1
  },
  {
    Date: 2
  },
  {
    Date: 3
  },
  {
    Date: 4
  },
  {
    Date: 5
  },
  {
    Date: 6
  },
  {
    Date: 7
  },
  {
    Date: 8
  },
  {
    Date: 9
  },
  {
    Date: 10
  },
  {
    Date: 11
  },
  {
    Date: 12
  }
];

export const DaysAgo = days =>
  days > 0
    ? days + " day" + (Math.abs(days) === 1 ? "" : "s") + " later"
    : days < 0
    ? -days + " day" + (Math.abs(days) === 1 ? "" : "s") + " ago"
    : "today";
