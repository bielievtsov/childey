import React, { useState, useEffect } from "react";
import style from "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import { Calendar, momentLocalizer } from "react-big-calendar";

const CalendarPage = (props) => {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);
  const { doctorId } = JSON.parse(localStorage.getItem("token"));
  const { token } = JSON.parse(localStorage.getItem("token"));

  const getEvents = () => {
    fetch(`http://140.82.32.65:3000/doctor/${doctorId}/appointments`, {
      headers: { "x-access-token": token },
    })
      .then((res) => res.json())
      .then((data) => {
        const result = data.map((el) => {
          const start = new Date(el.date);
          const end = new Date(el.date);
          end.setMinutes(start.getMinutes() + el.duration || 0);
          return {
            title: el.type,
            start,
            end,
          };
        });
        return result;
      })
      .then((result) => {
        setEvents(result);
      })
      .then(() => {});
  };
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Calendar
      localizer={localizer}
      style={style}
      step={60}
      style={{ height: "600px", width: "100%" }}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
  );
};

export default CalendarPage;
