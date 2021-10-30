import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import { AccountContext } from "./context/Accountprovider";
import ChatBox from "./ChatBox";

//Components
import Login from "./account/Login";

const useStyles = makeStyles({
  component: {
    background: "#DCDCDC",
    height: "100vh",
  },
  loginHeader: {
    height: 200,
    background: "#00bfa5",
    boxShadow: "none",
  },
  Header: {
    height: 115,
    background: "#00bfa5",
    boxShadow: "none",
  },
});

const Messenger = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <>
      <Box className={classes.component}>
        <AppBar className={account ? classes.Header : classes.loginHeader}>
          <Toolbar></Toolbar>
        </AppBar>
        {account ? <ChatBox /> : <Login />}
      </Box>
    </>
  );
};

export default Messenger;
