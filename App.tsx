const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Component11 from "./screens/Component4";
import Component4 from "./screens/Component";
import Component8 from "./screens/Component3";
import Component10 from "./screens/Component10";
import Component from "./components/Component";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component6 from "./screens/Component1";
import Component7 from "./screens/Component2";
import Component9 from "./components/Component9";
import Component12 from "./components/Component12";
import Component13 from "./components/Component13";
import Component14 from "./components/Component14";
import Component15 from "./components/Component15";
import Component16 from "./components/Component16";
import Component17 from "./components/Component17";
import Component18 from "./screens/Component6";
import Component19 from "./components/Component19";
import Component20 from "./components/Component20";
import Component21 from "./components/Component21";
import Component22 from "./components/Component22";
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
          <Stack.Navigator
            initialRouteName="Component16"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Component11"
              component={Component11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component4"
              component={Component4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component8"
              component={Component8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component10"
              component={Component10}
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
              name="Component3"
              component={Component3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component6"
              component={Component6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component7"
              component={Component7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component9"
              component={Component9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component12"
              component={Component12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component13"
              component={Component13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component14"
              component={Component14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component15"
              component={Component15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component16"
              component={Component16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component17"
              component={Component17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component18"
              component={Component18}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component19"
              component={Component19}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component20"
              component={Component20}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component21"
              component={Component21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component22"
              component={Component22}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component18"
              component={GroupComponent4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component18"
              component={GroupComponent5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component18"
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
