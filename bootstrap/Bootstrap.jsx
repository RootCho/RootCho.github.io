import styled from "styled-components";
import Accordion from "./Accordion";
import Accordion2 from "./Accordion2";
import { accordionData, carouselData } from "../../datas/bootstrap";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";
import ModalFirst from "./ModalFirst";
import { useState } from "react";
import ModalNickName from "./ModalNickName";

const Bootstrap = () => {
  const [showModalFirst, setShowModalFirst] = useState(false);
  const [showModalNickName, setShowModalNickName] = useState(false);
  const [name, setName] = useState("조혜진");
  const [nickName, setNickname] = useState("RootCho");

  return (
    <>
      <Accordion data={accordionData} />
      <Accordion2 data={accordionData} />
      <h3>
        이름: {name}
        <Button onClick={() => setShowModalFirst(true)}>이름 바꾸기</Button>
      </h3>
      <h3>
        닉네임: {nickName}
        <Button onClick={() => setShowModalNickName(true)}>
          닉네임 바꾸기
        </Button>
      </h3>

      <Dropdown />
      <Carousel data={carouselData} />
      <Carousel2 data={carouselData} />
      <Carousel3 data={carouselData}/>

      {showModalFirst && (
        <ModalFirst
          onClose={() => setShowModalFirst(false)}
          onChange={(text) => setName(text)}
          name={name}
        />
      )}
      {showModalNickName && (
        <ModalNickName
          onClose={() => setShowModalNickName(false)}
          ChangeNickName={(text) => setNickname(text)}
          nickName={nickName}
        />
      )}
    </>
  );
};

const Button = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  padding: 0.5rem;
  border-radius: 0.3rem;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  margin-left: 10px;
`;
export default Bootstrap;
