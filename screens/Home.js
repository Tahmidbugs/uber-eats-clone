import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";
const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15, marginTop: 10 }}>
        <HeaderTab />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default Home;
