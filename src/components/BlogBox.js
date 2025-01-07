import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Container = styled.a`
  color: var(--font-color);
  width: auto;
  height: 400px;
  background-color: var(--box-color);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  word-break: keep-all;
  &:hover {
    .velog {
      background-color: var(--main-color);
      color: var(--font-color);
    }
    .text {
      color: var(--point-light);
    }
  }
  .velog {
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--font-color);
    color: var(--border-color);
    font-size: 30px;
    font-weight: 900;
    border-radius: 20px;
    transition: 0.25s ease-in-out;
  }
  .text {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    transition: 0.25s ease-in-out;
  }
`;

const BlogBox = ({ url, text }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 300,
    });
  }, []);
  return (
    <Container
      href={url}
      data-aos="fade-up"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="velog">velog</div>
      <div className="text">{text}</div>
    </Container>
  );
};

export default BlogBox;
