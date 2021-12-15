import React from "react";
import { List } from "@material-ui/core";
import Task from "./Task";

export default function TaskList() {
  return (
    <List>
      
      {
        [1,2,3,4,5].map((task, idx) => {
          return <Task key={idx}/>
        })
      }
      
    </List>
  );
}
