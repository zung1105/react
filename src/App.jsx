// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// // import MyComponet from './component/MyComponent'
// function App() {
//   // const [count, setCount] = useState(0)
// import pic1 from "../img/thumb-1920-939716.png";
// import pic2 from "../img/thumb-1920-1123556.png";
// import pic3 from "../img/thumb-1920-1274991.png";
import pic4 from "../img/thumb-1920-1311265.png";
// react\img\thumb-1920-1311265.png
// react\img\thumb-1920-1274991.png
import { myData } from '../data.js';
import Header from './componnets/Header/Header.jsx';
import MainContent from './componnets/MainContent/MainContent.jsx';
import TabButton from './componnets/TabButton.jsx';
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
  function handleClick(selectedButton){
        alert(`${selectedButton} được chọn`);
    }
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
      <Header> </Header>
      <DiamicValue></DiamicValue>
      <ul>
        <MainContent
         {...myData[0]}
        />
        <MainContent
           image={myData[1].image}
          title={myData[1].title}
          desc={myData[1].desc}
        />
        <MainContent
          image={myData[2].image}
          title={myData[2].title}
          desc={myData[2].desc}
        />
        <MainContent
           image={pic4}
          title="Components"
          desc="abcxyz"
        />
      </ul>
      <h2>Examples</h2>
      <li><button>Componnet</button></li>
      <li><button>JSX</button></li>
      <li><button>Props</button></li>
      <li><TabButton onSelect={()=>{return handleClick("State")}}>State</TabButton></li>
      <li><TabButton>abc</TabButton></li>
    </>
  )
}

export default App;
