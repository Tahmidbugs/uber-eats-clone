import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
const Icon = ({ name, label, activeIcon }) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome
          name={name}
          size={25}
          style={{ marginBottom: 3, alignSelf: "center" }}
          color={activeIcon == name ? "black" : "grey"}
        />
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Icon;
