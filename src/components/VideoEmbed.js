import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const VideoEmbed = ({ viewEmbed, setViewEmbed }) => {
  const handleClose = () => {
    setViewEmbed(null);
  };

  if (!viewEmbed) return null;

  const { name, videoEmbed } = viewEmbed;

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={!!viewEmbed}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
      <DialogContent>
        <iframe
          src={videoEmbed}
          width="100%"
          height="520"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default VideoEmbed;
