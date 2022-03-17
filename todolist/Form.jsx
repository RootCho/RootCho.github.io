const Form = () => {
  return (
    <>
      <form
        onSubmit={(e) => {
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
    </>
  );
};
export default Form;
