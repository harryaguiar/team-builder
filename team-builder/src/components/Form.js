import React, { useState } from 'react'

const Forms = (props) => {
    console.log("Forms props: ", props);

    const [member, setMember] = useState({
      name: "",
      email: "",
      role: ""
    });
  
    const changeHandler = (e) => {
      console.log(e.target.value);
      console.log("member: ", member);
      setMember({
        // spread operator
        // e.target :)
        ...member,
        [e.target.name]: e.target.value
      });
    };
  
    const submitForm = (e) => {
      e.preventDefault();
      props.addNewMember(member);
      setMember({ name: "", email: "", role: "" });
    };
  
    return (
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={member.name}
          onChange={changeHandler}
        />
  
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={member.email}
          onChange={changeHandler}
        />

        <label htmlFor="role">Role:</label>
            <input
            type="textarea"
            name="role"
            value={member.role}
            onChange={changeHandler}
        />
  
        <button type="submit">Add New Team Member</button>
      </form>
    );
  };
export default Forms;



