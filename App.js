import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ResultShowScreen from "./src/screens/ResultShowScreen";
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createStackNavigator();

function MyNavigator() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Business Search" }}
      />
      <Stack.Screen name="ResultsShow" component={ResultShowScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyNavigator />
    </NavigationContainer>
  );
}
