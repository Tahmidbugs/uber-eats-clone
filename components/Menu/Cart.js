import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";
import ModalContent from "./ModalContent";
const Cart = (props) => {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const price_list = items.map((item) => Number(item.price.replace("$", "")));
  //   console.log(price_list);
  const total_amount = price_list.reduce(
    (previous, current) => previous + current,
    0
  );

  const [modalVisible, setModalVisible] = useState(false);

  //   console.log(total_amount);
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContent
          setModalVisible={setModalVisible}
          restaurantName={restaurantName}
          items={items}
          total_amount={total_amount}
        />
      </Modal>
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
              onPress={() => setModalVisible(true)}
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
