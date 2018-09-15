import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { metrics, colors } from "styles";

import HeaderRigth from "components/HeaderRight";

import Welcome from "Pages/welcome";
import Repositories from "Pages/repository";
import Organizations from "Pages/organizations";

const createNavigator = (isLogged = false) =>
  StackNavigator(
    {
      Welcome: { screen: Welcome },
      User: {
        screen: TabNavigator(
          {
            Repositories: { screen: Repositories },
            Organizations: { screen: Organizations }
          },
          {
            tabBarPosition: "bottom",
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: colors.white,
              inactiveTintColor: colors.whiteTransparent,
              style: {
                backgroundColor: colors.secundary
              }
            }
          }
        )
      }
    },
    {
      initialRouteName: isLogged ? "User" : "Welcome",
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          paddingHorizontal: metrics.basePadding
        },
        headerRight: <HeaderRigth navigation={navigation} />
      })
    }
  );

export default createNavigator;
