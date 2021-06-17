import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import io from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import bmw1 from "../img/bmw1.jpg";
import mercedes2 from "../img/mercedes2.jpg";
import supra1 from "../img/supra1.jpg";
import banner1 from "../img/mercedes4.jpg";

const socket = io.connect("http://localhost:5000");

function MainPage() {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:5000");
    socketRef.current.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    const { name, message } = state;
    socketRef.current.emit("message", { name, message });
    e.preventDefault();
    setState({ message: "", name });
  };

  console.log(state);

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  let history = useHistory();

  function bookButton() {
    history.push("/booking");
  }

  function reserveButton() {
    history.push("/booking");
  }
  return (
    <div className="main">
      <div className="banner1">
        <img src={banner1} alt="bmw and corvette" className="banner1img" />
        <div classname="bannercaption"></div>
        <button className="bookbutton" onClick={reserveButton}>
          RESERVE A CAR
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="card">
        <form onSubmit={onMessageSubmit}>
          <h1> Messenger</h1>
          <div className="name-field">
            <textarea
              name="name"
              value={state.name}
              onChange={(e) => onTextChange(e)}
            >
              {" "}
            </textarea>
          </div>
          <div className="message-field">
            <textarea
              name="message"
              value={state.message}
              onChange={(e) => onTextChange(e)}
            >
              {" "}
            </textarea>
          </div>
          <button onSubmit={onMessageSubmit}> send message</button>
        </form>
        <div className="render-chat">
          <h1> chat log </h1>
          {renderChat()}
        </div>
      </div>

      <div className="carList">
        <div className="car1">
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={bmw1} />
            <Card.Body className="cardBody">
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
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={mercedes2} />
            <Card.Body className="cardBody">
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
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={supra1} />
            <Card.Body className="cardBody">
              <Card.Title>Toyota Supra 2020</Card.Title>
              <Card.Text>
                Beyond its nostalgia-inducing aesthetics, this Supra also has
                the highly desirable drivetrain configuration: the 3.0-liter,
                twin-turbocharged inline-six engine with 320 horsepower and 315
                pound-feet of torque, paired with a six-speed manual
                transmission.
              </Card.Text>
              <Button variant="primary" onClick={bookButton}>
                Book Now
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
