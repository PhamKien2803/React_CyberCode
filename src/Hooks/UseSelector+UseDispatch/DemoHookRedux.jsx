import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

function DemoHookRedux(props) {
  //Thay thế cho commentMaptoProps
  const comments = useSelector((state) => state.faceBookReducer.comments);

  //Lấy hàm dispatch từ useDispatch => để gửi giá trị lên reducer (thay thế cho mapDispatchToProp hoặc this.props.dispatch)
  let dispatch = useDispatch();
  //Lấy data người nhập
  const [userData, setUserData] = useState({
    name: "",
    content: "",
    avatar: "",
  });

  console.log(userData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleComments = (e) => {
    e.preventDefault(); //Chăn browser reload
    const useComment = {
      ...userData,
      avatar: `https://i.pravatar.cc/150?u=${userData?.name}`,
    };
    dispatch({
      type: "ADD_COMMENT",
      payload: useComment,
    });
  };

  return (
    <div className="container">
      <h3>Fakebook App!</h3>
      <div className="card text-left">
        <div className="card-header">
          {comments.map((item, index) => (
            <div className="row" key={index}>
              <div className="col-1">
                <img src={item?.avatar} alt="" style={{ height: 60 }} />
              </div>
              <div className="col-10">
                <h6 className="text-danger">{item?.name}</h6>
                <p>{item?.content}</p>
              </div>
            </div>
          ))}
        </div>
        <form className="card-body" onSubmit={handleComments}>
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-4">
            <h4 className="card-title">Content</h4>
            <input
              className="form-control"
              name="content"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-4">
            <button className="btn btn-success">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// const commentMaptoProps = (state) => {
//     return {
//         commentsPeople : state.faceBookReducer.comments,
//     };
// };

// export default connect(commentMaptoProps)(DemoHookRedux);

export default DemoHookRedux;
