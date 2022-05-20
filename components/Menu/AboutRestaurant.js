import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const AboutRestaurant = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://cdn.vox-cdn.com/thumbor/gxotNUF9YxGbMSajO8-I3eN6ZFI=/0x0:2000x1335/1200x675/filters:focal(840x508:1160x828)/cdn.vox-cdn.com/uploads/chorus_image/image/58999873/2018_03_08_FarmHouse_beverlyHills_013.0.jpg",
        }}
        style={{ width: "100%", height: 200 }}
      />
      <RestaurantName title="Farmhouse Kitchen" />
      <RestaurantDeets details="Thai * Comfort Food * $$" />
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
