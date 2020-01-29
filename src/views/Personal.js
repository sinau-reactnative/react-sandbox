import React, { Fragment, useState, useEffect } from "react";

import Header from "../components/Header";

const Personal = () => {
  const url = "https://us-central1-wedding-planner-64948.cloudfunctions.net/v1";
  const [task, setTask] = useState([]);
  // const [form, setForm] = useState({ taskId: "", personalId: "" });
  const [form, setForm] = useState({ item: "" });

  const handleChange = event => {
    setForm({ item: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`${url}/todo/FvdXZSpGtzxrKDX1s2Zl`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(result => {
        setTask([...task, { id: result.data, item: form.item }]);
        setForm({ item: " " });
        console.log(form.item);
      });
  };

  const deleteTask = event => {
    const id = event.target.value;
    event.preventDefault();
    fetch(`${url}/todo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(result => {
        setTask(task.filter(i => i.id !== id));
      });
  };

  useEffect(() => {
    fetch(`${url}/todo?task_id=FvdXZSpGtzxrKDX1s2Zl`)
      .then(response => response.json())
      .then(result => {
        setTask(result.data.map(i => ({ id: i.id, item: i.item })));
      });
  }, []);

  return (
    <Fragment>
      <Header />
      <h1>Personal</h1>
      <h2>Todo : </h2>
      <ul>
        {task.length > 0
          ? task.map((i, key) => {
              return (
                <Fragment key={`${key.toString()}-fragment`}>
                  <li key={key.toString()}>{i.item}</li>
                  <button
                    key={`${key.toString()}-button`}
                    value={i.id}
                    onClick={deleteTask}
                  >
                    delete
                  </button>
                </Fragment>
              );
            })
          : null}
      </ul>
      <input
        type="text"
        name="taskId"
        value={form.taskId}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>ADD TODO</button>
    </Fragment>
  );
};

export default Personal;
