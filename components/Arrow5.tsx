import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Arrow5 = () => {
  return <View style={styles.arrowView} />;
};

const styles = StyleSheet.create({
  arrowView: {
    borderStyle: "solid",
    borderColor: Color.colorRed300,
    borderWidth: 2,
    width: 112,
    height: 0,
    transform: [
      {
        rotate: "-178deg",
      },
    ],
  },
});

export default Arrow5;