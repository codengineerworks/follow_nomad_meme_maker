const canvas = document.querySelector("canvas"); // canvas 요소 호출
const ctx = canvas.getContext("2d"); // canvas 요소에 그리는 도구 호출

canvas.width = 800; // 캔버스 가로 설정
canvas.height = 800; // 캔버스 세로 설정

ctx.fillRect(200, 200, 50, 200); // 첫 번째 벽
ctx.fillRect(400, 200, 50, 200); // 두 번째 벽
ctx.lineWidth = 2;
ctx.fillRect(300, 300, 50, 100); // 문
ctx.fillRect(200, 200, 200, 20); // 천장
ctx.moveTo(200, 200);
ctx.lineTo(325, 100); // 좌측 지붕
ctx.lineTo(450, 200); // 우측 지붕
ctx.fill();
