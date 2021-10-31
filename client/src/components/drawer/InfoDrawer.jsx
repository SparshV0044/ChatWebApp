import { Drawer } from "@material-ui/core";

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer open={open} onClose={handleClose}>
        hello
      </Drawer>
    </>
  );
};
export default InfoDrawer;
