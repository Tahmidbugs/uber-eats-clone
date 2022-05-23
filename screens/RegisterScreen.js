import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Alert,
} from "react-native";
import Screen from "../components/Intro/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField } from "../components/Intro/forms";
import { auth } from "../firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().label("Email"),
  password: Yup.string().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with", user.email);
        Alert.alert("", "Account created!", [
          {
            text: "Sign In",
            onPress: () => navigation.navigate("LoginScreen"),
          },
        ]);
      })
      .catch((error) => {
        Alert.alert(
          "",
          "An account already exists with this email. Log in instead?",
          [
            {
              text: "Sign In",
              onPress: () => navigation.navigate("LoginScreen"),
            },
          ]
        );
      });
  };

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://www.tulsieatery.com/wp-content/uploads/2020/09/Uber-Eats.gif",
        }}
      />

      <Text
        style={{
          color: "black",
          alignSelf: "center",
          fontSize: 18,
          fontWeight: "900",
          marginVertical: 10,
        }}
      >
        Join us for<Text style={{ color: "#5AAE09" }}> HOT EAT</Text> and{" "}
        <Text style={{ color: "#5AAE09" }}> COOL TREATS</Text>
      </Text>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="sentences"
          autoCorrect={false}
          keyboardType="default"
          textContentType="emailAddress"
          icon="account"
          name="username"
          placeholder="Your name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          icon="email"
          name="email"
          placeholder="Email"
          value={email}
          enablesReturnKeyAutomatically="true"
          onChangeText={(text) => setEmail(text)}
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          icon={"lock"}
          name="password"
          textContentType="password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <AppFormField
          autoCorrect={false}
          keyboardType="default"
          textContentType="phone"
          icon="phone"
          name="Phone"
          placeholder="Phone"
          returnKeyType="default"
        />

        <Text style={{ marginHorizontal: 15, marginTop: 15 }}>
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated dialer, from Uber and its affiliates to the
          number provided. Text “STOP” to 89203 to opt out.
        </Text>

        <TouchableHighlight style={styles.signup} onPress={handleSignUp}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableHighlight>
      </AppForm>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <Text
          style={{ color: "black", fontSize: 16, paddingRight: 10 }}
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          or..if you have an account
        </Text>
        <TouchableHighlight
          style={styles.login}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.signupText}>Log in</Text>
        </TouchableHighlight>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  signup: {
    marginTop: 15,
    backgroundColor: "#5AAE09",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 40,
    alignSelf: "center",
    marginBottom: 20,
    borderColor: "black",
    borderWidth: 4,
  },
  login: {
    backgroundColor: "#5AAE09",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 40,
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 4,
  },

  signupText: {
    alignSelf: "center",
    fontWeight: "800",
    color: "black",
  },
  container: {
    padding: 10,
    backgroundColor: "white",
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 0,
    marginTop: 15,
  },
  loginButton: {
    width: "40%",
    height: 40,
    backgroundColor: "black",
    borderRadius: 40,
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
  },
  intro: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
export default RegisterScreen;
