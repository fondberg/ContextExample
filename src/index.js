import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider, Context } from "./ContextProvider";
import "./styles.css";

class MyContextEater extends React.Component {
  static contextType = Context;
  state = {
    data: "not received yet"
  };

  async componentDidMount() {
    const data = await this.context.getApi().load();
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <span>
          My theme is <b>"{this.context.theme}"</b>
        </span>
        <hr />
        Data is: <span>{this.state.data}</span>
      </div>
    );
  }
}

function OtherComp() {
  return (
    <div>
      <h3>I will eat all your cookies</h3>
      <MyContextEater />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello Context</h1>
      <ContextProvider>
        <OtherComp />
      </ContextProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
