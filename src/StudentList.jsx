import React, { useEffect, useState } from "react";

const StudentList = ({ refreshFlag }) => {
  const [students, setStudents] = useState([]);
  const [viewStudent, setViewStudent] = useState(null);
  const [editStudent, setEditStudent] = useState(null);

  // Fetch student list
  useEffect(() => {
    fetch("http://localhost:7010/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, [refreshFlag]);

  // View details
  const viewDetails = (id) => {
    fetch(`http://localhost:7010/students/${id}`)
      .then(res => res.json())
      .then(data => {
        setViewStudent(data);
        setEditStudent(null);
      });
  };

  // Delete student
  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      fetch(`http://localhost:7010/students/${id}`, {
        method: "DELETE"
      }).then(() => {
        alert("Student deleted");
        setViewStudent(null);
        setEditStudent(null);
      });
    }
  };

  // Enable edit mode
  const startEdit = () => {
    setEditStudent({ ...viewStudent });
  };

  // Handle edit input
  const handleEditChange = (e) => {
    setEditStudent({
      ...editStudent,
      [e.target.name]: e.target.value
    });
  };

  // Save edited student
  const saveEdit = () => {
    fetch(`http://localhost:7010/students/${editStudent._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editStudent)
    })
      .then(res => res.json())
      .then(() => {
        alert("Student updated");
        setViewStudent(editStudent);
        setEditStudent(null);
      });
  };

  return (
    <>
      <center>
      <h3>Student List</h3>

      {students.map(s => (
        <div key={s._id}>
          StdName : {s.stdName} -
          StdRoll:{s.stdRoll} <br />
          <button onClick={() => viewDetails(s._id)}>View</button>
        </div>
      ))}

      {/* VIEW MODE */}
      {viewStudent && !editStudent && (
        <div>
          <h3>Student Details</h3>
          <p>Name: {viewStudent.stdName}</p>
          <p>Roll: {viewStudent.stdRoll}</p>
          <p>Email: {viewStudent.stdEmail}</p>
          <p>College: {viewStudent.stdCollege}</p>
          <p>Branch: {viewStudent.stdBranch}</p>

          <button onClick={startEdit} >Edit</button>
          <button onClick={() => deleteStudent(viewStudent._id)}>
            Delete
          </button>
        </div>
      )}

      {/* EDIT MODE */}
      {editStudent && (
        <div>
          <h3>Edit Student</h3>

          <input
            name="stdName"
            value={editStudent.stdName}
            onChange={handleEditChange}
            placeholder="Name"
          />

          <input
            name="stdRoll"
            value={editStudent.stdRoll}
            onChange={handleEditChange}
            placeholder="Roll"
          />

          <input
            name="stdEmail"
            value={editStudent.stdEmail}
            onChange={handleEditChange}
            placeholder="Email"
          />

          <input
            name="stdCollege"
            value={editStudent.stdCollege}
            onChange={handleEditChange}
            placeholder="College"
          />

          <input
            name="stdBranch"
            value={editStudent.stdBranch}
            onChange={handleEditChange}
            placeholder="Branch"
          />

          <button onClick={saveEdit}>Save</button>
          <button onClick={() => setEditStudent(null)}>Cancel</button>
        </div>
      )}
      </center>
    </>
  );
};

export default StudentList;
