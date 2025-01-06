import styled from "styled-components";
import ParallaxText from "../components/ParallaxText";

const Container = styled.div`
  position: relative;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 100vh 15% 20px 15%;
  background-color: var(--main-color);
  overflow: hidden;
  .scroll_text {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .parallax {
      overflow: hidden;
      letter-spacing: -2px;
      line-height: 1;
      white-space: nowrap;
      display: flex;
      flex-wrap: nowrap;
    }
    .parallax .scroller {
      font-weight: 600;
      text-transform: uppercase;
      font-size: 120px;
      display: flex;
      white-space: nowrap;
      display: flex;
      flex-wrap: nowrap;
    }
    .parallax span {
      display: block;
      margin-right: 30px;
      color: var(--font-color);
      transition: 0.25s ease-in-out;
      &:hover {
        color: var(--point-light);
      }
    }
  }
`;

const Introduction = () => {
  return (
    <Container>
      <div className="scroll_text">
        <ParallaxText baseVelocity={-5}>INTRODUCTION</ParallaxText>
        <ParallaxText baseVelocity={5}>CHOSEONGCHAN</ParallaxText>
      </div>
    </Container>
  );
};

export default Introduction;
