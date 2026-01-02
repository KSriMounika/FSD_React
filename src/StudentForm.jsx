import React, { useState } from "react";

const StudentForm = ({ refresh }) => {
  const [formData, setFormData] = useState({
    stdName: "",
    stdRoll: "",
    stdEmail: "",
    stdCollege: "",
    stdBranch: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    fetch("http://localhost:7010/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(() => {
        alert("Student added successfully");
        setFormData({
          stdName: "",
          stdRoll: "",
          stdEmail: "",
          stdCollege: "",
          stdBranch: ""
        });
        refresh();
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <center>
      <h3>Add Student</h3>

      <input name="stdName" placeholder="Name" value={formData.stdName} onChange={handleChange} /><br /><br />
      <input name="stdRoll" placeholder="Roll No" value={formData.stdRoll} onChange={handleChange} /><br /><br />
      <input name="stdEmail" placeholder="Email" value={formData.stdEmail} onChange={handleChange} /><br /><br />
      <input name="stdCollege" placeholder="College" value={formData.stdCollege} onChange={handleChange} /><br /><br />
      <input name="stdBranch" placeholder="Branch" value={formData.stdBranch} onChange={handleChange} /><br /><br />

      <button onClick={handleSubmit}>Add</button>
      </center>
    </>
  );
};

export default StudentForm;
