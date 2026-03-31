export const dateFormat = (
  date: string,
  options: Intl.DateTimeFormatOptions,
) => {
  try {
    const formattedDate = new Intl
      .DateTimeFormat("en-US", options)
      .format(new Date(date));
    return formattedDate
  } catch (error) {
    console.error(error);
    return "-";
  }
};

export const periodDateString = (
  startDate: string,
  endDate: string,
  options: Intl.DateTimeFormatOptions,
) => {
  const formattedStartDate = dateFormat(startDate, options);
  const formattedEndDate = dateFormat(endDate, options);
  return `${formattedStartDate} - ${formattedEndDate}`;
};
