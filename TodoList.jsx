import { useRef, useState } from "react";
import styled from "styled-components";

const TodoList = () => {
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);
  const nextId = useRef(1);

  const addList = () => {
    const newLists = [
      ...lists,
      { id: nextId.current, text: text, isDone: false },
    ];
    setLists(newLists);
    nextId.current = nextId.current + 1;
    console.log(newLists);
    setText("");
  };

  const removeList = (id) => {
    const newList = lists.filter((list) => list.id !== id);
    setLists(newList);
  };

  const editList = (id) => {
    let newText = prompt("수정할 내용을 입력하세요");
    const newLists = lists.map(
      (list) => (list.id === id ? { ...list, text: newText } : list) //list 내용은 다 똑같은데, 그 중에서 text:내용만 바꾸겠다.
    );
    setLists(newLists);
  };

  const handleChecked = (id, checked) => {
    const newLists = lists.map(
      (list) => (list.id === id ? { ...list, isDone: checked } : list) //체크박스는 onChange를 통해 체크 여부를 체크 클릭 시마다 boolean 값으로 알 수 있다.
    );
    setLists(newLists);
  };

  const handleCheckAll = (checked) => {
    const newLists = lists.map((list) => ({ ...list, isDone: checked })); //매개변수 활용
    setLists(newLists);
  };

  const toggleCheckAll = () => {
    const newLists = lists.map((list) => ({ ...list, isDone: !list.isDone }));
    setLists(newLists);
  };

  return (
    <Container>
      <Title>일정관리🕓</Title>
      <form
        onSubmit={(e) => {
          //아래 두 함수를 handleSubmit 과 같은 하나의 함수로 합쳐서 사용가능
          e.preventDefault();
          addList();
        }}
      >
        <InputWrapper>
          <BtnAll
            type="button"
            onClick={() => handleCheckAll(true)}
            border={true}
          >
            전체체크
          </BtnAll>
          <BtnAll
            type="button"
            onClick={() => handleCheckAll(false)}
            border={true}
          >
            전체체크해제
          </BtnAll>
          <BtnAll type="button" onClick={toggleCheckAll} border={true}>
            전체반전
          </BtnAll>
          <BtnAll type="button" onClick={() => setLists([])}>
            전체삭제
          </BtnAll>
          <InputText
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <BtnSubmit>+</BtnSubmit>
        </InputWrapper>
      </form>
      <List>
        {lists.map(({ id, text, isDone }) => (
          <Item key={id} isDone={isDone}>
            <label>
              <Checkbox
                type="checkbox"
                checked={isDone}
                onChange={(e) => handleChecked(id, e.target.checked)}
              />
              <Content>{text}</Content>
            </label>
            <BtnWrapper>
              <Button color="green" onClick={() => editList(id)}>
                수정
              </Button>
              <Button color="red" onClick={() => removeList(id)}>
                삭제
              </Button>
            </BtnWrapper>
          </Item>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  background: white;
  border: 1px solid #eee;
  margin: 50px auto;

  label {
    width: 100%;
  }
`;
const Title = styled.div`
  padding: 15px;
  text-align: center;
  background: #0288d1;
  color: white;
  font-size: 26px;
`;
const InputWrapper = styled.div`
  display: flex;
`;
const InputText = styled.input`
  flex: 1;
  border: none;
  background: #000000c1;
  height: 30px;
  color: white;
  padding: 0 10px;
  outline: none;
`;

const BtnAll = styled.button`
  background: #0289d16c;
  border: none;
  border-right: ${(props) => props.border && "1px solid #000000c1"};
  cursor: pointer;

  &:hover {
    background: #0289d12f;
  }
`;
const BtnSubmit = styled.button`
  background: #657a85dd;
  border: none;
  width: 50px;
  font-size: 20px;
  color: white;
  cursor: pointer;

  &:hover {
    background: #657a85a4;
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Content = styled.span`
  vertical-align: top;
`;
const Item = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${(props) => (props.isDone ? "#ddd" : "#f7f4f45c")};
  padding: 15px 10px;

  ${Content} {
    text-decoration: ${(props) => props.isDone && "line-through"};
  }

  & + & {
    border-top: 1px solid #eee;
  }
`;
const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 8px;
  cursor: pointer;
`;

const BtnWrapper = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 60px;
  padding: 5px;
  border: none;
  border-radius: 8px;
  color: white;
  background: ${(props) => props.color || "black"};
  margin-right: 5px;
  cursor: pointer;
`;

export default TodoList;
