import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTab from "../components/Home/BottomTab";
import Categories from "../components/Home/Categories";
import HeaderTab from "../components/Home/HeaderTab";
import RestaurantItem from "../components/Home/RestaurantItem";
import SearchBar from "../components/Home/SearchBar";
import Cart from "../components/Menu/Cart";

const YELP_API_KEY =
  "FW1Qr6-dp0OSUJQA6IBo4ud_TFfnYQTkn7MmseFYKEIXqINca1qU_GWtpMBF1WdY6p8He6uxQUvmmscHHKUkl1kTZOIf9TU_76A_S2hWlybdP-hqZN6DsT_IltCGYnYx";

const Home = ({ navigation }) => {
  const [Restaurants, setRestaurants] = React.useState([]);
  const [selectedcity, setSelectedCity] = React.useState("Tampa");
  const [activeTab, setActiveTab] = React.useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${selectedcity}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(url, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurants(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  React.useEffect(() => {
    getRestaurantsFromYelp();
  }, [selectedcity, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15, marginTop: 10 }}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar searchedCity={setSelectedCity} />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItem Restaurants={Restaurants} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  );
};

export default Home;
