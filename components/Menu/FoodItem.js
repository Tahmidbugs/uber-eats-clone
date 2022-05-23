import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const FoodItem = ({ restaurantName, FoodList, hideCheckBox, marginLeft }) => {
  const dispatch = useDispatch();

  const selectItem = (item, selected) => {
    dispatch({
      type: selected ? "ADD_TO_CART" : "REMOVE_FROM_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
      },
    });
  };
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isSelected = (food, cartItems) => {
    const same = Boolean(
      cartItems.find((item) => item.restaurantName == restaurantName)
    );

    return Boolean(cartItems.find((item) => item.title == food.title) && same);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ height: "60%" }}>
      {FoodList.map((food, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 20,
            }}
          >
            {hideCheckBox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{
                  borderColor: "lightgray",
                  borderRadius: 0,
                }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isSelected(food, cartItems)}
              />
            )}
            <FoodInfo
              foodName={food.title}
              foodDesc={food.description}
              foodPrice={food.price}
            />
            <FoodImage
              imageurl={food.image}
              marginLeft={marginLeft ? marginLeft : 0}
            />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 15 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default FoodItem;

const FoodInfo = (props) => (
  <View style={{ width: 220, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 19, fontWeight: "600" }}>{props.foodName}</Text>
    <Text>{props.foodDesc}</Text>
    <Text>{props.foodPrice}</Text>
  </View>
);

const FoodImage = ({ imageurl, marginLeft }) => (
  <Image
    source={{ uri: imageurl }}
    style={{ width: 100, height: 100, borderRadius: 8, marginLeft: marginLeft }}
  />
);
