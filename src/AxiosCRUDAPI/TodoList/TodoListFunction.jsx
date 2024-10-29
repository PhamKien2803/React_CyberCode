import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/Todolist.css";
function TodoListFunction() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    status: false,
  });

  useEffect(() => {
    axios
      .get("/tasks")
      .then((response) => setTask(response.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleCreateNewTask = async () => {
    try {
      const request = await axios.post("/tasks", newTask);
      if (request.status === 201) {
        //Add thành công
        setTask([...task, request.data]); //Set giá trị mới khi đc add thành công
        setNewTask({ title: "", status: false }); // Reset lại form
        alert("Add new task successfully !!");
      } else {
        alert("Add new task failed !!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you want to delete this task !");
    if (confirm) {
      try {
        const respone = await axios.delete(`/tasks/${id}`);
        if(respone.status === 200){
          window.location.reload();
          alert("Delete successfully !!")
        }else{
          alert("Delete Failed !!!")
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const renderTasksUnCompleted = () => {
    return (
      <ul className="todo" id="todo">
        {task
          .filter((item) => !item.status)
          .map((item, index) => (
            <li key={index}>
              <span>{item?.title}</span>
              <div className="buttons">
                <button
                  onClick={() => {
                    handleDelete(item?.id);
                  }}
                  className="complete"
                >
                  <i
                    style={{ marginRight: "1rem" }}
                    className="fa fa-trash"
                    aria-hidden="true"
                  ></i>
                </button>

                <button className="complete">
                  <i className="fa fa-times-circle" aria-hidden="true" />
                </button>
              </div>
            </li>
          ))}
      </ul>
    );
  };

  const rederTasksCompleted = () => {
    return (
      <ul className="todo" id="completed">
        {task
          .filter((item) => item.status)
          .map((item, index) => (
            <li key={index}>
              <span>{item?.title}</span>
              <div className="buttons">
                <button className="remove">
                  <i className="fa fa-trash-alt" />
                </button>
                <button className="complete">
                  <i className="fa fa-check-circle" aria-hidden="true" />
                  {/* <i className="fas fa-check-circle" /> */}
                </button>
              </div>
            </li>
          ))}
      </ul>
    );
  };

  return (
    <div className="card">
      <div className="card__header">
        <img src={require("./Image/bg.png")} alt="bg" />
      </div>
      {/* <h2>hello!</h2> */}
      <div className="card__body">
        <div className="card__content">
          <div className="card__title">
            <h2>My Tasks</h2>
            <p>September 9,2020</p>
          </div>
          <div className="card__add">
            <input
              id="newTask"
              type="text"
              name="title"
              value={newTask?.title}
              onChange={handleChange}
              placeholder="Enter an activity..."
            />
            <button onClick={handleCreateNewTask} id="addItem">
              <i className="fa fa-plus" />
            </button>
          </div>
          <div className="card__todo">
            {/* Uncompleted tasks */}
            {renderTasksUnCompleted()}
            {/* Completed tasks */}
            {rederTasksCompleted()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoListFunction;
