import React from "react";

function HeaderGlasses() {
  return (
    <div>
      <nav
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="navbar navbar-expand-sm "
      >
        <h1 style={{ color: "white" }}>TRY GLASSES APP ONLINE</h1>
      </nav>
    </div>
  );
}

export default HeaderGlasses;
