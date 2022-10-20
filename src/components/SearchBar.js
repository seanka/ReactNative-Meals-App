import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

function SearchBar() {
  return (
    <View style={styles.background}>
      <Text>Search Bar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 16,
    marginHorizontal: 15,
  },
});

export default SearchBar;
