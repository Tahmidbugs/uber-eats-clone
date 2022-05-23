import React from "react";
import { useFormikContext } from "formik";
import { Button } from "react-native";
import { View, Text, StyleSheet, Pressable } from "react-native";

function SubmitButton({ title, style, ...otherProps }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Pressable
      style={[styles.loginButton, style]}
      {...otherProps}
      onPress={handleSubmit}
    >
      <Text style={styles.intro}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    width: "40%",
    height: 40,
    backgroundColor: "black",
    borderRadius: 40,
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  intro: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
export default SubmitButton;
