import styled from "styled-components";
import { blogData } from "../data/blogData";
import BlogBox from "../components/BlogBox";
import { useScrollTop } from "../lib/useScrollTop";

const Container = styled.div`
  position: relative;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 100px 15% 20px 15%;
  background-color: var(--main-color);
  overflow: hidden;
  @media screen and (max-width: 1850px) {
    padding: 100vh 20px 20px 20px;
  }
  .wrap {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

const Blog = () => {



  useScrollTop();
  return (
    <Container>
      <div className="wrap">
        {blogData.map((data, index) => (
          <BlogBox key={index} url={data.url} text={data.text} />
        ))}
      </div>
    </Container>
  );
};

export default Blog;
