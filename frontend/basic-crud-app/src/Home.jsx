import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [studentsData, setStudentsData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        console.log(res?.data);
        setStudentsData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="p-4 m-2">
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
                    <button type="button" className="mx-2 btn btn-primary">
                      Read
                    </button>
                    <button type="button" className="mx-2 btn btn-light">
                      Edit
                    </button>
                    <button type="button" className="mx-2 btn btn-danger">
                      Delete
                    </button>
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
