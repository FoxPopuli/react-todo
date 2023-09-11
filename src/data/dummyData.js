import { dateObjToString } from "../helperFunctions";
const DummyData = {};
// Data is structured this way since many operations are easier with access
// to one array containing all tasks
// Further, project data isn't frequently updated
DummyData.tasks = [
  {
    title: "Take out rubbish",
    id: 10,
    dateAdded: dateObjToString(new Date()),
    dueDate: "2023-10-14",
    priority: 1,
    complete: false,
    projId: 1,
  },
  {
    title: "Wash laundry",
    id: 11,
    dateAdded: dateObjToString(new Date()),
    dueDate: "2023-09-12",
    priority: 2,
    complete: false,
    projId: 1,
  },
  {
    title: "Cook dinner",
    id: 12,
    dateAdded: dateObjToString(new Date()),
    dueDate: "2023-10-15",
    priority: 3,
    complete: false,
    projId: 1,
  },
  {
    title: "Doctor's Appointment",
    id: 13,
    dateAdded: dateObjToString(new Date()),
    dueDate: "2023-7-10",
    priority: 2,
    complete: false,
    projId: 0,
  },
  {
    title: "Fetch bricks",
    id: 14,
    dateAdded: dateObjToString(new Date()),
    dueDate: "2023-12-10",
    priority: 2,
    complete: false,
    projId: 2,
  },
  {
    title: "Pour cement",
    id: 15,
    dateAdded: dateObjToString(new Date()),
    dueDate: "2023-12-10",
    priority: 3,
    complete: false,
    projId: 2,
  },
  {
    title: "Paint walls",
    id: 16,
    dateAdded: dateObjToString(new Date()),
    dueDate: "2023-12-10",
    priority: 1,
    complete: false,
    projId: 2,
  },
];

DummyData.projects = [
  // {
  //   title: "General",
  //   dueDate: "2023-09-30",
  //   id: 0,
  //   sortedBy: "Priority",
  // },
  {
    title: "Chores",
    dueDate: "2024-02-10",
    id: 1,
    sortedBy: "Priority",
  },
  {
    title: "Build House",
    dueDate: "2025-12-10",
    id: 2,
    sortedBy: "Priority",
  },
];

export default DummyData;
