const canvas = document.querySelector("canvas"); // canvas 요소 호출
const ctx = canvas.getContext("2d"); // canvas 요소에 그리는 도구 호출

canvas.width = 800; // 캔버스 가로 설정
canvas.height = 800; // 캔버스 세로 설정

ctx.rect(50, 50, 100, 100);
ctx.fill();
