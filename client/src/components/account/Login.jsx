import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem } from "@material-ui/core";

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
  },
};

const Login = ({ classes }) => {
  const qrurl = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";
  const classname = useStyle();
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
          <Box className={classname.qrcode}>
            <img src={qrurl} alt="qr" />
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default withStyles(style)(Login);