import { useInView } from "motion/react";
import { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 50px;
  padding-bottom: 20px;
  font-weight: 900;
  a {
    &:hover {
      color: var(--point-light);
    }
  }
`;

const MenuList = ({ children, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Container
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: `1.5s ease-in-out ${delay}`,
      }}
    >
      {children}
    </Container>
  );
};

export default MenuList;
