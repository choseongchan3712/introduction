import { useEffect, useState } from "react";
import { getGithub } from "../api/api";
import styled from "styled-components";
import StudyThree from "../components/StudyThree";
import "aos/dist/aos.css";
import Aos from "aos";

const Container = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: var(--main-color);
  padding: 100vh 15% 20px 15%;
  .text_wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
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
    </Container>
  );
};

export default Study;
