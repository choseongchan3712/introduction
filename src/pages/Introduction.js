import styled from "styled-components";
import ParallaxText from "../components/ParallaxText";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useScrollTop } from "../lib/useScrollTop";

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
  @media screen and (max-width: 1850px) {
    padding: 100vh 20px 20px 20px;
  }
  a {
    color: var(--font-color);
    transition: 0.25s ease-in-out;
    &:hover {
      color: var(--point-light);
    }
  }
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
  .contents_wrap {
    width: 100%;
    position: relative;
    color: var(--font-color);
    .contents {
      width: 100%;
      padding-bottom: 200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        width: 20%;
        font-size: 50px;
        font-weight: 900;
      }
      .detail_wrap {
        width: 80%;
        padding: 20px;
        border-radius: 20px;
        background-color: var(--box-color);
        .line {
          width: 100%;
          padding: 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          .bold_box {
            font-weight: 900;
            font-size: 20px;
          }
          .re_box {
            font-weight: 500;
            font-size: 18px;
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
    .basic {
      .bold_box {
        width: 20%;
        border-right: 1px solid rgba(255, 255, 255, 0.5);
        padding-left: 20px;
      }
      .re_box {
        width: 80%;
        padding-left: 20px;
      }
    }
    .education {
      .title {
        display: flex;
        justify-content: flex-end;
      }
      .bold_box {
        width: calc(100% / 3);
        border-right: 1px solid rgba(255, 255, 255, 0.5);
        padding-left: 10px;
      }
      .bold_box:nth-child(3) {
        border: none;
      }
      .re_box {
        width: calc(100% / 3);
        border-right: 1px solid rgba(255, 255, 255, 0.5);
        padding-left: 10px;
      }
      .re_box:nth-child(3) {
        border: none;
      }
    }
    .act {
      .bold_box:nth-child(1),
      .bold_box:nth-child(3) {
        width: 15%;
        padding-left: 10px;
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      .bold_box:nth-child(2),
      .bold_box:nth-child(4) {
        width: 35%;
        padding-left: 10px;
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      .bold_box:nth-child(4) {
        border: none;
      }
      .re_box:nth-child(1),
      .re_box:nth-child(3) {
        width: 15%;
        padding-left: 10px;
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      .re_box:nth-child(2),
      .re_box:nth-child(4) {
        width: 35%;
        padding-left: 10px;
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      .re_box:nth-child(4) {
        border: none;
      }
    }
    .skill {
      .bold_box {
        width: 50%;
        padding-left: 20px;
      }
      .bold_box:nth-child(1) {
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      .re_box {
        width: 50%;
        padding-left: 20px;
      }
      .re_box:nth-child(1) {
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      .title {
        display: flex;
        justify-content: flex-end;
      }
    }

    .training {
      .bold_box {
        padding-left: 20px;
      }
      .bold_box:nth-child(1),
      .bold_box:nth-child(2) {
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      .bold_box:nth-child(1),
      .bold_box:nth-child(3) {
        width: 25%;
      }
      .bold_box:nth-child(2) {
        width: 50%;
      }
      .re_box {
        padding-left: 20px;
      }
      .re_box:nth-child(1),
      .re_box:nth-child(2) {
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      .re_box:nth-child(1),
      .re_box:nth-child(3) {
        width: 25%;
      }
      .re_box:nth-child(2) {
        width: 50%;
      }
    }

    .qu {
      .title {
        display: flex;
        justify-content: flex-end;
      }
      .bold_box {
        width: calc(100% / 3);
        padding-left: 20px;
      }
      .bold_box:nth-child(1),
      .bold_box:nth-child(2) {
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      .re_box {
        width: calc(100% / 3);
        padding-left: 20px;
      }
      .re_box:nth-child(1),
      .re_box:nth-child(2) {
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
    }
    .military {
      .bold_box {
        width: 50%;
        padding-left: 20px;
      }
      .bold_box:nth-child(1) {
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      .re_box {
        width: 50%;
        padding-left: 20px;
      }
      .re_box:nth-child(1) {
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
    }
    .address {
      .title {
        display: flex;
        justify-content: flex-end;
        text-align: right;
      }
      .bold_box {
        width: 50%;
        padding-left: 20px;
      }
      .bold_box:nth-child(1) {
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      .re_box {
        width: 50%;
        padding-left: 20px;
      }
      .re_box:nth-child(1) {
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

const Title = ({ children }) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, {
    once: false,
    threshold: 1,
  });
  const style = {
    color: isInView ? "var(--point-light)!important" : "var(--font-color)",
    transition: "0.25s 0.5s",
  };
  return (
    <div className="title" ref={titleRef} style={style}>
      {children}
    </div>
  );
};

const Introduction = () => {
  useEffect(() => {
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
      <div className="scroll_text">
        <ParallaxText baseVelocity={-5}>INTRODUCTION</ParallaxText>
        <ParallaxText baseVelocity={5}>CHOSEONGCHAN</ParallaxText>
      </div>
      <div className="contents_wrap">
        <div className="basic contents">
          <Title>기본정보</Title>

          <div className="detail_wrap" data-aos="fade-left">
            <div className="line">
              <div className="bold_box">이름</div>
              <div className="re_box">조성찬</div>
            </div>

            <div className="line">
              <div className="bold_box">생년월일</div>
              <div className="re_box">1998-09-28</div>
            </div>

            <div className="line">
              <div className="bold_box">휴대폰</div>
              <div className="re_box">010-4213-3712</div>
            </div>

            <div className="line">
              <div className="bold_box">E-mail</div>
              <div className="re_box">choseongchan3712@naver.com</div>
            </div>

            <div className="line">
              <div className="bold_box">주소</div>
              <div className="re_box">서울 송파구 올림픽로32길 57-26</div>
            </div>
          </div>
        </div>

        <div className="contents education">
          <div className="detail_wrap" data-aos="fade-right">
            <div className="line">
              <div className="bold_box">재학기간</div>
              <div className="bold_box">학교명 및 전공</div>
              <div className="bold_box">구분</div>
            </div>
            <div className="line">
              <div className="re_box">2017~2023</div>
              <div className="re_box">
                TsinghuaUniversity <span>(칭화대-북경-중국)</span> / 법학
              </div>
              <div className="re_box">4년제</div>
            </div>
          </div>

          <Title>최종학력</Title>
        </div>

        <div className="act contents">
          <Title>활동사항</Title>
          <div className="detail_wrap" data-aos="fade-left">
            <div className="line">
              <div className="bold_box">기간</div>
              <div className="bold_box">활동 내용</div>
              <div className="bold_box">활동구분</div>
              <div className="bold_box">기관 및 장소</div>
            </div>
            <div className="line">
              <div className="re_box">2022.08~2022.12</div>
              <div className="re_box">변리사사무소 서류분류 및 작성</div>
              <div className="re_box">단기간인턴</div>
              <div className="re_box">중국베이징동국변리사사무소</div>
            </div>
            <div className="line">
              <div className="re_box">2021.08~2021.09</div>
              <div className="re_box">
                S-Core 삼성 SDS 컨설팅<span>(중국지역)</span>
              </div>
              <div className="re_box">단기간인턴</div>
              <div className="re_box">S-Core</div>
            </div>
            <div className="line">
              <div className="re_box">2019.10~2019.11</div>
              <div className="re_box">한컴 번역AI 중국어학습프로그램 참여</div>
              <div className="re_box">단기간인턴</div>
              <div className="re_box">한글과컴퓨터</div>
            </div>
            <div className="line">
              <div className="re_box">2019.08~2019.09</div>
              <div className="re_box">JTI 마케팅 중국어 번역</div>
              <div className="re_box">단기간인턴</div>
              <div className="re_box">JTI</div>
            </div>
            <div className="line">
              <div className="re_box">2018.07~2018.09</div>
              <div className="re_box">칭화대 신입생 서류검토</div>
              <div className="re_box">
                단기간알바<span>(조교)</span>
              </div>
              <div className="re_box">칭화대 유학생사무실</div>
            </div>
            <div className="line">
              <div className="re_box">2018.03~2018.07</div>
              <div className="re_box">
                중국블록체인과학기술법률회사 서류작업
              </div>
              <div className="re_box">기간인턴</div>
              <div className="re_box">중국블록체인과학기술법률회사</div>
            </div>
            <div className="line">
              <div className="re_box">2017.12(1주일)</div>
              <div className="re_box">
                문재인 (전)대통령 방중행사 의전단 통역
              </div>
              <div className="re_box">단기간인턴</div>
              <div className="re_box">주중국대한민국대사관</div>
            </div>
          </div>
        </div>

        <div className="skill contents">
          <div className="detail_wrap" data-aos="fade-right">
            <div className="line">
              <div className="bold_box">보유기술</div>
              <div className="bold_box">수준(상/중/하)</div>
            </div>
            <div className="line">
              <div className="re_box">HTML</div>
              <div className="re_box">상</div>
            </div>
            <div className="line">
              <div className="re_box">CSS</div>
              <div className="re_box">상</div>
            </div>
            <div className="line">
              <div className="re_box">JavaScript</div>
              <div className="re_box">상</div>
            </div>
            <div className="line">
              <div className="re_box">React</div>
              <div className="re_box">상</div>
            </div>
            <div className="line">
              <div className="re_box">TypeScript</div>
              <div className="re_box">상</div>
            </div>
            <div className="line">
              <div className="re_box">git / github</div>
              <div className="re_box">상</div>
            </div>
            <div className="line">
              <div className="re_box">Render</div>
              <div className="re_box">상</div>
            </div>
            <div className="line">
              <div className="re_box">MongoDB</div>
              <div className="re_box">상</div>
            </div>
            <div className="line">
              <div className="re_box">figma</div>
              <div className="re_box">상</div>
            </div>
            <div className="line">
              <div className="re_box">Adobe Illustrator</div>
              <div className="re_box">상</div>
            </div>
            <div className="line">
              <div className="re_box">Adobe Photoshop</div>
              <div className="re_box">상</div>
            </div>
            <div className="line">
              <div className="re_box">Adobe InDesign</div>
              <div className="re_box">중</div>
            </div>
            <div className="line">
              <div className="re_box">Adobe Premiere Pro</div>
              <div className="re_box">중</div>
            </div>
            <div className="line">
              <div className="re_box">Adobe After Effects</div>
              <div className="re_box">중</div>
            </div>
            <div className="line">
              <div className="re_box">Adobe XD</div>
              <div className="re_box">중</div>
            </div>
            <div className="line">
              <div className="re_box">중국어</div>
              <div className="re_box">상</div>
            </div>
          </div>
          <Title>보유기술</Title>
        </div>

        <div className="training contents">
          <Title>교육/연수</Title>
          <div className="detail_wrap" data-aos="fade-left">
            <div className="line">
              <div className="bold_box">기간</div>
              <div className="bold_box">교육내용</div>
              <div className="bold_box">기관</div>
            </div>
            <div className="line">
              <div className="re_box">2024.07.01~2024.12.31</div>
              <div className="re_box">
                UIUX웹퍼블리싱&프론트엔드실무자양성과정
              </div>
              <div className="re_box">SBS아카데미 컴퓨터아트학원</div>
            </div>
            <div className="line">
              <div className="re_box">2024.05.09~2024.06.07</div>
              <div className="re_box">에프터이펙트 심화과정</div>
              <div className="re_box">SBS아카데미 컴퓨터아트학원</div>
            </div>
            <div className="line">
              <div className="re_box">2024.04.09~2024.05.08</div>
              <div className="re_box">에프터이펙트 기초과정</div>
              <div className="re_box">SBS아카데미 컴퓨터아트학원</div>
            </div>
            <div className="line">
              <div className="re_box">2024.04.09~2024.05.08</div>
              <div className="re_box">일러스트</div>
              <div className="re_box">SBS아카데미 컴퓨터아트학원</div>
            </div>
            <div className="line">
              <div className="re_box">2024.04.09~2024.05.08</div>
              <div className="re_box">포토샵</div>
              <div className="re_box">SBS아카데미 컴퓨터아트학원</div>
            </div>
            <div className="line">
              <div className="re_box">2024.03.25~2024.05.22</div>
              <div className="re_box">HTML, CSS, JavaScript</div>
              <div className="re_box">코리아IT아카데미</div>
            </div>
          </div>
        </div>

        <div className="qu contents">
          <div className="detail_wrap" data-aos="fade-right">
            <div className="line">
              <div className="bold_box">취득일</div>
              <div className="bold_box">자격증/면허증</div>
              <div className="bold_box">발행처</div>
            </div>
            <div className="line">
              <div className="re_box">2024.07.03</div>
              <div className="re_box">컴퓨터그래픽스운용기능사</div>
              <div className="re_box">한국산업인력공단</div>
            </div>
            <div className="line">
              <div className="re_box">2024.06.26</div>
              <div className="re_box">웹디자인기능사</div>
              <div className="re_box">한국산업인력공단</div>
            </div>
            <div className="line">
              <div className="re_box">2017.06.03</div>
              <div className="re_box">태권도 1단</div>
              <div className="re_box">국기원</div>
            </div>
            <div className="line">
              <div className="re_box">2017.04.28</div>
              <div className="re_box">운전면허 1종보통</div>
              <div className="re_box">서울특별시경찰청</div>
            </div>
          </div>
          <Title>자격증</Title>
        </div>

        <div className="military contents">
          <Title>병역</Title>
          <div className="detail_wrap" data-aos="fade-left">
            <div className="line">
              <div className="bold_box">복무기간</div>
              <div className="bold_box">군별/계급/병과</div>
            </div>
            <div className="line">
              <div className="re_box">2019.11~2022.08</div>
              <div className="re_box">해군/병장/정보병과(중국어어학병)</div>
            </div>
          </div>
        </div>

        <div className="address contents">
          <div className="detail_wrap" data-aos="fade-right">
            <div className="line">
              <div className="bold_box">깃허브</div>
              <div className="bold_box">블로그</div>
            </div>
            <div className="line">
              <div className="re_box">
                <a
                  href="https://github.com/choseongchan3712"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/choseongchan3712
                </a>
              </div>
              <div className="re_box">
                <a
                  href="https://velog.io/@choseongchan3712/posts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://velog.io/@choseongchan3712/posts
                </a>
              </div>
            </div>
          </div>
          <Title>
            깃허브 및<br />
            블로그
            <br />
            주소
          </Title>
        </div>
      </div>
    </Container>
  );
};

export default Introduction;
