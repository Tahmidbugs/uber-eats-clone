import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const AboutRestaurant = ({ route }) => {
  const { name, image, price, reviews, rating, categories } = route.params;

  const Categories = categories
    .map((categories) => categories.title)
    .join(" • ");
  const description = `${Categories} 
${price ? " • " + price : ""} • 🎟️ • ${rating} ⭐ ${reviews}+`;

  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: "100%", height: 200 }}
      />
      <RestaurantName title={name} />
      <RestaurantDeets details={description} />
    </View>
  );
};

export default AboutRestaurant;

const RestaurantName = ({ title }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "700",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {title}
  </Text>
);
const RestaurantDeets = ({ details }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {details}
  </Text>
);
