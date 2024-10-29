import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./css/UserProfile.css";

function UserProfile() {
  const [profile, setProfile] = useState({
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      values: { ...prevProfile.values, [name]: value },
      errors: { ...prevProfile.errors, [name]: "" },
    }));
  };

  const validateForm = () => {
    // Khởi tạo biến isValid là true và tạo một bản sao của các lỗi hiện tại
    let isValid = true;
    const newErrors = { ...profile.errors };

    // Kiểm tra tính hợp lệ của firstName
    if (!profile.values.firstName.trim()) {
      // Nếu firstName rỗng hoặc chỉ chứa khoảng trắng
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    // Kiểm tra tính hợp lệ của lastName
    if (!profile.values.lastName.trim()) {
      // Nếu lastName rỗng hoặc chỉ chứa khoảng trắng
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    // Kiểm tra tính hợp lệ của userName
    if (!profile.values.userName.trim()) {
      // Nếu userName rỗng hoặc chỉ chứa khoảng trắng
      newErrors.userName = "User Name is required";
      isValid = false;
    }

    // Kiểm tra tính hợp lệ của email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!profile.values.email.trim()) {
      // Nếu email rỗng hoặc chỉ chứa khoảng trắng
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(profile.values.email)) {
      // Nếu email không đúng định dạng
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Kiểm tra tính hợp lệ của password
    if (!profile.values.password) {
      // Nếu password rỗng
      newErrors.password = "Password is required";
      isValid = false;
    } else if (profile.values.password.length < 6) {
      // Nếu độ dài password nhỏ hơn 6 ký tự
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    // Kiểm tra tính hợp lệ của passwordConfirm
    if (!profile.values.passwordConfirm) {
      // Nếu passwordConfirm rỗng
      newErrors.passwordConfirm = "Password confirmation is required";
      isValid = false;
    } else if (profile.values.password !== profile.values.passwordConfirm) {
      // Nếu passwordConfirm không khớp với password
      newErrors.passwordConfirm = "Passwords do not match";
      isValid = false;
    }

    //Nếu data nhập chưa hợp lệ thì sẽ hiện thông báo 
    if(!isValid){
      alert("Data is not confirm, Please try again!!");
      return;
    }

    // Cập nhật state profile với các lỗi mới
    setProfile((prevProfile) => ({
      ...prevProfile,
      errors: newErrors,
    }));

    // Trả về kết quả kiểm tra form
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      handleShow();
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#EEEEEE",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        className="bg-white p-5 m-5"
        style={{
          fontSize:
            'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif',
          width: 600,
        }}
        onSubmit={handleSubmit}
      >
        <h1 className="text-center mt-0 mb-5">User Profile</h1>
        <div className="row">
          <div className="col-6">
            <div className="group">
              <input
                type="text"
                name="firstName"
                value={profile.values.firstName}
                onChange={handleChangeValue}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>First Name</label>
              <span className="text text-danger">
                {profile.errors.firstName}
              </span>
            </div>
          </div>

          <div className="col-6">
            <div className="group">
              <input
                type="text"
                name="lastName"
                value={profile.values.lastName}
                onChange={handleChangeValue}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Last Name</label>
              <span className="text text-danger">
                {profile.errors.lastName}
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  type="text"
                  name="userName"
                  value={profile.values.userName}
                  onChange={handleChangeValue}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>User Name</label>
                <span className="text text-danger">
                  {profile.errors.userName}
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  type="email"
                  name="email"
                  value={profile.values.email}
                  onChange={handleChangeValue}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Email</label>
                <span className="text text-danger">{profile.errors.email}</span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="group">
              <input
                type="password"
                name="password"
                value={profile.values.password}
                onChange={handleChangeValue}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password</label>
              <span className="text text-danger">
                {profile.errors.password}
              </span>
            </div>
          </div>

          <div className="col-6">
            <div className="group">
              <input
                type="password"
                name="passwordConfirm"
                value={profile.values.passwordConfirm}
                onChange={handleChangeValue}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Confirm Password</label>
              <span className="text text-danger">
                {profile.errors.passwordConfirm}
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <button
                className="btn text-white bg-dark w-100"
                style={{ fontSize: 25 }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Your profile details:</h5>
          <p>
            <strong>First Name:</strong> {profile.values.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {profile.values.lastName}
          </p>
          <p>
            <strong>Username:</strong> {profile.values.userName}
          </p>
          <p>
            <strong>Email:</strong> {profile.values.email}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserProfile;
