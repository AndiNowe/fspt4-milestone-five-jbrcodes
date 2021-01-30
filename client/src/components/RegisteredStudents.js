import React from "react";

function RegisteredStudents(props) {
  //console.log(JSON.stringify(props.students));

  return (
    <div className="RegisteredStudents">
      <h2>Student List:</h2>

      {/* ".map()" won't render until "students "has value */}

      <ul>
        {/* {props.students &&
                props.students.map(s => (
                    <li 
                        className="StudentList"
                        key={s.firstname}
                    >

                    Name:{s.firstname} {s.lastname}.

                    <button  
                     type="button"
                     onClick={() => props.onDelete(s.id)}
                    >
                    Delete
                </button> 

                    </li>
                ))}    */}
      </ul>
    </div>
  );
}

export default RegisteredStudents;
