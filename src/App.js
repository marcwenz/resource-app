import "./App.css";
import { TextField, Button } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form className="resourceForm" noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Resource" variant="outlined" />
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "10px" }}
          >
            Search
          </Button>
        </form>
      </header>
    </div>
  );
}

export default App;
