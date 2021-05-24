import react from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function mainPage() {
  return (
    <div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>BMW M850i Converitible</Card.Title>
            <Card.Text>
              BMW 8 series hits the mark for a halo sports car from a brand that
              foments high expectations. It's a well-rounded luxury sports car
              with enjoyable performance, an upscale interior, lots of cargo
              space, and intuitive technology.
            </Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Mercedes C43 AMG 2019</Card.Title>
            <Card.Text>
              the C43's twin-turbocharged 3.0-liter V-6 is a gem. Powerful and
              torque rich, the 385-hp engine pairs with a new nine-speed
              automatic transmission that swaps cogs with both speed and
              precision
            </Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Toyota Supra 2020</Card.Title>
            <Card.Text>
              Beyond its nostalgia-inducing aesthetics, this Supra also has the
              highly desirable drivetrain configuration: the 3.0-liter,
              twin-turbocharged inline-six engine with 320 horsepower and 315
              pound-feet of torque, paired with a six-speed manual transmission.
            </Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default mainPage;
