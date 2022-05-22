import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);

  const price_list = items.map((item) => Number(item.price.replace("$", "")));
  //   console.log(price_list);
  const total_amount = price_list.reduce(
    (previous, current) => previous + current,
    0
  );
  const total = total_amount.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  console.log(total_amount);
  return (
    <>
      {total_amount ? (
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
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 50 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>
                ${total_amount.toPrecision(4)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cart;
