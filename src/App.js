import "./App.css";
import { React } from "react";
import SearchFilter from "./Search/SearchFilter";
import IngredientDisplay from "./Ingredient/IngredientDisplay";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid container spacing={3} className="gridcontainer">
        <Grid item xs={6} style={{ height: "100%" }}>
          <SearchFilter />
        </Grid>
        <Grid item xs={6} style={{ height: "100%" }}>
          <IngredientDisplay />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
