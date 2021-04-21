import React, { Component } from "react";
import {
  ListItemText,
  ListItem,
  TextField,
  Button,
  List,
  Typography,
} from "@material-ui/core";
import "./SearchFilter.css";

class SearchFilter extends Component {
  state = {
    itemsToDisplay: [],
    itemsToUse: [],
    data: [],
  };

  render() {
    return (
      <div className="SearchFilter">
        <div className="restfilter">
          Search for a food &nbsp;
          <form
            className="resourceForm"
            noValidate
            autoComplete="off"
            onSubmit={(event) => {
              this.searchFoods();
              event.preventDefault();
            }}
          >
            <TextField id="searchBox" label="Resource" variant="outlined" />
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "10px" }}
              type="submit"
            >
              Search
            </Button>
          </form>
        </div>
        <div className="restcontainer">
          <List
            className="itemcontainer"
            // style={{ border: "1px solid black" }}
            style={{
              // maxHeight: 500,
              overflow: "auto",
              // width: "50%",
            }}
          >
            {this.state.itemsToDisplay.map((value, index) => {
              return (
                <ListItem
                  className="itemcontainer"
                  button
                  key={index}
                  onClick={() => console.log(value.total)}
                >
                  <ListItemText>
                    <Typography noWrap>{value.name}</Typography>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
    );
  }

  searchFoods = () => {
    var e = document.getElementById("searchBox");
    var selected = e.value;

    if (selected === "")
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else {
      let itemsToDisplay = [];
      itemsToDisplay = this.state.itemsToUse.filter((item) =>
        item.name.toLowerCase().includes(selected.toLowerCase())
      );
      this.setState({ itemsToDisplay });
    }
  };

  async componentDidMount() {
    // await axios("/api/v1/all-foods").then((res) => {
    //   this.state.data = res.data;
    // });
    let data = require("../data.json");
    this.state.data = data.data;
    this.reRenderList();
  }

  reRenderList() {
    this.setState({ itemsToDisplay: this.state.data }, () => {
      this.setState({ itemsToUse: [...this.state.itemsToDisplay] });
    });
  }
}

export default SearchFilter;
