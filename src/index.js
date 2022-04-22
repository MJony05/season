// import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
// import createRoot from "react-dom/client";
/*
const App = () => {
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      console.log(pos);
    },
    function (err) {
      console.log(err);
    }
  );
  return <div>Hello world</div>;
};
*/
/*
class App extends React.Component {
  myState = {
    latitude: null,
    errorMessage: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => (this.myState.latitude = position.coords.latitude),
      (err) => (this.myState.errorMessage = err.message)
    );
  }
  componentDidMount()
  render() {
    if (this.myState.latitude && !this.myState.errorMessage) {
      return <div>Latitude:{this.myState.latitude}</div>;
    }
    if (!this.myState.latitude && this.myState.errorMessage) {
      return <div>Error:{this.myState.errorMessage}</div>;
    }
    return <div>Please wait</div>;
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
*/
// ReactDOM.render(<App />, document.querySelector("#root"));

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Clock />);
/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "false",
    };
  }

  componentDidMount() {
    console.log("componentDidMount() lifecycle");
    console.log(this.state.foo);
    // // Trigger update
    // this.setState({ foo: "salom" });
  }

  render() {
    console.log("Render lifecycle");
    return <h1>{this.state.foo}</h1>;
  }
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
*/

// import React from "react";
/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    //This function will call on initial rendering.
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
*/
import DisplaySeason from "./DisplaySeason.js";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  getLocation() {
    if (this.state.lat) {
      return (
        <div>
          <div>Latitude: {this.state.lat}</div>
        </div>
      );
    }
    if (this.state.errorMessage) {
      return (
        <div>
          <div>Error:{this.state.errorMessage}</div>
        </div>
      );
    }
    return <div>Loading....</div>;
  }
  render() {
    return (
      <DisplaySeason lat={this.state.lat} error={this.state.errorMessage} />
    );
  }
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
