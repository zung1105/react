import pic1 from "./img/thumb-1920-939716.png";
import pic2 from "./img/thumb-1920-1123556.png";
import pic3 from "./img/thumb-1920-1274991.png";
import pic4 from "./img/thumb-1920-1311265.png";

export const myData=[
    {
        image:pic1,
        title:"Components",
        desc:"abcxyx"
    },
    {
        image:pic2,
        title:"Components",
        desc:"abcxyx"
    },
    {
        image:pic3,
        title:"Components",
        desc:"abcxyx"
    },
    {
        image:pic4,
        title:"Components",
        desc:"abcxyx"
    },
];

export const EXAMPLE={
    components:{
        title:'Components',
        desc:'Thành phần là các khối giao diện tái sử dụng trong React. Chúng được thiết kế để độc lập và có thể kết hợp linh hoạt.',
        code:`function LoiChao() {
  return (
    <div>
      <h1>Chào bạn!</h1>
      <p>Chào mừng bạn đến với React.</p>
    </div>
  );
}`
    },


    jsx:{
        title:'JSX',
        desc:'JSX cho phép viết mã giao diện dễ đọc hơn bằng cách sử dụng cú pháp HTML-like. Nó giúp việc xây dựng UI nhanh chóng và hiệu quả.',
        code:` function GioiThieu() {
      return (
        <div>
          <h2>Giới thiệu về React</h2>
          <p>React giúp tạo giao diện hiện đại và dễ bảo trì.</p>
        </div>
      );
    }`
    },
   
    props: {
    title: 'Props',
    desc: 'Props là cách truyền dữ liệu giữa các thành phần trong React. Chúng làm cho giao diện có thể tùy chỉnh và linh hoạt.',
    code: `
    function HoSo({ ten, tuoi }) {
      return (
        <div>
          <h3>Thông tin cá nhân</h3>
          <p>Tên: {ten}</p>
          <p>Tuổi: {tuoi}</p>
        </div>
      );
    }
    `
    },
    
    state: {
    title: 'State',
    desc: 'State cho phép các thành phần quản lý trạng thái động. Nó giúp giao diện phản hồi linh hoạt với các thay đổi.',
    code: `
    function CongTac() {
      const [bat, setBat] = React.useState(false);

      function xuLyClick() {
        setBat((bat) => !bat);
      }

      return (
        <button onClick={xuLyClick}>
          {bat ? 'Bật' : 'Tắt'}
        </button>
      );
    }
    `
  },
};