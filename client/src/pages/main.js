import react from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import bmw1 from "../img/bmw1.jpg";
import mercedes2 from "../img/mercedes2.jpg";
import supra1 from "../img/supra1.jpg";
// import About from "../components/about/about.js";
function MainPage() {
  let history = useHistory();

  function bookButton() {
    history.push("/booking");
  }

  function aboutPage() {
    history.push("/about");
  }
  return (
    <div className="main">
      {/* <About></About> */}
      <div className="car1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={bmw1} />
          <Card.Body>
            <Card.Title>BMW M850i Converitible</Card.Title>
            <Card.Text>
              Brand new 2021 M850i convertible! 523 horsepower all wheel drive
              amazing power, perfect for those sunny California days! Drives
              like a grand tourer with the power when you need it.
            </Card.Text>
            <Button variant="primary" onClick={bookButton}>
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="car2">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={mercedes2} />
          <Card.Body>
            <Card.Title>Mercedes C43 AMG 2019</Card.Title>
            <Card.Text>
              the C43's twin-turbocharged 3.0-liter V-6 is a gem. Powerful and
              torque rich, the 385-hp engine pairs with a new nine-speed
              automatic transmission that swaps cogs with both speed and
              precision
            </Card.Text>
            <Button variant="primary" onClick={bookButton}>
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="car3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={supra1} />
          <Card.Body>
            <Card.Title>Toyota Supra 2020</Card.Title>
            <Card.Text>
              Beyond its nostalgia-inducing aesthetics, this Supra also has the
              highly desirable drivetrain configuration: the 3.0-liter,
              twin-turbocharged inline-six engine with 320 horsepower and 315
              pound-feet of torque, paired with a six-speed manual transmission.
            </Card.Text>
            <Button variant="primary" onClick={bookButton}>
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MainPage;
