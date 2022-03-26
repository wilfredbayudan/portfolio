import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: #22272e; */
  padding: 20px;
  @media (min-width: 1152px) {
    padding: 40px;
  }
  section {
    opacity: 0;
    transition: all 500ms linear;
    position: relative;
    left: -500px;
  }
  section.active {
    opacity: 1;
    left: 0px;
  }
`;

export const Content = styled.section`
  width: 100%;
  max-width: 1600px;
  background: #ffffff;
  text-align: left;
  margin: 0 auto;
  padding: 15px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  @media (min-width: 768px) {
    padding: 30px;
    background: #f3f3f4;
  }
`;

export const Title = styled.h2`
  font-size: 3em;
  text-transform: uppercase;
  color: #4c4c4c;
  padding: 0 0 15px 0;
  margin-top: 10px;
  margin-bottom: 20px;
  border-bottom: 4px solid #9d9d9d;
`;
