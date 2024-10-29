import React, { useContext } from "react";
import { Appcontext } from "../Context/AppContext";

export default function UserInformation() {
  const { userData } = useContext(Appcontext);
  return (
    <>
      <h3>User Information</h3>
      <p>
        <strong>username:</strong> {userData.first_name} {userData.last_name}
      </p>
      <p>
        <strong>email:</strong> {userData.email}
      </p>
    </>
  );
}
