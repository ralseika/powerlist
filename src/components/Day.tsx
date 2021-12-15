import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px"
  },
}));

function addTask () {
  return;
}

export default function Day() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className="date"></div>
      <TaskForm addTask={addTask} task={{id: "", name:"", checked: false}}/>
      <TaskList />
    </Paper>
  );
}
