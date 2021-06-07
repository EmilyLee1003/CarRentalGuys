import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function calendar() {
  return (
    <div>
      <Calendar></Calendar>
    </div>
  );
}

export default calendar;
