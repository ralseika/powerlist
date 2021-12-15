import "./App.css";
import { Typography } from "@material-ui/core";
import DayList from "./components/DayList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography style={{ padding: 16 }} variant="h3">
          Power List
        </Typography>
      </header>
      <DayList />
    </div>
  );
}

export default App;
