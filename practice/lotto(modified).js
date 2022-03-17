const getRandomNumber = () => {
  return Math.floor(Math.random() * 45) + 1;
};

const start = () => {
  const numberList = [];

  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber();

    while (numberList.includes(randomNumber)) {
      randomNumber = getRandomNumber();
    }
    numberList.push(randomNumber);
  }

  numberList.sort((a, b) => a - b);

  const $lottoNumberList = document.querySelectorAll(".lotto-number");
  for (let i = 0; i < $lottoNumberList.length; i++) {
    setTimeout(() => {
      $lottoNumberList[i].innerText = numberList[i];

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
      $lottoNumberList[i].classList = "lotto-number";
      $lottoNumberList[i].classList.add(colorClass);
    }, 1000 * i + 1000);
  }
};



const recommend2 = () => {
  //정렬, 중복없는 배열 만들기

  const $lottoNumberList = document.querySelectorAll(".lotto-number");
  const printRandomNumber = (i)=>{
   const intervalId = setInterval(() => {
    const number = getRandomNumber();
    printBall($lottoNumberList[i],number);},100);
    
  
    
    
    for (let i = 0; i < $lottoNumberList.length; i++) {


      
 $lottoNumberList[i].innerText = number;
 const printBall = (target, number) =>{
  target.innerText =number;
  //numberList[i]값에 따라서 class 붙이기
      let colorClass = "";

      if (number <= 10) {
        colorClass = "yellow";
      } else if (number <= 20) {
        colorClass = "blue";
      } else if (number <= 30) {
        colorClass = "red";
      } else if (number <= 40) {
        colorClass = "gray";
      } else {
        colorClass = "green";
      }
     target.classList="lotto-number";
     target.classList.add(colorClass);
    };
  }
  }, 100);
};

//1. 랜덤숫자 만들어서
//2.6개의 공에 숫자 출력, 색깔클래스 추가
//3. 0.1초 마다

const $bttn = document.querySelector("#bttn");
$bttn.addEventListener("click", printRandomNumber);
