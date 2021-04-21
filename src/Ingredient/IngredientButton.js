import {
  Button,
  TextField,
  Typography,
  Box,
  NativeSelect,
} from "@material-ui/core";
import React, { useState } from "react";
import "./IngredientButton.css";

function ClickButton(props) {
  return (
    <Button
      color="primary"
      variant="contained"
      className="quantitybutton"
      style={{ minWidth: "min-content", margin: "1px 1px", padding: "1px 7px" }}
    >
      {props.children}
    </Button>
  );
}

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { children: props.children, width: 1.2 };
  }

  handleChange = (e) => {
    console.log("Width now " + e.target.value.length);
    console.log(e.target.value);
    if (e.target.value.length === 0) {
      this.setState({ width: 1 });
      return;
    }
    this.setState({
      width: e.target.value.length * 1.2,
    });
  };

  render() {
    return (
      <ClickButton>
        <Box width={this.state.width + "ch"} style={{ margin: 0 }}>
          <TextField
            fullWidth
            defaultValue={this.state.children}
            onChange={(e) => this.handleChange(e)}
            // style={{ border: "1px solid black" }}
          />
        </Box>
      </ClickButton>
    );
  }
}

function SelectButton(props) {
  const [unit, setUnit] = useState("kg");
  var handleChange = (e) => {
    setUnit(e.target.value);
  };
  return (
    <ClickButton>
      <NativeSelect value={unit} onChange={handleChange}>
        <option value="kg">kg</option>
        <option value="g">g</option>
      </NativeSelect>
    </ClickButton>
  );
}

function IngredientButton(props) {
  return (
    <span style={{ display: "flex" }}>
      <EditButton>{props.quantity}</EditButton>
      <SelectButton />
      <Typography>of</Typography>
      <Typography>{props.name}</Typography>
    </span>
  );
}

export default IngredientButton;
