import React, { useEffect, useState } from "react";
import "./App.css";
import NameForm from "./components/NameForm";
import RegisteredStudents from "./components/RegisteredStudents";

export default function App() {
  let [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    // old line fetch("/students")
    fetch("/students/facebook")
      .then(response => response.json())
      .then(students => {
        //checking
        //checking
        console.log("to start" + JSON.stringify(students));
        setStudents(students);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };

  function addStudent(firstname, lastname) {
    let student = { firstname, lastname };

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    };

    fetch("/students/facebook", options)
      .then(result => result.json())
      .then(students => {
        //checking
        //console.log("addstudent" + JSON.stringify(students));
        setStudents(students);
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  }

  function deleteStudent(id) {
    let options = {
      method: "DELETE",
      body: JSON.stringify(students)
    };

    fetch(`/students/facebook/${id}`, options)
      .then(result => result.json())
      .then(students => {
        setStudents(students);
      })
      .catch(err => {
        console.log({ error: err.message });
      });
  }

  return (
    <div className="App">
      <h1>CodeOp's Facebook</h1>

      <NameForm
        onSubmit={(firstname, lastname) => addStudent(firstname, lastname)}
      />

      <RegisteredStudents
        students={students}
        onDelete={id => deleteStudent(id)}
      />
    </div>
  );
}
