import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { useSelector } from "react-redux";
import FoodItem from "../components/Menu/FoodItem";
// import firebase from "firebase";
const OrderCompleted = ({ route }) => {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const price_list = items.map((item) => Number(item.price.replace("$", "")));
  const total_amount = price_list.reduce(
    (previous, current) => previous + current,
    0
  );

  // const [lastorder, setLastOrder] = useState({ items: [{}] });

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   const unsubscribe = db
  //     .collection("orders")
  //     .orderBy("createdAt", "desc")
  //     .limit(1)
  //     .onSnapshot((snapshot) => {
  //       snapshot.docs.map((doc) => {
  //         setLastOrder(doc.data());
  //       });
  //     });

  //   return () => unsubscribe();
  // }, [lastorder]);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          margin: 15,
          marginTop: -50,
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          style={{ alignSelf: "center", height: 150, width: 150 }}
          source={require("../assets/animations/ordered.gif")}
        />
        <Text style={{ fontWeight: "800", fontSize: 20 }}>
          Your order at {restaurantName} has been completed for{" "}
          {total_amount.toPrecision(4)}{" "}
        </Text>
        <FoodItem FoodList={items} hideCheckBox={true} />
        <Image
          style={{ alignSelf: "center", height: 150, width: 150 }}
          source={require("../assets/animations/cooking.gif")}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;
