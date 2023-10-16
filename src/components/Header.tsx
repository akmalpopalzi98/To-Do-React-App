import { Box, Button, TextField, Typography } from "@mui/material";
import {
  changeTask,
  addTask,
  changeActiveStatus,
  changeCompletedStatus,
  changeAllStatus,
} from "../store";
import { useDispatch, useSelector } from "react-redux";

const AppHeader = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.form.task);
  const { active, completed } = useSelector((state: any) => state.form);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(changeTask(""));
    dispatch(
      addTask({
        description: value,
      })
    );
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <form
          style={{ display: "flex", width: "100%" }}
          onSubmit={handleSubmit}
        >
          <Button
            type="submit"
            className="header-button"
            variant="contained"
            sx={{
              backgroundColor: "#336eff",
              flex: "0 0 auto",
              marginLeft: "50px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Young Serif'",
                textAlign: "center",
              }}
            >
              Add Task
            </Typography>
          </Button>
          <TextField
            onChange={(event) => {
              dispatch(changeTask(event.target.value));
            }}
            variant="outlined"
            sx={{ padding: 0, marginLeft: "10px" }}
            value={value}
          />
        </form>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            marginLeft: "120px",
          }}
        >
          <Button
            className="header-button"
            sx={{ backgroundColor: completed || active ? "#ffe133" : "#ccc" }}
            onClick={() => {
              dispatch(changeAllStatus());
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Young Serif'",
                textAlign: "center",
              }}
            >
              All
            </Typography>
          </Button>
          <Button
            className="header-button"
            sx={{ backgroundColor: completed ? "#ccc" : "#33f8ff" }}
            onClick={() => {
              dispatch(changeCompletedStatus());
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Young Serif'",
                textAlign: "center",
              }}
            >
              Completed
            </Typography>
          </Button>
          <Button
            className="header-button"
            sx={{ backgroundColor: active ? "#ccc" : "#33ff38" }}
            onClick={() => {
              dispatch(changeActiveStatus());
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Young Serif'",
                textAlign: "center",
              }}
            >
              Active
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AppHeader;
