import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";
import RegisterScreen from "./RegisterScreen";

const WelcomeScreen = ({ navigation }) => {
  const [showRegistration, setShowRegistration] = useState(false);

  const onDone = () => {
    setShowRegistration(true);
  };
  const onSkip = () => {
    setShowRegistration(true);
  };

  const Slidethrough = ({ item }) => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
        }}
      >
        <Image style={styles.introImageStyle} source={item.image} />
      </SafeAreaView>
    );
  };

  return (
    <>
      {showRegistration ? (
        navigation.navigate("RegisterScreen")
      ) : (
        <AppIntroSlider
          data={slades}
          renderItem={Slidethrough}
          onDone={onDone}
          showSkipButton={false}
          onSkip={onSkip}
          doneLabel="Login / Register"
          activeDotStyle={{
            marginLeft: -5,
            width: 30,
            backgroundColor: "black",
          }}
          dotStyle={{ marginLeft: -5, width: 40, backgroundColor: "#5AAE09" }}
          bottomButton={true}
        />
      )}
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  introImageStyle: {
    width: "100%",
    height: "100%",
  },
});

const slades = [
  {
    key: "s1",
    image: {
      uri: "https://images.squarespace-cdn.com/content/v1/558875a3e4b05f53d8b1b560/1553033270060-FHRF94MAY4G3394TEKO2/Untitled-9.gif?format=500w",
    },
    backgroundColor: "black",
  },
  {
    key: "s2",
    image: {
      uri: "https://images.squarespace-cdn.com/content/v1/558875a3e4b05f53d8b1b560/1524595369031-WBP5GB5V1Z20HZZ13Z0T/2018_02_uber_eats_emea_O_ANIM_logo_opt.gif?format=1500w",
    },
    backgroundColor: "black",
  },
  {
    key: "s3",
    image: {
      uri: "https://images.squarespace-cdn.com/content/v1/558875a3e4b05f53d8b1b560/1524595345524-PH7MCS4XZAEWUJTXF59B/2018_02_uber_eats_emea_J_ANIM_logo_opt.gif?format=1500w",
    },
    backgroundColor: "black",
  },
];
