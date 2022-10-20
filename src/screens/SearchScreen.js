import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import yelp from "../api/yelp";

import SearchBar from "../components/SearchBar";

function SearchScreen() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 30,
        term,
        location: "san jose",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>Search screen</Text>
      <Text>We have found {results.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
  },
});

export default SearchScreen;
