import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
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
