import { userCallback } from 'react';

export const App = () => {
  const onClick = userCallback((e) => {
      console.log(e.target);
  }, [])

  // const onClick = userCallback(() => (e) => {
  //   console.log(e.target);
  // }, [])

  return (
    <div onClick={onClick}></div>
    //<div onClick={onClick()}></div>
  )
}