const canvas = document.querySelector("canvas"); // canvas 요소 호출
const ctx = canvas.getContext("2d"); // canvas 요소에 그리는 도구 호출

canvas.width = 800; // 캔버스 가로 설정
canvas.height = 800; // 캔버스 세로 설정

ctx.fillRect(200, 200, 15, 100);
ctx.fillRect(365, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(290, 135, 50, 0, 2 * Math.PI); // 호 그리기 > 원
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white"; // 채우기 하얀색
ctx.arc(275, 130, 8, 1 * Math.PI, 2 * Math.PI); // 호 그리기 > 반원
ctx.arc(305, 130, 8, 1 * Math.PI, 2 * Math.PI);
ctx.fill();
