import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Read() {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
  });
  const location = useLocation();
  const { id, name, email } = location.state || {};

  useEffect(() => {}, []);
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="bg-info bg-gradient p-4 rounded w-50">
        <div className="d-flex flex-row ">
          <span className="fw-semibold">ID: </span>
          <span>{id}</span>
        </div>
        <div className="d-flex flex-row ">
          <span className="fw-semibold">Name: </span>
          <span>{name}</span>
        </div>
        <div className="d-flex flex-row ">
          <span className="fw-semibold">Email Id: </span>
          <span>{email}</span>
        </div>
        <button onClick={handleEdit} className="btn btn-light my-2">
          Edit
        </button>
        <Link to="/" className="btn btn-light my-2 float-end">
          Go back
        </Link>
      </div>
    </div>
  );
}
