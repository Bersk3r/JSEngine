const x = true;
const y = false;

function a() {
  let a = 4;
  if(x) {
    let a = 3;
    for(let i = 0; i < a; i++) {
      console.log(i);
    }
    if(!y) {
      kkk();
    }
  }
  z(); // 에러 ㅂ라생
}

a();
// function z() {} // 호이스팅
// var zz; // 호이스팅
const z = (a,b) => { return a + b}; // TDZ
z(3,5);