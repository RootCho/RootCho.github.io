import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [active, setActive] = useState(false);
  const buttonEl = useRef(null);

  useEffect(() => {
    //심화 body를 클릭했을때 닫히는 기능 추가
    const onClick = (e) => {
      if (e.target !== buttonEl.current) setActive(false);
    };

    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);
  return (
    <Wrapper>
      <Button onClick={() => setActive(!active)} ref={buttonEl}>
        Dropdown Button
      </Button>
      {active && (
        <List>
          <Item> Action </Item>
          <Item> Another Action</Item>
          <Item> Something else</Item>
        </List>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-left: 50px;
`;
const Button = styled.button`
  color: #fff;
  background-color: #198754;
  border: 1px solid #198754;
  padding: 0.8rem;
  border-radius: 0.3rem;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;

  &:focus {
    box-shadow: 0 0 0 0.25rem rgb(60 153 110 / 50%);
  }

  &::after {
    content: "▼";
    margin-left: 5px;
  }
`;
const List = styled.ul`
  position: absolute;
  top: 2rem;
  min-width: 167px;
  list-style: none;
  padding: 0.4rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  /* display: none; */
  ${(props) => props.active && "display: block"};
`;
const Item = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;
export default Dropdown;
