const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Component from "./screens/Component1";
import Component10 from "./screens/Component10";
import Component11 from "./screens/Component111";
import Group12784 from "./screens/Group12784";
import Component201 from "./screens/Component201";
import Component1 from "./screens/Component11";
import Component2 from "./screens/Component2";
import Component5 from "./screens/Component5";
import Component7 from "./screens/Component7";
import Component25 from "./screens/Component25";
import Component36 from "./screens/Component36";
import Component38 from "./screens/Component38";
import Component3 from "./screens/Component3";
import Component4 from "./screens/Component4";
import Component6 from "./screens/Component61";
import Component8 from "./screens/Component8";
import Component9 from "./screens/Component9";
import Component12 from "./screens/Component12";
import Component13 from "./screens/Component13";
import Component14 from "./screens/Component14";
import Component15 from "./screens/Component15";
import Component16 from "./screens/Component161";
import Component17 from "./screens/Component17";
import Component18 from "./screens/Component18";
import Component19 from "./screens/Component19";
import Component20 from "./screens/Component20";
import Component21 from "./components/Component21";
import Component22 from "./components/Component22";
import Component23 from "./components/Component23";
import Component24 from "./components/Component24";
import Component26 from "./components/Component26";
import Component27 from "./components/Component27";
import Component28 from "./components/Component28";
import Component29 from "./components/Component29";
import Component30 from "./components/Component30";
import Component31 from "./components/Component31";
import Component32 from "./components/Component32";
import Component33 from "./components/Component33";
import Component34 from "./components/Component34";
import Component35 from "./components/Component35";
import Component37 from "./components/Component37";
import Component39 from "./components/Component39";
import Component40 from "./components/Component40";
import Component41 from "./components/Component41";
import GroupComponent1 from "./components/GroupComponent1";
import GroupComponent12 from "./components/GroupComponent12";
import GroupComponent15 from "./components/GroupComponent15";
import GroupComponent16 from "./components/GroupComponent16";
import GroupComponent8 from "./components/GroupComponent8";
import FrameComponent from "./components/FrameComponent";
import GroupComponent7 from "./components/GroupComponent7";
import GroupComponent9 from "./components/GroupComponent9";
import GroupComponent18 from "./components/GroupComponent18";
import GroupComponent17 from "./components/GroupComponent17";
import Icon1 from "./components/Icon1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="GroupComponent10"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Component"
              component={Component}
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
              name="Group12784"
              component={Group12784}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component201"
              component={Component201}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent11"
              component={Component1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent"
              component={Component2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent2"
              component={Component5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent3"
              component={Component7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component25"
              component={Component25}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent10"
              component={Component36}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent5"
              component={Component38}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component3"
              component={Component3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent1"
              component={Component4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component6"
              component={Component6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent12"
              component={Component8}
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
              name="GroupComponent15"
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
              name="GroupComponent8"
              component={Component30}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent"
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
              name="GroupComponent18"
              component={Component40}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent17"
              component={Component41}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent1"
              component={GroupComponent1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent12"
              component={GroupComponent12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent15"
              component={GroupComponent15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent15"
              component={GroupComponent16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent8"
              component={GroupComponent8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent"
              component={FrameComponent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent"
              component={GroupComponent7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent"
              component={GroupComponent9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent18"
              component={GroupComponent18}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent17"
              component={GroupComponent17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupComponent17"
              component={Icon1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
