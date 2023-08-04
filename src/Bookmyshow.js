import { Col } from "reactstrap";
import "./Bookmyshow.css";
function Bookmyshow(data) {
  return (
    <Col sm="12" md="6" lg="3">
      <img src={data.myshowdata.ImagePath} className="imgcss" />
      <h3>{data.myshowdata.Name}</h3>
    </Col>
  );
}
export default Bookmyshow;
