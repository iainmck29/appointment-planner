import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.handleChange}>
      <option default disabled>Choose Contact</option>
      {props.contacts.map((contact, index) => {
        return <option value={contact.name} key={index}>{contact.name}</option>
      })}
    </select>
  );
};
