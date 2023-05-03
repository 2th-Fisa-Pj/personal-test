const resultTitle = document.getElementById("result-title");
const resultEx = document.getElementById("result-ex");

const queryString = location.search;
const urlParams = new URLSearchParams(queryString);
const result = urlParams.get("result");

const printResult = (result) => {
  if (result === "프론트") {
    resultTitle.textContent = "프론트엔드 개발자!";
    resultEx.innerHTML = "프론트엔드</br>성공?";
    return resultTitle.value;
  } else if (result === "백엔드") {
    resultTitle.textContent = "당신은 백엔드 개발자 입니다.";
    resultEx.textContent = "백엔드 설명";
    return resultTitle.textContent;
  } else {
    resultTitle.textContent = "당신은 풀스택 개발자 입니다.";
    resultEx.textContent = "풀스택 설명";
    return resultTitle.textContent;
  }
};

printResult(result);
