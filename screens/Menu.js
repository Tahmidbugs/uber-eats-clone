import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import AboutRestaurant from "../components/Menu/AboutRestaurant";
import FoodItem from "../components/Menu/FoodItem";

const Menu = ({ route }) => {
  return (
    <View>
      <AboutRestaurant route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <FoodItem />
    </View>
  );
};

export default Menu;
