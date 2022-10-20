import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

function SearchBar() {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput placeholder="Search" style={styles.inputStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#828181",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 15,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
