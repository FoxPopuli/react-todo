const DummyData = {};
// Data is structured this way since many operations are easier with access
// to one array containing all tasks
// Further, project data isn't frequently updated
DummyData.tasks = [
  {
    title: "Take out rubbish",
    id: Math.floor(Math.random() * 1000),
    dateAdded: new Date(),
    dueDate: new Date(2023, 10, 14),
    priority: 1,
    complete: false,
    projId: 1,
  },
  {
    title: "Wash laundry",
    id: Math.floor(Math.random() * 10000),
    dateAdded: new Date(),
    dueDate: new Date(2023, 9, 12),
    priority: 2,
    complete: false,
    projId: 1,
  },
  {
    title: "Cook dinner",
    id: Math.floor(Math.random() * 10000),
    dateAdded: new Date(),
    dueDate: new Date(2023, 10, 15),
    priority: 3,
    complete: false,
    projId: 1,
  },
  {
    title: "Doctor's Appointment",
    id: Math.floor(Math.random() * 10000),
    dateAdded: new Date(),
    dueDate: new Date(2023, 7, 10),
    priority: 2,
    complete: false,
    projId: 1,
  },
  {
    title: "Fetch bricks",
    id: Math.floor(Math.random() * 10000),
    dateAdded: new Date(),
    dueDate: new Date(2023, 12, 10),
    priority: 2,
    complete: false,
    projId: 2,
  },
  {
    title: "Pour cement",
    id: Math.floor(Math.random() * 10000),
    dateAdded: new Date(),
    dueDate: new Date(2023, 11, 19),
    priority: 3,
    complete: false,
    projId: 2,
  },
  {
    title: "Paint walls",
    id: Math.floor(Math.random() * 10000),
    dateAdded: new Date(),
    dueDate: new Date(2024, 5, 1),
    priority: 1,
    complete: false,
    projId: 2,
  },
];

DummyData.projects = [
  {
    title: "General",
    projId: 0,
    deadLine: new Date(2023, 9, 2),
    sortedBy: "Priority",
  },
  {
    title: "Chores",
    deadLine: new Date(2023, 9, 2),
    projId: 1,
    sortedBy: "Priority",
  },
  {
    title: "Build House",
    deadLine: new Date(2024, 9, 2),
    projId: 2,
    sortedBy: "Priority",
  },
];

export default DummyData;
