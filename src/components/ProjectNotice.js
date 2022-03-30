import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { clear } from "../features/noticeSlice";

const StyledActions = styled(DialogActions)`
  .btn {
    background-color: #64d5c6;
    float: right;
    color: #3e3e3e;
    width: 100%;
    @media (min-width: 768px) {
      width: auto;
    }
  }
  .btn:hover {
    background-color: #96e2d8;
  }
`;

const ProjectNotice = () => {
  const dispatch = useDispatch();

  const notice = useSelector((state) => state.notice);

  const handleClose = () => {
    dispatch(clear());
  };

  const handleViewClick = (url) => {
    handleClose();
    window.open(url);
  };

  if (notice.display) {
    return (
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {notice.data.notice}
          </DialogContentText>
        </DialogContent>
        <StyledActions>
          <Button
            className="btn"
            variant="contained"
            disableElevation
            startIcon={<FindInPageIcon />}
            onClick={() => handleViewClick(notice.data.url)}
          >
            View
          </Button>
        </StyledActions>
      </Dialog>
    );
  }

  return null;
};

export default ProjectNotice;
