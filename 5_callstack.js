var y;
function c() {
  const y = 'y';
  console.log('c');
  function b() {
    const z = 'z';
    console.log('b');
  }
}

function a() {
  // const x = 'x2';
  console.log('a');
  c();
  const x = 'x2';
  console.log(x); // TDZ (Temporal Dead Zone)코드 => 선언보다 먼저 접근을 한 경우
}

const x = 'x1';
console.log(z);
y = 'hehe';
//  window.y = 'hehe';
const z = () => {}

a(); // a, b, c
c(); // c