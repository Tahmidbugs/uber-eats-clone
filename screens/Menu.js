import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import AboutRestaurant from "../components/Menu/AboutRestaurant";
import FoodItem from "../components/Menu/FoodItem";

const Menu = () => {
  return (
    <View>
      <AboutRestaurant />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <FoodItem />
    </View>
  );
};

export default Menu;
