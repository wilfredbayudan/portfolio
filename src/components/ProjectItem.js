import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
// import PlaceHolder from "../assets/images/splash.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LinkIcon from "@mui/icons-material/Link";
import Chip from "@mui/material/Chip";
import { useDispatch } from "react-redux";
// import { setStatus, setMessage } from "../features/loaderSlice";
import { setData } from "../features/noticeSlice";
import useIntersection from "../hooks/useIntersection";
import { StyledIconButton } from "../styles/Content";

const StyledCard = styled(Card)`
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
  const inViewport = useIntersection(ref, "-10%");

  const dispatch = useDispatch();

  const handleDemoClick = () => {
    if (!project.notice) return window.open(project.demoUrl);
    dispatch(
      setData({
        notice: project.notice,
        url: project.demoUrl,
      })
    );
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
        height="220"
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
