const DummyData = [
  {
    title: "Take out rubbish",
    id: Math.floor(Math.random() * 1000),
    dateAdded: new Date(),
    dueDate: new Date(2023, 10, 14),
    priority: 1,
    complete: false,
  },
  {
    title: "Do laundry",
    id: Math.floor(Math.random() * 1000),
    dateAdded: new Date(),
    dueDate: new Date(2023, 9, 12),
    priority: 2,
    complete: false,
  },
  {
    title: "Cook dinner",
    id: Math.floor(Math.random() * 1000),
    dateAdded: new Date(),
    dueDate: new Date(2023, 10, 15),
    priority: 3,
    complete: false,
  },
  {
    title: "Doctor's Appointment",
    id: Math.floor(Math.random() * 1000),
    dateAdded: new Date(),
    dueDate: new Date(2023, 7, 10),
    priority: 2,
    complete: false,
  },
];

export default DummyData;
