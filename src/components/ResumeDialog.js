import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import DialogContent from "@mui/material/DialogContent";
import { useSelector, useDispatch } from "react-redux";
import { setDisplay } from "../features/resumeSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ResumeDialog({ contactRef }) {
  const dispatch = useDispatch();
  const resumeDisplay = useSelector((state) => state.resume.display);

  const handleClose = () => {
    dispatch(setDisplay(false));
    contactRef.current.scrollIntoView();
  };

  return (
    <Dialog
      fullScreen
      open={resumeDisplay}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative", backgroundColor: "#22272e" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Resume
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Download PDF
          </Button>
        </Toolbar>
      </AppBar>
      <DialogContent>RESUME</DialogContent>
    </Dialog>
  );
}
