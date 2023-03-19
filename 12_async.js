// setTimeout(() => {
//     console.log('a');
// }, 0);

// node.js의 즉시 실행 함수
// setTimeout(0)보다 setImmediate가 먼저 실행된다.
// 하지만 다른 비동기 함수에 동시에 들어 있는 경우는 달라질 수 있다.
// 똑같은 내용 함수가 순서대로 있는 경우 순서대로 실행된다.
setImmediate(() => {
  console.log('a');
});

setTimeout(() => {
  console.log('b');
}, 1000);

setTimeout(() => {
  console.log('c');
}, 2000);

Promise.resolve().then(() => {
  console.log('p');
})

// 스코프 체인 문제로 에러가 발생된다.
// setTimeout(() => {
//     let a = '1';
//     console.log(a);
// }, 0)
// console.log(a);


// 비동기 특성상, 비동기를 동기 형태로 만들 수 없으므로 2가 출력된다.
let a = 2;
setTimeout(() => {
    a = 5;
    console.log(a);
    // 여기에서만 사용이 가능하다.
}, 0)
console.log(a);

const p = new Promise((resolve, reject) => {

});

// 한 번 비동기는 영원한 비동기
// 비동기는 동시의 문제가 아니다. 순서의 문제다.
// promise, process.nextTick -> micro, 나머지는 매크로