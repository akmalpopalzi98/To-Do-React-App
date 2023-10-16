import { Box, Button, Checkbox, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, setStatus } from "../store";

interface TaskType {
  description: string;
  id: string;
  status: string;
}

const TaskList = () => {
  const tasks = useSelector((state: any) => state.tasks.taskList);
  const { active, completed } = useSelector((state: any) => state.form);

  const filteredTasks = tasks.filter((task: TaskType) => {
    if (active) {
      return task.status === "active";
    }
    if (completed) {
      return task.status === "complete";
    } else {
      return task;
    }
  });

  // const formstate = useSelector((state: any) => state.form);
  // console.log(formstate);

  const dispatch = useDispatch();
  // console.log(tasks);

  const renderedItems = filteredTasks.map((task: TaskType) => {
    return (
      <Box
        sx={{
          marginBottom: "10px",
          backgroundColor: "#6495ED",
          height: "50px",
          width: "60%",
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
        }}
        key={task.id}
      >
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Checkbox
            onClick={() => {
              dispatch(setStatus(task.id));
            }}
            defaultChecked={task.status === "complete"}
          />
          <Typography>{task.description}</Typography>
        </Box>
        <Button
          onClick={() => {
            dispatch(removeTask(task.id));
          }}
          sx={{ ml: "auto" }}
        >
          <DeleteForeverIcon />
        </Button>
      </Box>
    );
  });
  return (
    <Box
      sx={{
        marginTop: "20px",
        flexDirection: "column",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "scroll",
        height: "350px",
      }}
    >
      {renderedItems}
    </Box>
  );
};

export default TaskList;
