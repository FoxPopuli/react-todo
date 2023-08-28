const parseDate = (dateObj) => {
  const date2 = new Date();
  const isOverdue = date2 - dateObj > 0 ? true : false;
  const diffTime = Math.abs(date2 - dateObj);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let midString;
  if (diffDays < 13) {
    midString = diffDays === 1 ? diffDays + " day" : diffDays + " days";
  } else if (diffDays < 30) {
    const numWeeks = Math.floor(diffDays / 7);
    midString = numWeeks === 1 ? numWeeks + " week" : numWeeks + " weeks";
  } else if (diffDays < 365) {
    const numMonths = Math.floor(diffDays / 30);
    midString = numMonths === 1 ? numMonths + " month" : numMonths + " months";
  } else {
    const numYears = Math.floor(diffDays / 365);
    midString = numYears === 1 ? numYears + " year" : numYears + " years";
  }

  if (isOverdue) {
    return "Due " + midString + " ago";
  } else {
    return "Due in " + midString;
  }
};
const helperFunctions = { parseDate };
export default helperFunctions;
