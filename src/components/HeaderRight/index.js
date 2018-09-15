import React, { Component } from "react";
import { TouchableOpacity, AsyncStorage } from "react-native";
import { NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

export default class HeaderRigth extends Component {
  signOut = async () => {
    await AsyncStorage.clear();

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Welcome" })]
    });

    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
        <Icon name="exchange" size={16} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
