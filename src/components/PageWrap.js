import styled from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--main-color);
  color: var(--font-color);
  a {
    color: var(--font-color);
  }
`;

const PageWrap = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageWrap;
