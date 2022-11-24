import { useState, useEffect } from "react";

export function Calendar() {
  const [monthIndex, setMonthIndex] = useState(0);
  const [todaysDate, setTodaysDate] = useState();

  useEffect(() => {
    if (monthIndex >= 12) setMonthIndex(0);
    if (monthIndex < 0) setMonthIndex(11);
  }, [monthIndex]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [monthGrids, setMonthGrids] = useState([]);

  useEffect(() => {
    const initDay = new Date();
    calculateMonthsForYear();
    setTodaysDate(initDay);
    setMonthIndex(initDay.getMonth());
  }, []);

  const calculateMonthsForYear = () => {
    const MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let year = [];

    let leftOvers = [26, 27, 28, 29, 30, 31];
    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      let month = [];
      let week = leftOvers;

      for (let i = 0; i < MONTHS[monthIndex]; i++) {
        if (week.length === 7) {
          month.push(week);
          week = [];
        }

        week.push(i + 1);
      }

      month.push(week);
      year.push(month);
      leftOvers = week;
    }

    console.log(year);
    setMonthGrids(year);
  };

  return (
    <div className="Calendar">
      <div className="CalendarHeader">
        <div
          className="MonthSelectButton"
          onClick={() => setMonthIndex(monthIndex - 1)}
        >
          Prev
        </div>
        <h1 className="Cursive">{monthNames[monthIndex]}</h1>
        <div
          className="MonthSelectButton"
          onClick={() => setMonthIndex(monthIndex + 1)}
        >
          Next
        </div>
      </div>
      {monthGrids[monthIndex] &&
        monthGrids[monthIndex].map((row, rowIndex) => {
          return (
            <div className="CalendarRow">
              {row.map((day) => {
                return (
                  <CalendarDay
                    day={day}
                    isToday={
                      monthIndex === todaysDate.getMonth() &&
                      day === todaysDate.getDate()
                    }
                    isDifferentMonth={
                      (rowIndex === 0 && day > 20) || (rowIndex > 2 && day < 7)
                    }
                  />
                );
              })}
            </div>
          );
        })}
    </div>
  );
}

function CalendarDay(props) {
  let styles = {
    backgroundColor: "",
  };

  if (props.isDifferentMonth) {
    styles.backgroundColor = "grey";
  } else if (props.isToday) {
    styles.backgroundColor = "#b4dbe5";
  } else {
    styles.backgroundColor = "white";
  }

  return (
    <div className="CalendarDay" style={styles}>
      {props.day}
    </div>
  );
}
