import { Col } from "reactstrap";
function TouristPlace(data) {
  return (
    <Col sm="12" md="6" lg="3">
      <h1>{data.touridata.Name}</h1>
      <img src={data.touridata.ImagePath} />
    </Col>
  );
}
export default TouristPlace;
