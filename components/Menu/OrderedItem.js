import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderedItem = (item) => {
  const { title, price } = item.item;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{title}</Text>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>{price} </Text>
    </View>
  );
};

export default OrderedItem;
