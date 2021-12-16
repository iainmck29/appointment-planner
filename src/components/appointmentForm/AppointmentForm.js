import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Appointment Title</label>
      <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

      <label htmlFor="date">Date</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} min={getTodayString}/>

      <label htmlFor="time">Time</label>
      <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)}/>

      <label htmlFor="contacts">Select Contact</label>
      <ContactPicker contacts={contacts} id="contacts" onChange={(e) => setContact(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};
