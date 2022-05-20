import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HeaderButton = ({
  title,
  buttoncolor,
  textcolor,
  activeTab,
  setActiveTab,
}) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: activeTab == title ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => setActiveTab(title)}
    >
      <Text
        style={{
          color: activeTab == title ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);

export default HeaderButton;
