import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import useResult from "../hooks/useResult";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

function SearchScreen({ navigation }) {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResult();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
          navigation={navigation}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice("$$")}
          navigation={navigation}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
  },
});

export default SearchScreen;
