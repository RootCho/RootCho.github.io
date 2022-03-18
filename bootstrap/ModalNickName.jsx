import { useState } from "react";
import styled from "styled-components";

const ModalNickName = ({ onClose, ChangeNickName, nickName }) => {
  const [text, setText] = useState(nickName);
  const handleSave = () => {
    ChangeNickName(text);
    onClose();
  };
  return (
    <>
      <BackDrop onClick={onClose} />
      <Container>
        <header>
          <h1>닉네임바꾸기</h1>
          <BtnX onClick={onClose}></BtnX>
        </header>
        <main>
          <p>닉네임을 입력하세요</p>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </main>
        <footer>
          <BtnClose onClick={onClose}>Close</BtnClose>
          <BtnSave onClick={handleSave}>Save</BtnSave>
        </footer>
      </Container>
    </>
  );
};
const BackDrop = styled.div`
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

const BtnX = styled.button`
  background-image: url("https://cdn3.iconfinder.com/data/icons/minimalisticons/28/Close-256.png");
  background-size: contain;
  background-color: transparent;
  border: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
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

export default ModalNickName;
