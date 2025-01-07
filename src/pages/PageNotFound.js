import styled from "styled-components";
import PageWrap from "../components/PageWrap";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 100px;
`;

const PageNotFound = () => {
  return (
    <PageWrap>
      <Wrap>404!</Wrap>
    </PageWrap>
  );
};

export default PageNotFound;
