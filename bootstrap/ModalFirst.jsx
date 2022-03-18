import { useEffect, useState } from "react";
import styled from "styled-components";

const ModalFirst = ({ onClose, onChange, name }) => {
  //부모로부터 onClose라는 함수 props로 받아오기
  const [text, setText] = useState(name);

  const handleSave = () => {
    onChange(text);
    onClose();
  };
  useEffect(() => {
    document.body.style.overflow = "hidden"; //modal창 켜졌을 때 스크롤 되지 않게 하기
    return () => {
      document.body.style.overflow = ""; //modal창 사라지면 위 기능 제거하기
    };
  }, []);

  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <header>
          <h1>이름 바꾸기</h1>
          <button className="close" onClick={onClose}></button>
        </header>
        <main>
          <p>Woohoo, you're reading this text in a modal!</p>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </main>
        <footer>
          <BtnClose onClick={onClose}>Close</BtnClose>
          <BtnSave onClick={handleSave}>Save Changes</BtnSave>
        </footer>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 500px;
  border-radius: 8px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  h1 {
    margin: 0;
  }

  .close {
    background-image: url("https://cdn3.iconfinder.com/data/icons/minimalisticons/28/Close-256.png");
    background-size: contain;
    background-color: transparent;
    border: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  main {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 20px;

    p {
      margin: 0;
    }
  }

  footer {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
  }
`;

const Btn = styled.button`
  color: #fff;
  padding: 0.7rem;
  border-radius: 0.3rem;
  border: none;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
`;

const BtnClose = styled(Btn)`
  background: gray;
  margin-right: 8px;
`;
const BtnSave = styled(Btn)`
  background: #0d6efd;
`;

export default ModalFirst;
