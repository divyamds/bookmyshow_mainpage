import logo from "./logo.svg";
import "./App.css";
import { Container } from "reactstrap";
import { Row } from "reactstrap";
import Bookmyshow from "./Bookmyshow";
import Bookslider from "./Bookslider";
import Booknavabar from "./Booknavabar";
import "./Bookmyshow.css";

const showdata = [
  {
    Name: "BRO",
    ImagePath:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC42LzEwICA4Mi42SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00360172-ncsbpawyxm-portrait.jpg",
  },
  {
    Name: "Rocky",
    ImagePath:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgNTUuNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312549-evehmvnrtp-portrait.jpg",
  },
  {
    Name: "Baby",
    ImagePath:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICA2Ny44SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363274-yjxvbzhdbc-portrait.jpg",
  },
  {
    Name: "Oppenheimer",
    ImagePath:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICAxMDQuM0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347867-zklzrdqjwu-portrait.jpg",
  },
];
const showlist = showdata.map((sdata) => (
  <Bookmyshow myshowdata={sdata}></Bookmyshow>
));
function App() {
  return (
    <Container>
      <Row>
        <Booknavabar></Booknavabar>
      </Row>
      <Row>
        <Bookslider></Bookslider>
      </Row>
      <div className="Bookmyshow">
        <Row className="showlist">{showlist}</Row>
      </div>
    </Container>
  );
}

export default App;
