// 클로저 문제 -> 스코프, 비동기, var (쓰레기)
// 클로저가 문제다가 아닌 클로저를 사용해서 해결하는 문제
// 반복문과 비동기를 함께 사용하면 종종 발생

// 클로저 문제 예제 1 (var와 for와 비동기의 환상의 콜라보)
function a() {
  for(var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
a();

// function a 스코프는 1개고,  for문의 스코프는 5개
// a 스코프에서 i는  0-> 5가 되는 거고, for 문의 스코프 5개에서 i는 각각 0,1,2,3,4

// 클로저 문제 해결책 1 (IIFE)
function a() {
  for(var i = 0; i < 5; i++) {
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, i * 1000);
    })(i);
  }
}
a();


// 클로저 문제 해결책 2 (var -> let으로 변경)
function a() {
  for(let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
a();