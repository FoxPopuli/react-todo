const parseDate = (dateString) => {
  const date1 = new Date(dateString);
  const date2 = new Date();
  const isOverdue = date2 - date1 > 0 ? true : false;
  const diffTime = Math.abs(date2 - date1);
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

const dateObjToString = (date) => {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - offset * 60 * 1000);
  const newDate = date.toISOString().split("T")[0];
  // console.log(newDate);
  // console.log(new Date(newDate));
  return newDate;
};

const getUniqueId = (objects) => {
  console.log(objects);

  const ids = [...objects].map((object) => object.id);
  let newId;
  let i = 0;
  while (true) {
    newId = Math.floor(Math.random() * 10000);
    if (!ids.includes(newId)) return newId;
    i++;
    if (i > 1000) {
      console.log("ERROR");
      break;
    }
  }
};

const sortGroup = (group, sortString) => {
  // User specified sorting

  // if (!group) return;
  // spread operater to avoid mutating original array
  let arrClone = [...group];
  let sortedTasks;
  switch (sortString) {
    case "ABC":
      sortedTasks = arrClone.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      });
      break;
    case "Priority":
      sortedTasks = arrClone.sort((a, b) => b.priority - a.priority);
      break;
    case "Date":
    default:
      sortedTasks = arrClone.sort(
        (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
      );
      break;
  }
  return sortedTasks;
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const findProjectId = (projTitle, projects) => {
  // returns project id matching projTitle
  // allows user to assign projId to tasks in NewTaskForm
  let id;
  projects.forEach((project) => {
    if (project.title === projTitle) {
      id = project.id;
    }
  });
  return id;
};

const mergeStyles = (incomingStyles, oldStyles) => {
  const newStyles = { ...oldStyles };
  for (let key in incomingStyles) {
    newStyles[key] = incomingStyles[key];
  }
  return newStyles;
};

export {
  parseDate,
  sortGroup,
  capitalize,
  findProjectId,
  mergeStyles,
  getUniqueId,
  dateObjToString,
};
