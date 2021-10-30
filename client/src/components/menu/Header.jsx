import { useContext } from "react";
import { Box, Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChatIcon from "@material-ui/icons/Chat";

import { AccountContext } from "../context/Accountprovider";
import { mergeClasses } from "@material-ui/styles";
import Headermenu from "./HeaderMenu";

const useStyles = makeStyles({
  header: {
    display: "flex",
    height: "35px",
    background: "#ededed",
    padding: "10px 16px 10px 16px",
    alignItems: "center",
  },
  avatar: {
    height: "37px",
    width: "37px",
    borderRadius: "50%",
  },
  icons: {
    marginLeft: "auto",
    "& > *": {
      marginLeft: 3,
      padding: 6,
      color: "#919191",
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
      marginTop: 3,
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <>
      <Box className={classes.header}>
        <img src={account.imageUrl} alt="DP" className={classes.avatar}></img>
        <Box className={classes.icons}>
          <ChatIcon />
          <Headermenu />
        </Box>
      </Box>
    </>
  );
};

export default Header;
