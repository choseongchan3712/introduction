export const workList = {
  intranet: {
    img: "/인트라넷.png",
    url: "https://choseongchan3712.github.io/portfolio-justice-bridge-intranet/",
    title: "justice-bridge-intranet",
    purpose: [
      "1. 본 포트폴리오는 하나의 가상 로펌을 대상으로 사내 인트라넷을 구축한 포트폴리오입니다.",
      "2. 하나의 프로젝트 안에 여러 가지 기능 및 여러 API를 연결하는 학습 목적을 자기고 시작하게 되었습니다.",
    ],
    use: [
      "1. 서버 연결 없이 간단하게 로그인, 회원가입, 비밀번호 찾기 UI 구축을 완료했습니다.",
      "2. 실시간 위치 기반으로, 지역 날씨 예보를 확인할 수 있습니다.",
      "3. 당일 대략 전 세계의 환율 정보를 확인할 수 있습니다.",
      "4. 당일 주식 주가를 확인할 수 있습니다.",
      "5. 달력 기능이 있습니다.",
      "6. 계산기 기능이 있습니다.",
      "7. 문서 작성 기능이 있습니다.",
      "8. 채팅 기능은 UI만 구성되어 있습니다.",
      "7. 법령 정보 제공 기능이 있습니다.",
      "8. 테마는 일반, 다크, 엣지, 몽환모드로 총 4가지가 있으며, 엣지와 몽환 모드에서는 3D가 적용됩니다.",
    ],
    skill: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "Three.js",
      "Render",
      "Git",
      "GitHub",
      "figma",
    ],
    feel: [
      "1. 처음으로 Three.js와 기타 3D 관련 라이브러리를 사용한 프로젝트인데, 익숙해지는 데 시간이 꽤 걸렸다. 아직도 완벽히 이해 안 가는 부분이 있어서 지속적으로 학습이 필요하다.",
      "2. 정말 많은 라이브러리와 플러그인을 함께 사용하다 보니, 타입의 문제와 상호 충돌의 문제가 많이 발생했다. 이러한 문제를 해결해 보는 좋은 경험이 되었다.",
    ],
    difficult: [
      "1. 법령 API는 클라이언트 페이지에서 곧바로 호출이 불가하여 프롭시 서버를 구축할 필요가 있었다. 비록 처음은 아니지만, express와 Render를 사용하여 서버를 구축하는데 아직 많이 서투른 부분이 존재했다. 이제는 express 말고도 더 좋은 백앤드 언어로 서버를 구축해 볼 필요성을 많이 느꼈다.",
    ],
    tip: [
      "1. 마우스 관련 유용한 라이브러리: react-animated-cursor",
      "2. 3D관련 유용한 라이브러리: fiber, drei",
    ],
    github:
      "https://github.com/choseongchan3712/portfolio-justice-bridge-intranet",
    cons: "/인트라넷구조.png",
  },
  login: {
    img: "/로그인.png",
    url: "https://choseongchan3712.github.io/portfolio-login-project/",
    title: "로그인 프로젝트",
    purpose: [
      "1. 본 프로젝트는 로그인과 회원가입을 구현한 프로젝트입니다.",
      "2. 본 프로젝트는 프론트엔드, 서버, DB의 연결 경험을 위하여 시작하였습니다.",
    ],
    use: [
      "1. 회원가입을 하면 서버를 통하여 DB에 회원아이디와 비밀번호가 저장됩니다.(비밀번호는 암호화되어서 저장됩니다).",
      "2. 저장된 아이디와 비밀번호로 로그인하면 서버를 통하여 DB에서 정보를 확인하고 문제가 없으면 로그인이 성공합니다.",
    ],
    skill: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Render",
      "Git",
      "GitHub",
      "figma",
    ],
    feel: [
      "1. 처음으로 미니 서버를 구축해 보았는데, 사실 백엔드를 크게 건든다는 느낌보다는 프론트엔드 개발자로서 백엔드 서버가 대략 어떻게 돌아가는지를 이해한다는 목적이 가장 컸다.",
      "2. 서버를 통해서 DB에 내용을 저장하고 그 내용을 다시 서버를 통해서 받아오는 과정을 구축할 때, 확실히 눈에 보이는 무언가를 구축하는 게 아니다 보니까, 많이 답답했다.",
      "3. DB 구축은 MongoDB를 활용했는데, 생각보다 어렵지 않았다.",
      "4. 서버 배포는 Render를 통해서 했는데, 한 번에 배포 성공을 바라지는 않았지만, 한 번에 성공하여 좋은 경험이 될 수 있었다.",
    ],
    difficult: [
      "1. 처음으로 Express를 통해서 미니 서버를 구축했는데, 비록 큰 프로젝트는 아니지만, 독학으로 하는 과정이 많이 어려웠다. 해결 방법: 열심히 구글링하여 하나하나 차근차근 공부했다. 그래도 아직 완벽하게 이해하지는 못한 것 같아 지속적으로 학습이 필요하다.",
      "2. MongoDB에 데이터베이스를 처음 만들 때 계속 잘되지 않았다. 그 이유는 DB의 개념을 완전히 파악하고 있지 못했고, 프론트엔드적 사고로 계속 접근하여 그랬던 거 같다. 해결 방법: 무한 구글링으로 DB의 개념에 관해서 공부하고, MongoDB 사용 방법도 학습하여 해결하였다.",
    ],
    tip: [
      "1. 유용한 NoSQL 구축 도구: MongoDB",
      "2. 미니 서버 구축할 때 사용하기 좋은 라이브러리: Express",
      "3. 서버 배포 도구: Render",
    ],
    github: "https://github.com/choseongchan3712/portfolio-login-project",
    cons: "/로그인구조.png",
  },
  calculator: {
    img: "/계산기.png",
    url: "https://choseongchan3712.github.io/portfolio-calculate-app/",
    title: "올인원 계산기",
    purpose: [
      "광범위한 상황에 맞게, 혹은 많은 사무 환경에서 사용할 수 있는 다목적 계산기를 개발하여, 한곳에서 여러 계산 상황을 처리할 수 있는 편리함을 위해 프로젝트를 완료함.",
    ],
    use: [
      "1. 테마: 사용할 수 있는 계산기 태마는: 공학용 계산기, 환율 계산기, 날짜계산기, 임금 계산기가 있다.",
      "2. 공학 계산기: 타 공학 계산기와 동일(사칙연산 이외의 대부분 계산이 가능함.",
      "3. 환율 계산기: 한국, 미국, 일본, 중국, 유로 화폐 간의 환율을 계산할 수 있습니다.",
      "4. 날짜 계산기: 날짜 계산기는 일(日) 단위, 주(周) 단위, 월(月) 단위로 날짜 계산과, 디데이 카운트 기능이 있으며, 기능마다 기준일을 정하여 '오늘' 기준 며칠째 혹은 며칠 전이라는 정보를 알 수 있으며, 두 번째 기준일을 정하여 첫 번째 기준일과의 날짜 거리를 계산 가능하고, 첫 번째 기준일 기준으로 며칠 '전' 혹은 '후'인 날짜를 받아올 수 있습니다.",
      "5. 임금 계산기: 임금 계산기는 시급, 월급, 주급, 연봉 중 하나를 선택하여 입력하면, 일 년 동안의 실수령액이 계산되어 출 출력할 수 있다.",
    ],
    skill: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Git",
      "GitHub",
      "figma",
    ],
    feel: [
      "1. 처음으로 타입스크립트로 하나의 프로젝트를 완성했는데, 계속해서 에러가 났다. 가장 힘들었던 점은 내가 생각지도 못한 타입이 정말 많았고, 타입을 지정하는 방법도 생각보다 많았다. 계속해서 타입스크립트에 관한 공부가 필요하다.",
      "2. 이번 프로젝트가 여러 컴포넌트가 서로 많은 값을 공유해야 하는 프로젝트였는데, 프롭스의 종류가 많아지고, 여러 번 이동하다보니 혼란스러운 상황이 많이 생겼다. 프롭스를 어떻게 더 효율적으로 사용할지 공부가 더 필요하다.",
      "3. 괜찮은 무료 API를 찾는 게 너무 힘들었음. 이제는 백엔드 서버 구축과 DB 구축을 공부해야 할 필요성을 느낌.",
    ],
    difficult: [
      "1. 하나의 값을 여러 번 프롭스로 컴포넌트 사이에서 이동을 시키는 게 너무 비효율적이고, 복잡했음. 해결 방법: useContext라는 hook을 공부하여 공유해야 하는 값을 전역에서 사용할 수 있는 값으로 만듦.",
      "2. 날짜계산기를 만들 때 시간 간 의 계산이 너무 복잡했음. 해결 방법: Moment.js라는 라이브러리를 검색해서 더 편리하게 시간을 계산함.",
    ],
    tip: [
      "1. 유용한 환율 정보 API: open exchange rates",
      "2. 시간 계산에 유용한 라이브러리: Moment.js",
      "3. 수학적 계산을 도와주는 라이브러리: math.js",
    ],
    guthub: "https://github.com/choseongchan3712/portfolio-calculate-app",
    cons: "/계산기구조.png",
  },
  document: {
    img: "/문서.png",
    url: "https://choseongchan3712.github.io/portfolio-document-writing-app/",
    title: "로폼(law-form)",
    purpose: [
      "본 프로젝트는 전문 법조인이 아닌 일반인들은 대부분 법률 문서 작성을 어려워한다는 점에서 출발했습니다. 본 프로젝트는 법률 문서 작성이 필요한 일반 사용자들에게 전문적이고 신뢰할 수 있는 문서 작성 서비스를 제공하는 것이 주된 목적입니다.",
    ],
    use: [
      "1. 필수 사항인 정보만 입력하면 알아서 법률문서가 작성되어 다운로드 받을 수 있습니다.",
      "2. 채권/채무, 민사소송, 형사소송, 행정소송 관련 문서를 작성 할 수 있습니다.",
      "3. 채권/채무 부분에서는: 금전차용증서, 포기각서, 독촉장, 각서 관련문서를 작성할 수 있습니다.",
      "4. 민사소송 부분에서는: 소장, 관할합의서, 소 취하서, 소 일부 취하서, 소 취하에 대한 이의신청서 관련 문서를 작성할 수 있습니다.",
      "5. 형사소송 부분에서는: 고소장, 고소 취하서 관련 문서를 작성할 수 있습니다.",
      "6. 행정소송 부분에서는: 소장, 행정심판 청구 관련 문서를 작성할 수 있습니다.",
    ],
    skill: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Git",
      "GitHub",
      "figma",
    ],
    feel: [
      "처음으로 docx.js 라이브러리를 사용해 봤는데 학습하는 데 시간이 오래 걸렸다. 많은 유용한 라이브러리를 사용해 보면서, 새로운 라이브러리에 대해서 학습 속도가 향상될 필요가 있다.",
    ],
    difficult: [
      "1. Dosx.js 라이브러리를 사용하면서 새로운 Document를 만드는 게 처음에는 어려웠다. 해결 방법: Docx.js 공식사이트를 방문하여 차근차근 학습하였다.",
      "2. Dosx.js 라이브러리를 사용하면서 새로운 Document를 만들고서 받아오는 과정에서 계속 에러가 낫는 데 문제를 파악하지 못했다. 해결 방법: file-saver 라이브러리를 사용하여 해결하였다.",
    ],
    tip: [
      "1. 워드 파일 작성 라이브러리: Doxc.js",
      "2. Doxc.js로 작성한 워드 파일을 쉽게 내려받을 수 있게 도와주는 라이브러리: file-saver",
    ],
    guthub:
      "https://github.com/choseongchan3712/portfolio-document-writing-app",
    cons: "/문서구조.png",
  },
  todo: {
    img: "/투두.png",
    url: "https://choseongchan3712.github.io/portfolio-to-do-list-app/",
    title: "할일목록",
    purpose: [
      "바쁜 현대 사회에서, 현대인들이 딱 해야 할 일과 시간대를 저장해두고, 바로바로 확인할 수 있게 만든 프로젝트.",
    ],
    use: [
      "1. 할 일의 내용을 적고, 한 번만 하는 일인지, 아니면 매일 해야 하는 일인지 선택할 수 있다.",
      "2. 한 번만 해야 할 일은 시각적으로 색상이 랜덤하게 설정되고, 매일 할 일은 회색으로 지정된다.",
      "3. 다 완료되면 체크하면, 시각적으로 표현된다.",
      "4. 각 해야 할 인을 드롭하여 순서를 자유롭게 바꿀 수 있다.",
    ],
    skill: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Git",
      "GitHub",
      "figma",
    ],
    feel: [
      "1. 타입스크립트를 많이 사용해 봤다고 생각했지만, 아직 모르는 타입들이 많고, 타입을 지정해 주는 방식도 정말 많다.",
      "2. 새로 접하는 UI 컴포넌트 라이브러리는 익숙해지는 시간이 어느 정도 필요한데, 새로운 걸 두 개 같이 쓰니까 너무 복잡하다.",
      "3. MUI 컴포넌트 라이브러리는 타 UI 라이브러리들 보다, styled-components를 같이 사용할 수 있다는 점이 매우 편리했다.",
    ],
    difficult: [
      "MUI 컴포넌트 라이브러리와 Motion 라이브러리를 중첩해서 사용하는 것이 매우 복잡했다. 해결 방법: 각 라이브러리의 공식사이트를 검색하여 사용법을 학습하여 사용함.",
    ],
    tip: ["유용한 UI라이브러리: MUI", "유용한 모션 라이브러리: Motion"],
    guthub: "https://github.com/choseongchan3712/portfolio-to-do-list-app",
    cons: "/투두구조.png",
  },
  law: {
    img: "/법률.png",
    url: "https://choseongchan3712.github.io/portfolio-legal-search-app/",
    title: "법령DB",
    purpose: [
      '현재 대한민국에서 어떠한 명확한 법령, 판례 또는 해석례를 찾아볼 방법은 많이 제한적이다. 유일하게 법령 정보들이 모여있는 장소는 "국가법령정보센터" 사이트이지만, 이마저도 가독성이 매우 낮다. 본 앱은 이러한 불편 사항을 완화하고자 시작되었다.',
    ],
    use: [
      "1. 법령정보: 본 앱에는 총 4가지 메뉴가 있는데, 그 첫 번째가 바로 법령정보이다. 법령 정보에는 가독성이 떨어지게 모든 법이 있지 않고, 사람들이 많이 찾아보는 법률들로 구성이 되어있으며, 각 법률을 클릭하면 그 법률의 각 조항을 볼 수 있다.",
      "2. 판례 정보: 본 앱의 두 번째 메뉴는 판례 정보이다. 판례 정보에는, 모든 법원의 판례가 담겨 있는 게 아니라, 사실상 가장 많이 찾게 되는 대법원 판례들이 순서대로 나열되어 있다.",
      "3. 해석례: 본 앱의 세 번째 메뉴는 해석례이다. 모든 해석례가 나열이 되어있으며, 안건 번호도 같이 나열되어 있다.",
      "4. 조회하기: 본 앱의 마지막 메뉴는 조회이다. 검색창에 본인이 원하는 키워드를 입력하면 그와 관련 있는 법률, 판례, 해석례가 같이 나온다.",
    ],
    skill: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Git",
      "GitHub",
      "figma",
    ],
    feel: [
      "1. 이번 프로젝트에서는 디자인에 시간을 많이 두기보다는 로직 구성에 시간을 많이 투자해야 했다. 그래서 디자인 부분은 MUI(React UI tools)를 사용하여 컴포넌트를 많이 구성하였는데, 생각보다 성능이 매우 강력했다. 여러 가지 툴들을 활용해서 앱을 개발하는 것도 개발자로서 하나의 능력인거 같다.",
      "2. 대부분 API는 프론트엔드 개발자의 입맛대로 구성되어 있지 않다. 많은 API를 활용한다면, 그것들을 내 입맛대로 활용할 수 있는 능력이 많이 필요한 것 같다.",
    ],
    difficult: [
      "1. 이번 프로젝트는 국가 법령정보 공공 API를 사용해서 만들었다. 사용한 API가 등록부터 매우 불 친절했으며, 반환받는 값도 도저히 바로 사용할 수 없을 정도로 매우 '날것'이었다. 해결 방법: 이를 해결하기 위해서 받아온 값들을 내가 사용할 수 있게 새로운 배열을 구축해야 했다. 그 과정에서 정말 많은 함수와 정규식을 검색해 냈고, 기록을 해두었다. (test, match, replace, trim)",
      "2. 아직 디자인적 부분에서는 많이 부족한것 같다. 뭔가 만들어진 디자인 과정을 보고 있으면, 눈에 잘 안 들어왔다. 해결 방법: 리액트에서는 사용할 수 있는 디자인 툴이 생각보다 많았다. 이번에는 MUI 디자인 툴을 활용해서 만들었다.",
    ],
    tip: [
      "법령 API: 국가법령정보 공동활용",
      "유용한 리액트 디자인 툴: MUI",
      "ip 찾기: https://law-server-fwx3.onrender.com/ip",
    ],
    guthub: "https://github.com/choseongchan3712/portfolio-legal-search-app",
    cons: "/법률구조.png",
  },
};
