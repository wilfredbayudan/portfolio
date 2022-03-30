import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import styledComponent from "styled-components";
// import PlaceHolder from "../assets/images/splash.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LinkIcon from "@mui/icons-material/Link";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { setStatus, setMessage } from "../features/loaderSlice";
import useIntersection from "../hooks/useIntersection";

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

const ProjectItem = ({ project, setViewEmbed }) => {
  const ref = useRef();

  const inViewport = useIntersection(ref, "-5%");

  const dispatch = useDispatch();

  const handleDemoClick = () => {
    window.open(project.demoUrl);
  };

  const handleGithubClick = () => {
    window.open(project.githubLink);
  };

  const handleVideoClick = () => {
    setViewEmbed(project);
  };

  const renderStackChips = project.stack.map((stack, index) => {
    return <Chip sx={{ margin: "3px" }} key={index} label={stack} />;
  });

  return (
    <StyledCard ref={ref} className={inViewport ? "active" : ""}>
      <CardHeader title={project.name} subheader={project.created} />
      <CardMedia
        component="img"
        height="250"
        image={project.image}
        alt="Paella dish"
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <div direction="row" spacing={1} style={{ margin: "0 10px 0 10px " }}>
        {renderStackChips}
      </div>
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
          <StyledIconButton
            aria-label="Watch video demonstration"
            onClick={() => handleVideoClick()}
          >
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
