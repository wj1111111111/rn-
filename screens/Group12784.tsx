import * as React from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Border } from "../GlobalStyles";

const Group12784 = () => {
  return (
    <SafeAreaView style={styles.rectangleParent}>
      <LinearGradient
        style={styles.groupChild}
        locations={[0, 1]}
        colors={["#ff5548", "#ff494c"]}
        useAngle={true}
        angle={180}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_6,
    width: 52,
    backgroundColor: "transparent",
    height: 32,
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 32,
  },
});

export default Group12784;