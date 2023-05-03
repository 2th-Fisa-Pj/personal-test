const resultTitle = document.getElementById("result-title");
const resultEx = document.getElementById("result-ex");
const resultImg = document.getElementById("result-img");

const queryString = location.search;
const urlParams = new URLSearchParams(queryString);
const result = urlParams.get("result");

const frontendText = `<br>프론트엔드 개발자는 웹사이트의 앞단에서 일해요.<br><br>
사용자가 보는 인터페이스를 만들어내죠.<br><br> 
디자인과 개발의 조화! "웹의 예술가"라고 불릴만큼 멋있어요!`;

const backendText = `<br>백엔드 개발자는 웹사이트의 뒷단에서 활동해요.<br><br>
데이터베이스와 서버를 다루며, 사용자가 요청하는 것에 대한 응답을 만들어내죠.<br><br>
그래서 "웹의 마술사"라고 불릴 정도로 중요해요!`;

const fullstackText = `<br>풀스택 개발자는 웹사이트를 완성하는 모든 부분을 다루는 개발자예요.<br><br>
프론트엔드, 백엔드, 데이터베이스, 서버 등을 모두 다룹니다.<br><br> 
웹의 마에스트로, 올인원 패키지라고 생각하면 돼요!`;

const frontendImageUrl =
  "https://cdn-icons-png.flaticon.com/512/4661/4661318.png";
const backendImageUrl =
  "https://cdn-icons-png.flaticon.com/512/2721/2721266.png";
const fullstackImageUrl =
  "https://cdn-icons-png.flaticon.com/512/6213/6213479.png";

const printResult = (result) => {
  if (result === "프론트") {
    resultTitle.textContent = "프론트엔드 개발자!";
    resultImg.innerHTML = `<img src="${frontendImageUrl}" width="330rem">`;
    resultEx.innerHTML = frontendText;
    return resultTitle.value;
  } else if (result === "백엔드") {
    resultTitle.textContent = "당신은 백엔드 개발자 입니다.";
    resultImg.innerHTML = `<img src="${backendImageUrl}" width="330rem">`;
    resultEx.innerHTML = backendText;
    return resultTitle.textContent;
  } else {
    resultTitle.textContent = "당신은 풀스택 개발자 입니다.";
    resultImg.innerHTML = `<img src="${fullstackImageUrl}" width="330rem">`;
    resultEx.innerHTML = fullstackText;
    return resultTitle.textContent;
  }
};

printResult(result);

const clip = () => {
  var url = "";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("URL이 복사되었습니다.");
};
