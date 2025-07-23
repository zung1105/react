import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// // import MyComponet from './component/MyComponent'
// function App() {
  // const [count, setCount] = useState(0)
// import pic1 from "../img/thumb-1920-939716.png";
// import pic2 from "../img/thumb-1920-1123556.png";
// import pic3 from "../img/thumb-1920-1274991.png";
import pic4 from "../img/thumb-1920-1311265.png";
// react\img\thumb-1920-1311265.png
// react\img\thumb-1920-1274991.png
import { myData,EXAMPLE } from '../data.js';
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

const tghientai = new Date().getHours();
// const tghientai=20;
function App(){
  const[currenttime,setCurrenttime]=useState("Chào bạn")
  function updateLoichao(tghientai)
  {
    if(tghientai>=5 && tghientai<=12)
    {
       setCurrenttime("chào buổi sáng");
    }
    else if(tghientai>12 && tghientai<=18)
    {
       setCurrenttime("chào buổi chiều");
    }
    else
    {
       setCurrenttime("chào buổi tối");
    }
  }

  const[selectedTopic, setSelectedTopic]=useState();
  function handelSelect(selectedTopic)
  {
    setSelectedTopic(selectedTopic);
  }
  function defaultdisplay()
  {
     if(!selectedTopic)
     {
      return <p> Vui lòng click vào nút để lựa chọn 1 chủ đề</p>;
     }
     else
     {
      return(
      <div id="tab-content">
        <h3>{EXAMPLE[selectedTopic].title}</h3>
        <p>{EXAMPLE[selectedTopic].desc}</p>
        <pre>
          <code>{EXAMPLE[selectedTopic].code}</code>
        </pre>
       </div>
      )
     }
  }

  return (
    <>
    <main>
    <section id="examples">
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
      </section>
      <section id="examples">
      <h2>Examples</h2>
      <menu>
      <li><button onClick={()=>handelSelect("components")}>Components</button></li>
      <li><button onClick={()=>handelSelect("props")}>Props</button></li>
      <li><button onClick={()=>handelSelect("state")}>State</button></li>
      <li><TabButton onSelect={()=>{ updateLoichao(tghientai)}}>Cập nhật lời chào</TabButton></li>
      <li><button onClick={()=>{updateLoichao(20)}}>abc</button></li>
      {currenttime}
      </menu>
       {defaultdisplay()}
      </section>
      </main>
    </>
  )
}
 
export default App;
