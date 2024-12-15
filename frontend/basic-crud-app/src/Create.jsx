import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Create() {
  const nameRef = useRef("");
  const emailIdRef = useRef("");

  function handleSubmit(event) {
    event.preventDefault();
    if (nameRef?.current && emailIdRef?.current) {
      axios
        .post("http://localhost:8080/addStudent", {
          name: nameRef?.current?.value,
          emailId: emailIdRef?.current?.value,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      // c;
    }
  }

  return (
    <div>
      <div className="d-flex vh-100 justify-content-center align-items-center m-4">
        <form className="bg-danger bg-gradient p-4 rounded w-50 shadow">
          <h2>Add student</h2>
          <div>
            <label className="fw-bold" htmlFor="">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control"
              ref={nameRef}
            ></input>
          </div>
          <div>
            <label className="fw-bold" htmlFor="">
              Email Id
            </label>
            <input
              type="text"
              placeholder="Enter email id"
              className="form-control"
              ref={emailIdRef}
            ></input>
          </div>
          <div className="d-flex justify-content-between my-3">
            <button className="btn btn-light" onClick={handleSubmit}>
              Submit
            </button>

            <Link to="/" className="btn btn-light">
              Go back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
