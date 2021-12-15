import { TextField, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { ITask } from "./DayList";


export default function TaskForm(props: ITask) {

  const [task, setTask] = useState<ITask>({
    id: "",
    name: "",
    checked: false
  });

  function handleTaskInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTask({...task, name: e.target.value})
  }

  return (
    <form className="task-form" style={{ padding: "8px 16px" }}>
      <TextField
        label="Task"
        type="text"
        name="task"
        style={{ flexGrow: 1 }}
        value={props.name}
        onChange={handleTaskInputChange}
      />
      <IconButton>
        <AddCircleIcon />
      </IconButton>
    </form>
  );
}
