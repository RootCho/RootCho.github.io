// 1부터 45까지의 랜덤숫자 뽑기!
// Math.random() => 0이상 1미만 '소수'
// Math.random()*45 =>0이상 45 미만 '소수'
// Math.floor(Math.random() * 45) => 0이상 45미만 '정수'
// Math.floor(Math.random() * 45) + 1 => 1이상 46미만 '정수' , 즉 1부터 45까지 랜덤 숫자 나옴.
const getRandomNumber = () => {
  return Math.floor(Math.random() * 45) + 1;
};

const start = () => {
  const numberList = []; //numberList라는 배열 선언

  for (let i = 0; i < 6; i++) {
    //0.랜덤숫자 생성
    //1. 중복 체크: numberList에 생성한 숫자가 존재하는지?
    //2-1. 중복이 안 된 숫자면 : 배열에 추가
    //2-2. numberList에 이미 존재하는 숫자면 단계로 돌아가기 (횟수제한이 없는 반복문에서는 while문을 사용한다.)

    //1~45정수
    let randomNumber = getRandomNumber();
    //중복체크
    while (numberList.includes(randomNumber)) {
      randomNumber = getRandomNumber();
    } //while조건문이 true일때 아래 실행.  즉 numberList에 randomNumber가 포함되어있으면 while반복문을 실행(다시 랜덤숫자를 뽑아야하기 때문에)
    //while조건문이 false: numberList안에 같은 randomNumber가 존재하지 않는다는 것이므로 while문 실행 안하고 바로 아래에  numberList.push(randomNumber); 실행

    numberList.push(randomNumber);

    //랜덤 숫자 뽑고 numberList에 넣기 * 6번!
    //numberList = [ 10, 3, 20 ,5 ,6 ,7 ]
  }

  numberList.sort((a, b) => a - b); //오름차순 정렬; [3, 5, 6, 7, 10, 20]

  //$lottoNmberList에
  //위의 numberList 배열 안에 있는 숫자 순서대로 "출력"하기/

  const $lottoNumberList = document.querySelectorAll(".lotto-number"); //$lottoNumberList = [div.lotto-number, div.lotto-number, div.lotto-number,div.lotto-number,div.lotto-number, div.lotto-number]
  for (let i = 0; i < $lottoNumberList.length; i++) {
    $lottoNumberList[i].innerText = numberList[i];
    //numberList[i]값에 따라서 class붙이기

    let colorClass = "";

    if (numberList[i] <= 10) {
      colorClass = "yellow";
    } else if (numberList[i] <= 20) {
      colorClass = "blue";
    } else if (numberList[i] <= 30) {
      colorClass = "red";
    } else if (numberList[i] <= 40) {
      colorClass = "gray";
    } else {
      colorClass = "green";
    }
    $lottoNumberList[i].classList = "lotto-number"; //붙이기 전에 원래 있던 "lotto-number" 클래스만 남도록 . classList의 값을 새로 지정
    $lottoNumberList[i].classList.add(colorClass); //element.classList.add() 메소드를 사용해서 class를 추가.
  }
};
//버튼 누를 때마다 번호 추천해주기
const $bttn = document.querySelector("#bttn");
$bttn.addEventListener("click", start);

// start();
// init()
