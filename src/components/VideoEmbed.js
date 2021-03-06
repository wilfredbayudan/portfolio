import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
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
          title={name}
          src={videoEmbed}
          width="100%"
          height="520"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default VideoEmbed;
