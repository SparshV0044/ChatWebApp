import { useState, useContext } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { GoogleLogout } from "react-google-login";
import { clientId } from "../../constants/data";
import Accountprovider, { AccountContext } from "../context/Accountprovider";
import { makeStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles({
  menuItem: {
    fontSize: 14,
    padding: "15px  60px  5px  24px",
    color: "#4a4a4a",
  },
  logout: {
    border: "none!important",
    boxShadow: "none!important",
    "& > *": {
      padding: "0px !important",
    },
  },
});

const Headermenu = () => {
  const { setAccount } = useContext(AccountContext);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  //Logout Function
  const onLogoutSuccess = () => {
    alert("You have been Logged Out!");
    console.clear();
    setAccount("");
  };

  return (
    <>
      <MoreVertIcon onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem className={mergeClasses.menuItem} onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem className={mergeClasses.menuItem} onClick={handleClose}>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
            className={classes.logout}
          >
            Logout
          </GoogleLogout>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Headermenu;
