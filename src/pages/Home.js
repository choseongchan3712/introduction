import styled from "styled-components";
import PageWrap from "../components/PageWrap";
import Title from "../components/Title";
import MenuList from "../components/MenuList";
import { Link } from "react-router-dom";
import MainThree from "../components/MainThree";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .contents {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .three_wrap {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

const Home = () => {
  return (
    <PageWrap>
      <Container>
        <div className="contents">
          <Title />
          <div className="menu">
            <MenuList delay={"2s"}>
              <Link to={"/work"}>작업물</Link>
            </MenuList>
            <MenuList delay={"3s"}>
              <Link to={"/introduction"}>자기소개</Link>
            </MenuList>
            <MenuList delay={"4s"}>
              <Link to={"/blog"}>블로그</Link>
            </MenuList>
            <MenuList delay={"5s"}>
              <Link to={"/study"}>공부기록</Link>
            </MenuList>
          </div>
        </div>
        <div className="three_wrap">
          <MainThree />
        </div>
      </Container>
    </PageWrap>
  );
};

export default Home;
