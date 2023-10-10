const canvas = document.querySelector("canvas"); // canvas 요소 호출
const ctx = canvas.getContext("2d"); // canvas 요소에 그리는 도구 호출

canvas.width = 800; // 캔버스 가로 설정
canvas.height = 800; // 캔버스 세로 설정

ctx.moveTo(50, 50); // 입력 위치로 랜더링 도구 이동
ctx.lineTo(150, 50); // 기존 위치부터 입력 위치까지 직선 설정
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.fill(); // 채우기
