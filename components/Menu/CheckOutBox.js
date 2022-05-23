import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import firebase from "../../firebase";
import OrderCompleted from "../../screens/OrderCompleted";
import { useNavigation } from "@react-navigation/native";

const CheckOutBox = ({ setModalVisible, items, restaurantName }) => {
  const navigation = useNavigation();
  const AddOrdertoFirebase = () => {
    const db = firebase.firestore();
    db.collection("orders").add({
      items: items,
      restaurantName: restaurantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setModalVisible(false);
    console.log("order added successfully");
    navigation.navigate("OrderCompleted", {
      restaurantName: restaurantName,
      items: items,
    });
  };
  return (
    <TouchableOpacity
      onPress={() => AddOrdertoFirebase()}
      style={{ alignItems: "center", marginTop: 25, marginBottom: 40 }}
    >
      <View>
        <View style={styles.CheckOutBox}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
            Checkout
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  CheckOutBox: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 30,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CheckOutBox;
