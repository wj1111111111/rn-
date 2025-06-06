const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Component9 from "./screens/Component9";
import Group12784 from "./screens/Group12784";
import Component25 from "./screens/Component";
import Component36 from "./screens/Component16";
import Component38 from "./screens/Component6";
import Component from "./components/Component";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import Component6 from "./components/Component6";
import Component7 from "./components/Component7";
import Component8 from "./components/Component8";
import Component10 from "./components/Component10";
import Component11 from "./components/Component11";
import Component12 from "./components/Component12";
import Component13 from "./components/Component13";
import Component14 from "./components/Component14";
import Component15 from "./components/Component15";
import Component16 from "./components/Component16";
import Component17 from "./components/Component17";
import Component18 from "./components/Component18";
import Component19 from "./components/Component19";
import Component20 from "./components/Component20";
import Component21 from "./screens/Component1";
import Component22 from "./screens/Component11";
import Component23 from "./screens/Component2";
import Component24 from "./screens/Component31";
import Component26 from "./screens/Component12";
import Component27 from "./screens/Component21";
import Component28 from "./screens/Component3";
import Component29 from "./screens/Component9";
import Component30 from "./screens/Component10";
import Component31 from "./screens/Component4";
import Component32 from "./screens/Component121";
import Component33 from "./screens/Component13";
import Component34 from "./screens/Component14";
import Component35 from "./screens/Component15";
import Component37 from "./screens/Component17";
import Component39 from "./screens/Component19";
import Component201 from "./screens/Component20";
import Component40 from "./screens/Component211";
import Component41 from "./screens/Component22";
import GroupComponent8 from "./components/GroupComponent8";
import FrameComponent from "./components/FrameComponent";
import GroupComponent7 from "./components/GroupComponent7";
import GroupComponent9 from "./components/GroupComponent9";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Component36"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Component9"
              component={Component9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group12784"
              component={Group12784}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component25"
              component={Component25}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component36"
              component={Component36}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component38"
              component={Component38}
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
              name="Component4"
              component={Component4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component5"
              component={Component5}
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
              name="Component11"
              component={Component11}
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
              name="Component23"
              component={Component23}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component24"
              component={Component24}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component26"
              component={Component26}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component27"
              component={Component27}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component28"
              component={Component28}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component29"
              component={Component29}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component30"
              component={Component30}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component31"
              component={Component31}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component32"
              component={Component32}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component33"
              component={Component33}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component34"
              component={Component34}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component35"
              component={Component35}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component37"
              component={Component37}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component39"
              component={Component39}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component201"
              component={Component201}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component40"
              component={Component40}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component41"
              component={Component41}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component30"
              component={GroupComponent8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component31"
              component={FrameComponent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component31"
              component={GroupComponent7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component31"
              component={GroupComponent9}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
