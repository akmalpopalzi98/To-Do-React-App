import { Box, Typography } from "@mui/material";
import AppHeader from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffb533",
        width: "900px",
        height: "500px",
        margin: "0 auto",
        borderRadius: "15px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Young Serif'",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        TO-DO LIST
      </Typography>
      <AppHeader />
      <TaskList />
    </Box>
  );
}

export default App;
