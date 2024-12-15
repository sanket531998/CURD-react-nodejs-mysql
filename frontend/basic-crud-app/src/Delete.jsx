import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Delete() {
  const { uid } = useParams();

  async function handleDelete() {
    try {
      const response = await axios.delete(`http://localhost:8080/delete`, {
        params: { uid },
      });
      console.log("deleted", response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      Do you want to delete the id {uid}
      <button className="d-block btn btn-danger" onClick={handleDelete}>
        Yes
      </button>
    </div>
  );
}

export default Delete;
