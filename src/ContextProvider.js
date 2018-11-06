import React from "react";

export const Context = React.createContext();

export class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      getApi: this.getApi
    };
  }

  getApi = () => {
    return {
      load: () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve("data from api");
          }, 1000);
        });
      }
    };
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
