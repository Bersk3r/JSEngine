// const console = {
//   log() {
//     // 콘솔에 글자 적는 기능
//   }
// }

// { } // 블록
// ({ }) // 객체

const x = 'x1';
function c() {
  const y = 'y';
  console.log('c');
  function b() {
    const z = 'z';
    console.log('b');
  }
}

function a() {
  const x = 'x2';
  console.log('a');
  c();
  console.log(x);
}

a(); // a, b, c
c(); // c