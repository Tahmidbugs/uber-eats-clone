import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import Fakefood from "../../data/Fakefood";
import MenuItems from "../../data/MenuItems";
const FoodItem = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {Fakefood.map((item, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 20,
            }}
          >
            <FoodInfo
              foodName={item.title}
              foodDesc={item.description}
              foodPrice={item.price}
            />
            <FoodImage imageurl={item.image} />
          </View>
          <Divider width={0.5} orientation={"vertical"} />
        </View>
      ))}
    </ScrollView>
  );
};

export default FoodItem;

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 19, fontWeight: "600" }}>{props.foodName}</Text>
    <Text>{props.foodDesc}</Text>
    <Text>{props.foodPrice}</Text>
  </View>
);

const FoodImage = ({ imageurl }) => (
  <Image
    source={{ uri: imageurl }}
    style={{ width: 100, height: 100, borderRadius: 8 }}
  />
);
