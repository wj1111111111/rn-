import * as React from "react";
import { StyleSheet, View } from "react-native";

const Arrow6 = () => {
  return <View style={styles.arrowView} />;
};

const styles = StyleSheet.create({
  arrowView: {
    borderStyle: "solid",
    borderColor: "#ff0000",
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

export default Arrow6;
