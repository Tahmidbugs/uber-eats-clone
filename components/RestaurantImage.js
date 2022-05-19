import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const RestaurantImage = ({ image }) => {
  const [favorite, setFavorite] = React.useState(false);
  return (
    <>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: "100%", height: 200 }}
      />
      <TouchableOpacity
        style={{ position: "absolute", top: 20, right: 20 }}
        onPress={() => setFavorite(!favorite)}
      >
        {!favorite && (
          <MaterialCommunityIcons
            name="heart-outline"
            size={25}
            color="white"
          />
        )}
        {favorite && (
          <MaterialCommunityIcons name="heart" size={25} color="red" />
        )}
      </TouchableOpacity>
    </>
  );
};

export default RestaurantImage;
