// 비동기 특성상, 비동기를 동기 형태로 만들 수 없으므로 2가 출력된다.
let a = 2;
// setTimeout(() => {
//     a = 5;
//     console.log(a);
//     // 여기에서만 사용이 가능하다.
// }, 0)
// console.log(a);

const p = new Promise((resolve, reject) => {
  console.log('제일 먼저'); // 이 부분은 동기이다.
  setTimeout(() => {
    a = 5;
    console.log(a);
    // 여기에서만 사용이 가능하다.
    resolve(a);
  }, 0)
});
// 딴짓딴짓
// 딴짓딴짓
console.log('딴짓');
// 딴짓딴짓
// 딴짓딴짓
p.then((result) => {
  console.log('result', result);
})
// 이벤트 리스너라고 생각하면 편하다.
// 프로미스의 특정 조건은 resolve 함수가 호출되었을 때이다.




// 한 번 비동기는 영원한 비동기
// 비동기는 동시의 문제가 아니다. 순서의 문제다.
// Promise란, 실행은 바로 하되, 결괏값을 나중에 원할 때 쓸 수 있는 것
// promise, process.nextTick -> micro, 나머지는 매크로
