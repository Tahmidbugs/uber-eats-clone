import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Cart = (props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        bottom: 30,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "black",
            alignItems: "center",
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: "relative",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
