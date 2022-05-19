import { View } from "react-native";
import React, { useState } from "react";
import HeaderButton from "./HeaderButton";

const HeaderTab = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        title="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTab;
