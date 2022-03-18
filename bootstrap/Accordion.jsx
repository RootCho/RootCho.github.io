import { useState } from "react";
import styled, { css } from "styled-components";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    const nextIndex = activeIndex === index ? -1 : index;
    setActiveIndex(nextIndex);
  };

  return (
    <List>
      {data.map(({ id, title, content }, index) => (
        <Item key={id} active={activeIndex === index}>
          <Header onClick={() => handleClick(index)}>
            {title}
            <BtnArrow />
          </Header>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};
//activeIndex: 몇번째 data가 펼쳐져 있는지에 대한 변수 useState(0)으로 선언
//Item의 active: activeIndex와 map함수의 index가 같은지 여부
//header를 누르면 activeIndex가 map함수의 index로 바뀜
//열려있는 거 닫기

const List = styled.ul`
  border: 1px solid #ddd;
  list-style: none;
  padding: 0;
  margin: 20px auto;
  max-width: 900px;
  border-radius: 5px;
`;
const Item = styled.li`
  & + & {
    border-top: 1px solid #ddd;
  }
  ${({ active }) =>
    active &&
    css`
      ${Header} {
        background: #e7f1ff;
        color: #0c63e4;
      }
      ${BtnArrow} {
        transform: rotate(-180deg);
      }
      ${Body} {
        display: block;
      }
    `}
`;
const Header = styled.div`
  font-size: 16px;
  padding: 13px;
  display: flex;
  justify-content: space-between;

  cursor: pointer;
`;
const BtnArrow = styled.button`
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  background-color: transparent;
  border: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.5s;
`;
const Body = styled.div`
  padding: 13px;
  line-height: 1.5;
  border-top: 1px solid #ddd;
  display: none;
`;

export default Accordion;
