let progress = document.getElementById("progress1");
let num = progress.textContent.substring(0, 1);
let main = document.getElementsByClassName("main").item(0);

let [question1, question2] = document.getElementsByClassName("qcontent");

let score = [0, 0];

const arr = [
  [
    "이성을 볼때 우선순위는?",
    "3",
    "44",
    "55",
    "66",
    "77",
    "88",
    "99",
    "10",
    "11",
    "12",
  ],
  ["외모", "3", "44", "55", "66", "77", "88", "99", "10", "11", "12"],
  ["성격", "3", "44", "55", "66", "77", "88", "99", "10", "11", "12"],
];

question1.addEventListener("click", func1);
question2.addEventListener("click", func2);

function func1() {
  num++;
  progress.textContent = `${num}/12`;
  score[0]++;
  main.textContent = arr[0][num - 1];
  question1.textContent = arr[1][num - 1];
  question2.textContent = arr[2][num - 2];
  console.log("현재 num: " + num);
  if (num == 13) {
    linkResult();
  }
}

//결과값은 프론트,백엔드
function func2() {
  num++;
  progress.textContent = `${num}/12`;
  score[1]++;
  main.textContent = arr[0][num - 1];
  question1.textContent = arr[1][num - 1];
  question2.textContent = arr[2][num - 2];
  if (num == 13) {
    linkResult();
  }
}
function linkResult() {
  let result = "풀스택";
  if (score[0] <= 4) {
    result = "백엔드";
  } else if (score[0] > 7) {
    result = "프론트";
  }
  location.href = "result.html?result=" + result;
}
