// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// // import MyComponet from './component/MyComponent'
// function App() {
//   // const [count, setCount] = useState(0)

function Header(){
  return (
    <>
    <h2>Chào mừng đến với thế giới react</h2>
    <p>
      Hôm nay là 22/1/2024. Thời gian hiện tại{""}
      19:00
    </p>
    </>
  )
}
function Dscv(){
  return(
    <>
    <h1>Danh sach công việc</h1>
    <ul>
      <li>Học bài react</li>
      <li>Hoàn thành bài tập</li>
      <li>Dọn dẹp bàn làm việc</li>
    </ul>
    <p>Chúc bạn thành công</p>
    </>
  )
}
let today=new Date().toLocaleDateString();
let time=new Date().toLocaleTimeString();
const wellcome=[
  "Chào mừng bạn đến với React",
  "Rất vui được chào đón thế giới react",
  "Học các kiến thức React",
];
const random=Math.floor(Math.random()*wellcome.length);
const layrandom=wellcome[random];

function Header1()
{
  return(
    <>
      <h1>{layrandom}</h1>
      <p>Hôm nay là: <strong>{today}</strong>. Thời gian hiện tại <strong>{time}</strong></p>
    </>
  )
}
const name="Dung";

function DiamicValue()
{
  return(
    <>
    <h2>Chào {name}</h2>
    <p>kết quả:{5+8}</p>
    </>
  );
}


function App(){
  return (
    // <div>
    //   hello world
    //   <MyComponet></MyComponet>
    // </div>
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    
      {/* <h1>Đây là tiêu đề</h1>
      <p>abc</p>
      <Header></Header>
      <Header/>
      <Dscv/> */}
      <Header1> </Header1>
      <DiamicValue></DiamicValue>
      
    </>
  )
}

export default App;
