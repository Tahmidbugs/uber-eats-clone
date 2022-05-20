import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import RestaurantImage from "./RestaurantImage";

import RestaurantInfo from "./RestaurantInfo";

const RestaurantItem = ({ Restaurants }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {Restaurants.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
};

export default RestaurantItem;
