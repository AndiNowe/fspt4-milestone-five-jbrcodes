import React, { useState } from "react";
//import "./NameForm.css";

function NameForm(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  function handleChange(event) {
    let { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "surname":
        setSurname(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onSubmit(name, surname);

    setName("");
    setSurname("");
  }

  return (
    <div className="NameForm">
      <h2>Register a student here:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <br></br>
          <input name="name" type="text" value={name} onChange={handleChange} />
        </label>

        <label>
          Surname
          <br></br>
          <input
            name="surname"
            type="text"
            value={surname}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NameForm;
