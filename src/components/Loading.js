import styled from "styled-components";
import {PropagateLoader} from "react-spinners";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Container>
      <PropagateLoader size={20} color="#fff"/>
    </Container>
  );
};

export default Loading;
