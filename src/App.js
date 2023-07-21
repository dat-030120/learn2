import logo from './logo.svg';
import './App.css';
import Box from './component/box';

function App() {
  const element = [
    {
      id: 1,
      name: "người yêu",
      description: "chị châu lúc còn cute",
     // image:"./asset/image1/356540439_242671781961185_7403362414090560176_n.jpg"
       image: "./asset/image/values-1.jpg"
    },
    {
      id: 2,
      name: "người yêu đang chinh",
      description: "chị châu nhìn đẹp vãi ò",
       image: "./asset/image/values-2.jpg"
      //image:"./asset/image1/356934544_1278821529661103_5289519354125196668_n.jpg"
    },
    {
      id: 3,
      name: "người yêu đang định ăn tui",
      description: "ma nữ kìa tránh xa tui ra",
      image: "./asset/image/values-3.jpg"
      //image:"./asset/image1/358337325_1959013004454509_5539916661064496485_n.jpg"
    }
  ];
  const listElement = element.map((item, index) => {
    return (<Box key={item.id} data={item} />);
  });
  return (
    <div className="container-fluid">
      <div className="row">{listElement}</div>
    </div>
  );
}

export default App;
