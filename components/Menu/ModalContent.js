import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import OrderedItem from "./OrderedItem";
import CheckOutBox from "./CheckOutBox";

const ModalContent = ({
  setModalVisible,
  restaurantName,
  items,
  total_amount,
}) => {
  return (
    <View style={styles.ModalContainer}>
      <View style={styles.ContainBox}>
        <Text style={styles.RestaurantTitle}>{restaurantName}</Text>
        {items.map((item, index) => (
          <OrderedItem key={index} item={item} />
        ))}
        <DisplayTotal total_amount={total_amount} />
        <CheckOutBox
          setModalVisible={setModalVisible}
          items={items}
          restaurantName={restaurantName}
        />
      </View>
    </View>
  );
};

const DisplayTotal = ({ total_amount }) => {
  const subtotal = total_amount;
  const tax = total_amount * 0.05;
  const discount = (0.0).toPrecision(4);
  const total = subtotal + tax;
  //   console.log("total is ", total);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Subtotal: </Text>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>
          ${subtotal.toPrecision(4)}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Discounts: </Text>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>${discount}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Tax (5%): </Text>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>
          ${tax.toPrecision(4)}
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 20,
          borderTopWidth: 2,
          borderTopColor: "black",
        }}
      >
        <Text style={{ fontWeight: "800", fontSize: 16 }}>Total amount:</Text>
        <Text style={{ fontWeight: "800", fontSize: 16 }}>
          ${total.toPrecision(4)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ModalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#rgba(0,0,0,0.7)",
  },
  ContainBox: {
    backgroundColor: "white",
    padding: 16,
    maxHeight: "80%",
    borderWidth: 1,
  },
  RestaurantTitle: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ModalContent;
