function delayP(ms) {
  return new Promise((resolve, reject)=> {
    setTimeout(resolve, ms);
    reject(err);
  });
};


async function a() {
    await delayP(3000); // 3초
    await delayP(6000); // 6초
    await delayP(9000); // 9초
    // 동시에 실행해야 되는 경우는 비효율적이다.
} //토탈 18초

async function b() {
  const p1 = delayP(3000); // 3초
  const p2 = delayP(6000); // 6초
  await Promise.allSettled([p1, p2]); // 6초
  // all 함수는 하나로 묶어서 실행을 나중에 할 수 있도록 만드는 것
  await delayP(9000); // 9초
} // 토탈 15초

new Promise((resolve, reject) => {
  const p1 = delayP(3000); // 3초
  const p2 = delayP(6000); // 6초
  return Promise.allSettled([p1, p2]); // 6초
}).then(() => {
  return delayP(9000);
})

async function c() {
  const a = await 1;
  const b = await 2;
  return a + b;
}

// function c (async)를 프로미스로 변경한 것
// 위 케이스는 async를 바벨을 통해 제너레이터로 바꾸는 게 하나의 방법임
Promise.resolve(1)
  .then((a) => {
    return 2;
  }). then((b) => {
    return a + b;
});
// 스코프가 달라, then(b)에서 a를 참조할 수 없음

// 다른 해결책으로는 IIFE라고 즉시 실햄 함수를 만들어서 사용한다. (공통 스코프로 만드는 방법, 꼼수)
(function() {
  let a;
  let b;
  Promise.resolve(1)
    .then((result) => {
      a = result;
      return 2;
    }). then((result) => {
      b = result;
      return a + b; // 시적 허용
  });
})();

async function createPost() {
  const post = await db.getPost(); // 게시물 조회
  if(post) {
    res.status(403).send('이미 게시글이 존재합니다.');
  } else {
    await db.createPost(); // 게시글 작성
    const p1 = db.userIncrementPostCount(); // 사용자에게 게시글 카운트 1 올림
    const p2 =  db.createNoti(); // 새로운 게시글 작성 완료 알림
    await Promise.allSettled([p1,p2]);
  }
}
// async 함수 실행할 때, 동시에 실행해도 괜찮은 것을 확인하여 묶는 게 좋다.

// axios.get().then(() => {
//
// }).catch(() => {
//
// }).finally(() => {
//
// })

// 이벤트 리스너라고 생각하면 편하다.
// 프로미스의 특정 조건은 resolve 함수가 호출되었을 때이다.

// 한 번 비동기는 영원한 비동기
// 비동기는 동시의 문제가 아니다. 순서의 문제다.
// Promise란, 실행은 바로 하되, 결괏값을 나중에 원할 때 쓸 수 있는 것
// 실행은 바로 ---> 결괏값이 나올 때는 나중 -> 결괏값이 사용할 때는 더 나중
// 실행은 바로 ---> 결괏값도 바로 사용하고 싶은 경우 ---> 그 다음에 결괏값이 나오면 ---> then, await, Promise.all 이런 게 결괏값을 기다린 후에 실행된다.
// promise, process.nextTick -> micro, 나머지는 매크로
// ajax = asynchronous javascript and xml
// async의 흐름은 오른쪽에서 왼족이다.