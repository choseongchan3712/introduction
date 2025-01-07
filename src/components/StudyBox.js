import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  .wrap {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    .name {
      font-size: 20px;
      font-weight: 700;
      color: var(--font-color);
    }
    a {
      padding: 15px;
      border-radius: 15px;
      font-size: 16px;
      color: var(--font-color);
      background-color: var(--box-color);
      transition: 0.25s ease-in-out;
      font-weight: 900;
      &:hover {
        color: var(--point-light);
      }
    }
  }
`;

const StudyBox = ({ name, url }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 300,
    });
  }, []);
  return (
    <Container>
      <div className="wrap" data-aos="fade-up">
        <div className="name">{name}</div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          깃허브 바로가기
        </a>
      </div>
    </Container>
  );
};

export default StudyBox;
