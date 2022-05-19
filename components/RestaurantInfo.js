import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
    }}
  >
    <View style={{ marginLeft: 10 }}>
      <Text style={{ fontWeight: "800", fontSize: 15 }}>{name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 min</Text>
    </View>
    <View
      style={{
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);

export default RestaurantInfo;
