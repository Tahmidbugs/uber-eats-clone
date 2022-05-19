import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import RestaurantItem from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
  "FW1Qr6-dp0OSUJQA6IBo4ud_TFfnYQTkn7MmseFYKEIXqINca1qU_GWtpMBF1WdY6p8He6uxQUvmmscHHKUkl1kTZOIf9TU_76A_S2hWlybdP-hqZN6DsT_IltCGYnYx";

const Home = () => {
  const [Restaurants, setRestaurants] = React.useState([]);

  const getRestaurantsFromYelp = () => {
    const url =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Tampa";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(url, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurants(json.businesses));
  };

  React.useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15, marginTop: 10 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItem Restaurants={Restaurants} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
