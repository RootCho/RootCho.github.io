import { useState } from "react";
import styled from "styled-components";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickPrev = () => {
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const handleClickNext = () => {
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  return (
    <Wrapper>
      <List>
        {data.map(({ id, image }, index) => (
          <Image key={id} src={image} active={activeIndex === index} />
        ))}
      </List>
      <BtnPrev onClick={handleClickPrev}></BtnPrev>
      <BtnNext onClick={handleClickNext}></BtnNext>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem auto;
  position: relative;
  width: 800px;
  height: 500px;
`;
const List = styled.div``;
const Image = styled.img`
  width: 800px;
  height: 500px;
  position: absolute;
  top: 0;
  bottom: 0;
  transition: opacity 0.5s;
  ${(props) => (props.active ? "opacity: 1" : "opacity:0")}
`;
const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
`;
const BtnPrev = styled(Btn)`
  //Btn의 속성을 상속
  left: 30px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E");
`;
const BtnNext = styled(Btn)`
  right: 30px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
`;

export default Carousel;
