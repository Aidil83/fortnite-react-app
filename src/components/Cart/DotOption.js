import React, { useContext, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { StateContext } from "../../context/StateProvider";

const options = ["Delete selected", "Delete all", "Deselect all"];

const ITEM_HEIGHT = 48;

const DotOption = () => {
  const [{ purchasedItems }, dispatch] = useContext(StateContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    console.log(purchasedItems, "DotOptions");
    if (option === "Delete selected")
      dispatch({
        type: "DELETE_SELECTED",
        payload: purchasedItems,
      });
    else if (option === "Delete all")
      dispatch({
        type: "DELETE_ALL",
        payload: purchasedItems,
      });
    else if (option === "") setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ padding: "2px" }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => {
          return (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={() => handleClose(option)}
            >
              {option}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default DotOption;
