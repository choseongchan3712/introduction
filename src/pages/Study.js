import { useEffect, useState } from "react";
import { getGithub } from "../api/api";
import styled from "styled-components";
import StudyThree from "../components/StudyThree";
import "aos/dist/aos.css";
import Aos from "aos";
import StudyBox from "../components/StudyBox";
import { useScrollTop } from "../lib/useScrollTop";

const Container = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: var(--main-color);
  padding: 100vh 15% 200px 15%;
  .text_wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .git_wrap {
    width: 100%;
  }
`;

const Study = () => {
  const [res, setRes] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await getGithub();
        setRes(
          response?.data.map((data) => ({
            name: data.name,
            url: data.html_url,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 300,
    });
  }, []);
  useScrollTop();

  return (
    <Container>
      <div className="text_wrap" data-aos="fade-up">
        {res ? (
          <StudyThree
            wordList={res?.map((data) => data.name)}
            to={res?.map((data) => data.url)}
          />
        ) : (
          "loading"
        )}
      </div>
      <div className="git_wrap">
        {res
          ? res.map((data, index) => (
              <StudyBox key={index} name={data.name} url={data.url} />
            ))
          : "loading"}
      </div>
    </Container>
  );
};

export default Study;
