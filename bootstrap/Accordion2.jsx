import { useState } from "react";
import styled, { css } from "styled-components";

const Accordion2 = ({ data }) => {
  const _data = data.map((e) => ({ ...e, active: false }));
  const [newData, setNewData] = useState(_data);

  const handleClick = (id) => {
    const _newData = newData.map((e) =>
      id === e.id ? { ...e, active: !e.active } : e
    );
    setNewData(_newData);
  };

  return (
    <>
      <List>
        {newData.map(({ id, title, content, active }) => (
          <Item key={id} active={active}>
            <Header onClick={() => handleClick(id)}>
              {title}
              <BtnArrow />
            </Header>
            <Body>{content}</Body>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Accordion2;

const List = styled.ul`
  max-width: 800px;
  list-style: none;
  padding: 0;
  margin: 20px auto;
  border: 1px solid #ddd;
`;
const Item = styled.li`
  & + & {
    border-top: 1px solid #ddd;
  }
  ${(props) =>
    props.active &&
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
  padding: 13px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
const BtnArrow = styled.button`
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.5s;
`;
const Body = styled.div`
  padding: 13px;
  border-top: 1px solid #ddd;
  display: none;
`;
