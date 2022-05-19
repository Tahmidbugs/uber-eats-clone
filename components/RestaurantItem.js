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

const RestaurantItem = ({ RestaurantData }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {RestaurantData.map((restaurant, index) => (
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

export const localRestaurants = [
  {
    name: "The Nawab's Kitchen",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-s/14/76/3f/8d/nawab-s-kitchen.jpg",
    rating: 4.5,
  },
  {
    name: "The Mad Grill",
    image_url:
      "https://lh3.googleusercontent.com/p/AF1QipM7XbKIbV8uYPVvVvs-_AM-Rrsrp3Vaf0vTP9Yn=s1600-w400",
    rating: 4,
  },

  {
    name: "Panshi Inn Restaurant",
    image_url:
      "https://ak-d.tripcdn.com/images/ww0q1e000001f9wit409E_R_800_525.jpg",
    rating: 5,
  },
];
