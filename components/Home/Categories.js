import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import MenuItems from "../../data/MenuItems";

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {MenuItems.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 20 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontWeight: "900", fontSize: 13 }}>
              {item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
