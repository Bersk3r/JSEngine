const add = (a,b) => a + b;
function calculator(func, a,b) {
  return func(a,b);
}

add(3,5); // 8
calculator(add, 3, 5); // 8
// const onClick = () => {
//   return() => {
//     console.log('hello');
//   }
// }

// const onClick = () =>  (event) {
//     console.log('hello');
// }

// document.querySelector('#header').addEventListener('click', add())
// 함수 매개변수 부분에 반환 값을 넣으면 이해하기 편하다. (undefined + undefined)
// reutrn 값이 없는 화살표 함수는 헷갈린다.