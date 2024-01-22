export const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short", // abbreviated month name
  day: "2-digit", // day as two digits
  hour: "numeric", // numeric hour
  minute: "2-digit", // two-digit minute
  hour12: true, // use 12-hour format
});

export const capitalizeEachWord = (data) => {
  return data.replace(/\b\w/g, (match) => match.toUpperCase());
}
