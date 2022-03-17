import styled from "styled-components";

const TodoLists = () => {
  return (
    <Container>
      <title>일정관리🕓</title>
      <Form />
      <ListItem />
    </Container>
  );
};

export default TodoLists;

const Container = styled.div`
  width: 600px;
  background: white;
  border: 1px solid #eee;
  margin: 50px auto;
`;
