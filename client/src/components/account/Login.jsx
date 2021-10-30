import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem } from "@material-ui/core";
import GoogleLogin from "react-google-login";
import { useContext } from "react";
import { AccountContext } from "../context/Accountprovider";

//CSS
const useStyle = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    padding: "56px 0 56px 56px",
  },
  qrcode: {
    height: 264,
    width: 264,
    padding: "50px 0 0 50px",
  },
  title: {
    fontSize: "26px",
    marginBottom: "25px",
    color: "#525252",
    fontFamily:
      "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
    fontWeight: 300,
  },
  list: {
    "& > *": {
      fontSize: 18,
      padding: 0,
      marginTop: 15,
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    width: "60%",
    marginTop: "12%",
    boxShadow: "none",
    borderRadius: "0",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};

const Login = ({ classes }) => {
  const qrurl = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";
  const classname = useStyle();
  const clientId =
    "817642837955-6kv070srfq8u2m827fngm44dqrjh8f7m.apps.googleusercontent.com";

  //Google Auth Functions
  const onLoginSuccess = (res) => {
    setAccount(res.profileObj);
    console.log("Login Successful", res.profileObj);
  };

  const onLoginFailure = () => {
    console.log("Login Fail");
  };
  //

  //UseContext
  const { account, setAccount } = useContext(AccountContext);

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
            <Typography className={classname.title}>
              To use WhatsApp on your computer
            </Typography>
            <List className={classname.list}>
              <ListItem>1. Open WhatsApp on your phone</ListItem>
              <ListItem>
                2. Tap Menu or settings and select Linked Devices
              </ListItem>
              <ListItem>
                1. Point your phone to this screen to capture the code
              </ListItem>
            </List>
          </Box>
          <Box
            style={{
              position: "relative",
            }}
          >
            <img src={qrurl} alt="qr" className={classname.qrcode} />
            <Box
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
              }}
            >
              <GoogleLogin
                clientId={clientId}
                buttonText=""
                isSignedIn={true}
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={"single_host_origin"}
              />
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default withStyles(style)(Login);
