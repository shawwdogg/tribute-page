import logo from "./logo.svg";
import "./App.css";
import statue from "./images/sculpture.jpg";
import Title from "./Componets/Title";
import ImgDiv from "./Componets/ImgDiv";
import TributeInfo from "./Componets/TributeInfo";
function App() {
  return (
    <div className="main">
      <Title title="Dallas Cowboys" />
      <ImgDiv img={statue} picture_info="Dallas Cowboys Head Coach" />
     <TributeInfo url="https://en.wikipedia.org/wiki/Dallas_Cowboys" />
    </div>
  );
}
export default App;
