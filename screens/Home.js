import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import RestaurantItem from "../components/RestaurantItem";
import { localRestaurants } from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [RestaurantData, setRestaurantData] = React.useState(localRestaurants);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15, marginTop: 10 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItem RestaurantData={RestaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
