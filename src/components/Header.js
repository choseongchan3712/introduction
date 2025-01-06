import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 990;
  top: 0;
  left: 0;
  height: 70px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--box-color);
  transition: 1s ease-in-out 1s;
  .logo {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    a {
      font-size: 24px;
      font-weight: 900;
      color: var(--point-light);
    }
  }
  .menu_wrap {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      color: var(--font-color);
      font-size: 16px;
      font-weight: 900;
      transition: 0.25s ease-in-out;
      &:hover {
        color: var(--point-light) !important;
      }
    }
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <Container
      style={{
        opacity: location.pathname === "/" ? "0" : "100",
        zIndex: location.pathname === "/" ? "-999" : "990",
      }}
    >
      <div className="logo">
        <Link to={"/"}>INTRODUCTION</Link>
      </div>
      <div className="menu_wrap">
        <div className="menu">
          <Link
            to={"/"}
            style={{
              color:
                location.pathname === "/"
                  ? "var(--point-light)"
                  : "var(--font-color)",
            }}
          >
            홈
          </Link>
        </div>
        <div className="menu">
          <Link
            to={"/work"}
            style={{
              color:
                location.pathname === "/work"
                  ? "var(--point-light)"
                  : "var(--font-color)",
            }}
          >
            작업물
          </Link>
        </div>
        <div className="menu">
          <Link
            to={"/introduction"}
            style={{
              color:
                location.pathname === "/introduction"
                  ? "var(--point-light)"
                  : "var(--font-color)",
            }}
          >
            자기소개
          </Link>
        </div>
        <div className="menu">
          <Link
            to={"/blog"}
            style={{
              color:
                location.pathname === "/blog"
                  ? "var(--point-light)"
                  : "var(--font-color)",
            }}
          >
            블로그
          </Link>
        </div>
        <div className="menu">
          <Link
            to={"/study"}
            style={{
              color:
                location.pathname === "/study"
                  ? "var(--point-light)"
                  : "var(--font-color)",
            }}
          >
            공부기록
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
