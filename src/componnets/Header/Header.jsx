import "./Header.css";

let today=new Date().toLocaleDateString();
let time=new Date().toLocaleTimeString();
const wellcome=[
  "Chào mừng bạn đến với React",
  "Rất vui được chào đón thế giới react",
  "Học các kiến thức React",
];
const random=Math.floor(Math.random()*wellcome.length);
const layrandom=wellcome[random];
function Header()
{
  return(
    <>
      <h1>{layrandom}</h1>
      <p>Hôm nay là: <strong>{today}</strong>. Thời gian hiện tại <strong>{time}</strong></p>
    </>
  );
}

export default Header;