const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Component3 from "./screens/Component3";
import Component from "./screens/Component";
import Component1 from "./screens/Component1";
import Component2 from "./screens/Component2";
import Component4 from "./screens/Component4";
import Component6 from "./screens/Component6";
import GroupComponent4 from "./components/GroupComponent4";
import GroupComponent5 from "./components/GroupComponent5";
import GroupComponent6 from "./components/GroupComponent6";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Component3"
              component={Component3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component"
              component={Component}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component1"
              component={Component1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component2"
              component={Component2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component4"
              component={Component4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component6"
              component={Component6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component6"
              component={GroupComponent4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component6"
              component={GroupComponent5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component6"
              component={GroupComponent6}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
