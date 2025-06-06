import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Group7369 from "../assets/group736";
import Component90 from "../assets/";
import { Color } from "../GlobalStyles";

const GroupComponent1 = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>₱1980.00</Text>
      <Group7369 style={[styles.instanceChild, styles.iconLayout]} />
      <Component90 style={[styles.icon, styles.iconLayout]} />
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
  text: {
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
  parent: {
    height: "1.88%",
    width: "34%",
    top: "8.56%",
    right: "4.67%",
    bottom: "89.56%",
    left: "61.33%",
    position: "absolute",
  },
});

export default GroupComponent1;
