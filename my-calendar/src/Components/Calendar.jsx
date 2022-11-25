import { useState, useEffect } from "react";
import styles from "../syles/Calendar.module.css";

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

    setMonthGrids(year);
  };

  return (
    <div className={styles.Calendar}>
      <div className={styles.CalendarHeader}>
        <div
          className={styles.MonthSelectButton}
          onClick={() => setMonthIndex(monthIndex - 1)}
        >
          Prev
        </div>
        <h1 className={"Cursive"}>{monthNames[monthIndex]}</h1>
        <div
          className={styles.MonthSelectButton}
          onClick={() => setMonthIndex(monthIndex + 1)}
        >
          Next
        </div>
      </div>
      <div className={styles.DayRow}>
        <p>Sunday</p>
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
      </div>
      {monthGrids[monthIndex] &&
        monthGrids[monthIndex].map((row, rowIndex) => {
          return (
            <div className={styles.CalendarRow} key={rowIndex}>
              {row.map((day) => {
                return (
                  <CalendarDay
                    key={day + row}
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
  const [events, setEvents] = useState([]);

  let dayClass = "";
  if (props.isDifferentMonth) dayClass = styles.DayOutsideMonth;
  else if (props.isToday) dayClass = styles.DayIsToday;
  else dayClass = styles.DayInMonth;

  return <div className={`${styles.CalendarDay} ${dayClass}`}>{props.day}</div>;
}
