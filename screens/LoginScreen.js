import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableHighlight,
} from "react-native";
import Screen from "../components/Intro/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/Intro/forms";
import { auth } from "../firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().label("Email"),
  password: Yup.string().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with", user.email);
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error);
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
        Sign in and <Text style={{ color: "#5AAE09" }}>GRAB YOUR BITE !</Text>
      </Text>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          icon="email"
          name="email"
          placeholder="Email"
          value={email}
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

        <TouchableHighlight style={styles.login} onPress={handleLogIn}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableHighlight>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  signup: {
    marginTop: 20,
  },
  container: {
    padding: 10,
    backgroundColor: "white",
  },

  loginText: {
    alignSelf: "center",
    fontWeight: "800",
    color: "black",
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 0,
    marginTop: 15,
  },
  login: {
    backgroundColor: "#5AAE09",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 15,
    borderColor: "black",
    borderWidth: 4,
  },
});
export default LoginScreen;
