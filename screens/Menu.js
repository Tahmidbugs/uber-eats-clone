import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import AboutRestaurant from "../components/Menu/AboutRestaurant";
import Cart from "../components/Menu/Cart";
import FoodItem from "../components/Menu/FoodItem";
import Fakefood from "../data/Fakefood";
const Menu = ({ route, navigation }) => {
  return (
    <>
      <View>
        <AboutRestaurant route={route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <FoodItem FoodList={Fakefood} restaurantName={route.params.name} />
      </View>
      <Cart />
    </>
  );
};

export default Menu;
