import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="p-4 m-2 text-bg-dark">
      {studentsData?.data?.map(({ student_uid, student_name, email_id }) => {
        return (
          <div
            className="block"
            key={student_uid}
          >{`${student_uid} :    ${student_name}:    ${email_id}`}</div>
        );
      })}
    </div>
  );
}
