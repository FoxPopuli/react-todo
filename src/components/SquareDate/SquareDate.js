import "./SquareDate.css";

function SquareDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  console.log(day, month, year);

  const mainClass = props.className ? props.className : "square-date__main";

  return (
    <div className={mainClass}>
      <div className="square-date__day">{day}</div>
      <div className="square-date__month">{month}</div>
      <div className="square-date__year">{year}</div>
    </div>
  );
}

export default SquareDate;
