import logo from "./logo.svg";
import "./App.css";
import { Container } from "reactstrap";
import TouristPlace from "./TouristPlace";
import { Row } from "reactstrap";
const tdata = [
  { Name: "Tirumula", ImagePath: "images/tirupathi.jpg" },
  { Name: "Palani", ImagePath: "images/palani.jpg" },
  { Name: "Simhachalam", ImagePath: "images/simhachalam.jpg" },
  { Name: "Yadagirigutta", ImagePath: "images/yadagirigutta.jpg" },
];
const prolistele = tdata.map((tourdata) => (
  <TouristPlace touridata={tourdata}></TouristPlace>
));
function App() {
  return (
    <Container>
      <Row>
        {prolistele}

        {/*  <TouristPlace pdata={tdata}></TouristPlace> */}

        {/*<TouristPlace
          Name="Palani"
          ImagePath="images/palani.jpg"
        ></TouristPlace>
        <TouristPlace
          Name="Simhachalam"
          ImagePath="images/simhachalam.jpg"
        ></TouristPlace>
        <TouristPlace
          Name="Yadagirigutta"
          ImagePath="images/yadagirigutta.jpg"
        ></TouristPlace>
        <TouristPlace
          Name="Tirumula"
          ImagePath="images/tirupathi.jpg"
        ></TouristPlace>
        <TouristPlace
          Name="Palani"
          ImagePath="images/palani.jpg"
        ></TouristPlace>
        <TouristPlace
          Name="Simhachalam"
          ImagePath="images/simhachalam.jpg"
        ></TouristPlace>
        <TouristPlace
          Name="Yadagirigutta"
          ImagePath="images/yadagirigutta.jpg"
  ></TouristPlace>*/}
      </Row>
    </Container>
  );
}

export default App;
