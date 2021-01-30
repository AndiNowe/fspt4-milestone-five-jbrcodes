import React, { useState } from "react";
//import "./NameForm.css";

function NameForm(props) {
  const [firstname, setfirstName] = useState("");
  const [lastname, setLastName] = useState("");

  function handleChange(event) {
    let { name, value } = event.target;

    switch (name) {
      case "firstname":
        setfirstName(value);
        break;
      case "lastname":
        setLastName(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onSubmit(firstname, lastname);

    setfirstName("");
    setLastName("");
  }

  return (
    <div className="NameForm">
      <h2>Register a student here:</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <br></br>
          <input
            name="firstname"
            type="text"
            value={firstname}
            onChange={handleChange}
          />
        </label>

        <label>
          Surname
          <br></br>
          <input
            name="lastname"
            type="text"
            value={lastname}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NameForm;
