import React from "react";

function Profile() {
  if (localStorage.getItem(JSON.stringify("userLogin"))) {
    return <div>
        <h1>Profile</h1>
    </div>;
  }else{
    alert("Please login first!!")
    window.location.href = "/login";
  }
}

export default Profile;
