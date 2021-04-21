import { Component } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import IngredientButton from "./IngredientButton";

class IngredientDisplay extends Component {
  render() {
    return (
      <div>
        <h3>Ingredients</h3>
        <List
          className="itemcontainer"
          // style={{ border: "1px solid black" }}
          style={{
            maxHeight: "500px",
            overflow: "scroll",
            // width: "50%",
          }}
        >
          <ListItem>
            <IngredientButton
              quantity={5}
              unit={"kg"}
              name={"Wheat"}
            ></IngredientButton>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default IngredientDisplay;
