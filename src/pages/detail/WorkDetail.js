import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { workList } from "../../data/workDetailData";
import "aos/dist/aos.css";
import Aos from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useScrollTop } from "../../lib/useScrollTop";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  top: 0;
  left: 0;
  background-color: var(--main-color);
  padding: 120px 15% 20px 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  word-break: keep-all;
  line-height: 2em;
  letter-spacing: -1px;
  .contents {
    width: 100%;
    padding-bottom: 100px;
    color: var(--font-color);
    a {
      color: var(--font-color);
      transition: 0.25s ease-in-out;
      &:hover {
        color: var(--point-light);
      }
    }
    .title {
      position: relative;
      width: 100%;
      font-size: 40px;
      font-weight: 900;
      padding-bottom: 50px;
      &::after {
        content: "";
        position: absolute;
        width: 50%;
        height: 1px;
        background-color: var(--font-color);
        left: 0;
        top: 60px;
      }
    }
    .detail {
      width: 100%;
      font-size: 20px;
      font-weight: 700;
      padding-bottom: 25px;
    }
    img {
      margin: 0 auto;
      width: 50%;
      border-radius: 20px;
      overflow: hidden;
    }
  }
  .back {
    position: fixed;
    z-index: 1;
    right: 8%;
    top: 100px;
    font-weight: 900;
    padding: 15px;
    background-color: var(--box-color);
    border-radius: 20px;
    a {
      color: var(--font-color);
      transition: 0.25s ease-in-out;
      &:hover {
        color: var(--point-light);
      }
    }
    svg {
      padding-right: 10px;
    }
  }
`;

const WorkDetail = () => {
  const page = useParams().id;
  const [pageName, setPageName] = useState();

  useEffect(() => {
    setPageName(page);

    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 400,
    });
  }, []);

  useScrollTop();

  return (
    <Container>
      <div className="contents">
        <div className="title" data-aos="fade-up">
          제목
        </div>
        <div className="detail" data-aos="fade-right" data-aos-delay="900">
          {workList[pageName]?.title}
        </div>
      </div>
      <div className="contents">
        <div className="title" data-aos="fade-up">
          바로가기
        </div>
        <div className="detail" data-aos="fade-right" data-aos-delay="900">
          <div className="detail" data-aos="fade-right" data-aos-delay="900">
            {/* {workList[pageName]?.title} */}
            <img src={workList[pageName]?.img} alt="detail_img" />
          </div>
          <a
            href={workList[pageName]?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            주소: {workList[pageName]?.url}
          </a>
        </div>
      </div>
      <div className="contents">
        <div className="title" data-aos="fade-up">
          목적
        </div>
        {workList[pageName]?.purpose?.map((data, index) => (
          <div
            className="detail"
            data-aos="fade-right"
            data-aos-delay="900"
            key={index}
          >
            {data}
          </div>
        ))}
      </div>
      <div className="contents">
        <div className="title" data-aos="fade-up">
          사용법
        </div>
        {workList[pageName]?.use?.map((data, index) => (
          <div
            className="detail"
            data-aos="fade-right"
            data-aos-delay="900"
            key={index}
          >
            {data}
          </div>
        ))}
      </div>
      <div className="contents">
        <div className="title" data-aos="fade-up">
          사용스킬
        </div>
        {workList[pageName]?.skill?.map((data, index) => (
          <div
            className="detail"
            data-aos="fade-right"
            data-aos-delay="900"
            key={index}
          >
            {data}
          </div>
        ))}
      </div>
      <div className="contents">
        <div className="title" data-aos="fade-up">
          느낀점
        </div>
        {workList[pageName]?.feel?.map((data, index) => (
          <div
            className="detail"
            data-aos="fade-right"
            data-aos-delay="900"
            key={index}
          >
            {data}
          </div>
        ))}
      </div>
      <div className="contents">
        <div className="title" data-aos="fade-up">
          어려웠던 점
        </div>
        {workList[pageName]?.difficult?.map((data, index) => (
          <div
            className="detail"
            data-aos="fade-right"
            data-aos-delay="900"
            key={index}
          >
            {data}
          </div>
        ))}
      </div>
      <div className="contents">
        <div className="title" data-aos="fade-up">
          팁
        </div>
        {workList[pageName]?.tip?.map((data, index) => (
          <div
            className="detail"
            data-aos="fade-right"
            data-aos-delay="900"
            key={index}
          >
            {data}
          </div>
        ))}
      </div>
      <div className="contents">
        <div className="title" data-aos="fade-up">
          깃허브 주소 및 구조도
        </div>
        <div className="detail" data-aos="fade-right" data-aos-delay="900">
          <div className="detail" data-aos="fade-right" data-aos-delay="900">
            {/* {workList[pageName]?.title} */}
            <img src={workList[pageName]?.cons} alt="detail_img" />
          </div>
          <a
            href={workList[pageName]?.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            주소: {workList[pageName]?.github}
          </a>
        </div>
      </div>
      <div className="back">
        <Link to={"/work"}>
          <FontAwesomeIcon icon={faArrowLeft} />
          뒤로가기
        </Link>
      </div>
    </Container>
  );
};

export default WorkDetail;
