import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "./Icon";
const BottomTab = () => {
  const [activeIcon, setActiveIcon] = React.useState("home");
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon name="home" label="Home" activeIcon={activeIcon} />
      <Icon name="search" label="Browse" activeIcon={activeIcon} />
      <Icon name="shopping-bag" label="Grocery" activeIcon={activeIcon} />
      <Icon name="shopping-cart" label="Carts" activeIcon={activeIcon} />
      <Icon name="user" label="Account" activeIcon={activeIcon} />
    </View>
  );
};

export default BottomTab;
