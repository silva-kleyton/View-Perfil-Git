import "config/ReactotronConfig";
import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";

import createNavigator from "routes";

export default class App extends Component {
  state = {
    userCheked: false,
    userLogged: false
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem("@Githuber:username");

    this.appLoaded(username);
  }

  appLoaded = username => {
    this.setState({
      userCheked: true,
      userLogged: !!username
    });
  };

  render() {
    if (!this.state.userCheked) return null;

    const Routes = createNavigator(this.state.userLogged);

    return <Routes />;
  }
}

// const App = () => <Routes />;

// export default App;
