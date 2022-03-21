import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styledComponent from "styled-components";
// import PlaceHolder from "../assets/images/splash.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LinkIcon from "@mui/icons-material/Link";

const StyledIconButton = styled(IconButton)`
  &:hover {
    color: #00ceb3;
  }
`;

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// const CardWrapper = styledComponent.div`
//   width: 100%;
//   @media (min-width: 768px) {
//     width: 49%;
//   }
//   @media (min-width: 1400px) {
//     width: 24%;
//   }
// `;

const StyledCard = styledComponent(Card)`
  width: 100%;
  @media (min-width: 768px) {
    width: 49%;
  }
  @media (min-width: 1400px) {
    width: 24%;
  }
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const ProjectItem = ({ project }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDemoClick = () => {
    window.open(project.demoUrl);
  };

  const handleGithubClick = () => {
    window.open(project.githubLink);
  };

  return (
    <StyledCard>
      <CardHeader title={project.name} subheader={project.created} />
      <CardMedia
        component="img"
        height="194"
        image={project.image}
        alt="Paella dish"
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ flexShrink: 0 }} disableSpacing>
        <Tooltip title="Live Demo" arrow>
          <StyledIconButton
            aria-label="View live demo"
            onClick={() => handleDemoClick()}
          >
            <LinkIcon />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Video Preview" arrow>
          <StyledIconButton aria-label="Watch video demonstration">
            <OndemandVideoIcon />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="GitHub Repository" arrow>
          <StyledIconButton
            aria-label="View GitHub Repository"
            onClick={() => handleGithubClick()}
          >
            <GitHubIcon />
          </StyledIconButton>
        </Tooltip>
      </CardActions>
    </StyledCard>
  );
};

export default ProjectItem;
