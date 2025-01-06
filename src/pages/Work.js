import PageWrap from "../components/PageWrap";
import WorkThree from "../components/WorkThree";

const images = [
  // Front
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url: "/인트라넷.png",
    text:"인트라넷 포트폴리오 보기",
    link:"intranet"
  },
  // Back
  // { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: "/문서.png", text:"로폼 미니포트폴리오 보기"},
  // { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
  // Left
  // {
  //   position: [-1.75, 0, 0.25],
  //   rotation: [0, Math.PI / 2.5, 0],
  //   url: "/계산기.png",
  // },
  {
    position: [-2, 0, 1],
    rotation: [0, Math.PI / 2.5, 0],
    url: "/로그인.png",
    text:"로그인 미니프로젝트 보기",
    link:"intranet"
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: "/계산기.png",
    text:"올인원계산기 미니포트폴리오 보기",
    link:"intranet"
  },
  // Right
  {
    position: [2, 0, -0.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: "/문서.png",
    text:"로폼 미니포트폴리오 보기",
    link:"intranet"
  },
  {
    position: [2, 0, 1],
    rotation: [0, -Math.PI / 2.5, 0],
    url: "/투두.png",
    text:"할일목록 미니포트폴리오 보기",
    link:"intranet"
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: "/법률.png",
    text:"법령DB 미니포트폴리오 보기",
    link:"intranet"
  },
];

const Work = () => {
  return (
    <PageWrap>
      <WorkThree images={images} />
    </PageWrap>
  );
};

export default Work;
