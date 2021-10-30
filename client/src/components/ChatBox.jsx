import React from "react";
import { Box, Dialog } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "./menu/Menu";

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    minWidth: "380px",
  },
  rightComponent: {
    borderLeft: `3px solid rgba(0,0,0,0.14)`,
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    width: "91%",

    boxShadow: "none",
    borderRadius: "0",
    maxHeight: "100%",
    maxWidth: "100%",
  },
};

const ChatBox = ({ classes }) => {
  const classname = useStyles();
  return (
    <>
      <Dialog
        open={true}
        classes={{ paper: classes.dialogPaper }}
        BackdropProps={{
          style: {
            backgroundColor: "unset",
          },
        }}
      >
        <Box className={classname.component}>
          <Box className={classname.leftComponent}>
            <Menu />
          </Box>
          <Box className={classname.rightComponent}>HI</Box>
        </Box>
      </Dialog>
    </>
  );
};

export default withStyles(style)(ChatBox);
