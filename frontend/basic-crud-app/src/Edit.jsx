import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
axios;

function Edit() {
  const navigate = useNavigate("");
  const location = useLocation();
  const { email_id, student_name, student_uid } = location.state || {};
  const { id } = useParams();

  const [studentData, setStudentData] = useState({
    name: student_name || "",
    email: email_id || "",
  });

  const handleGoback = () => {
    navigate("/");
  };

  console.log(studentData);

  async function handleEdit() {
    try {
      const response = await axios.put(
        "http://localhost:8080/edit/" + id,
        studentData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="d-flex vh-100 justify-content-center align-items-center flex-column ">
        <div className="bg-success bg-gradient p-4 rounded w-50 shadow">
          <table className="">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <input
                    type="text"
                    value={studentData.name}
                    onChange={(event) => {
                      setStudentData({
                        ...studentData,
                        name: event.target.value,
                      });
                    }}
                  ></input>
                </th>
                <th>
                  <input
                    type="text"
                    value={studentData.email}
                    onChange={(event) => {
                      setStudentData({
                        ...studentData,
                        email: event.target.value,
                      });
                    }}
                  ></input>
                </th>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-light my-2" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-light m-2" onClick={handleGoback}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
