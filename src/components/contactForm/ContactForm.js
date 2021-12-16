import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">Email</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="phone">Phone</label>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}" />
      <button type="submit">Submit</button>
    </form>
  );
};
