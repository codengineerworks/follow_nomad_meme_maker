const canvas = document.querySelector("canvas"); // canvas 요소 호출
const ctx = canvas.getContext("2d"); // canvas 요소에 그리는 도구 호출

canvas.width = 800; // 캔버스 가로 설정
canvas.height = 800; // 캔버스 세로 설정

ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill(); // 첫 번째 fill 동작 - 검은색 채우기

ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";

setTimeout(() => {
	// 두 번째 fill 동작 - 빨강색 채우기
	// 기존 검은색 사각형들도 빨강색으로 변경
	ctx.fill();
}, 5000);
