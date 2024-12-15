import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [studentsData, setStudentsData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        setStudentsData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(e) {
    console.log(e?.target);
    // axios
    //   .delete("http://localhost:8080/")
    //   .then((res) => console.log(res?.data))
    //   .catch((err) => console.log(err));
  }

  function handleRead(student_uid, student_name, email_id) {
    navigate(`/read`, {
      state: { id: student_uid, name: student_name, email: email_id },
    });
  }

  return (
    <div className="p-4 m-2 d-flex justify-content-center align-items-center vh-100 flex-column">
      <span className="fs-4 fw-bold my-1">Students list</span>
      <div className="my-2">
        <Link to="/create" className="btn btn-success">
          Create +
        </Link>
      </div>
      <table className="text-center rounded bg-light bg-gradient py-4 border rounded shadow-lg">
        <thead>
          <tr>
            <th>ID </th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentsData?.data?.map(
            ({ student_uid, student_name, email_id }) => {
              return (
                <tr key={student_uid}>
                  <td className="px-4">{student_uid}</td>
                  <td className="px-4">{student_name}</td>
                  <td className="px-4">{email_id}</td>
                  <td className="px-4">
                    <button
                      type="button"
                      className="mx-2 btn btn-primary"
                      onClick={() =>
                        handleRead(student_uid, student_name, email_id)
                      }
                    >
                      Read
                    </button>
                    <Link
                      to={`/edit/${student_uid}`}
                      state={{ student_name, student_uid, email_id }}
                      type="button"
                      className="mx-2 btn btn-light"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/delete/${student_uid}`}
                      type="button"
                      className="mx-2 btn btn-danger"
                      onClick={(e) => handleDelete(e)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
