import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Group736112 from "../assets/group7361";
import Component288 from "../assets/";
import { Color } from "../GlobalStyles";

const GroupComponent4 = () => {
  return (
    <View style={styles.r198000Parent}>
      <Text style={styles.r198000}>₱1980.00</Text>
      <Group736112 style={[styles.instanceChild, styles.iconLayout]} />
      <Component288 style={[styles.icon, styles.iconLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  r198000: {
    top: "0%",
    left: "17.25%",
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: "Arial",
    color: Color.wz2,
    textAlign: "left",
    position: "absolute",
  },
  instanceChild: {
    height: "88.89%",
    width: "12.24%",
    top: "5.56%",
    right: "87.76%",
    bottom: "5.56%",
    left: "0%",
  },
  icon: {
    height: "81.11%",
    width: "12.94%",
    top: "11.11%",
    right: "0%",
    bottom: "7.78%",
    left: "87.06%",
  },
  r198000Parent: {
    height: "1.11%",
    width: "34%",
    top: "5.05%",
    right: "4.67%",
    bottom: "93.85%",
    left: "61.33%",
    position: "absolute",
  },
});

export default GroupComponent4;