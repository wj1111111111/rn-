import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Component455 from "../assets/";
import Component456 from "../assets/";
import Component457 from "../assets/";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const GroupComponent18 = () => {
  return (
    <View style={styles.parent}>
      <Component455 style={[styles.icon, styles.iconLayout]} />
      <Text style={styles.password}>Password</Text>
      <Component456 style={[styles.icon1, styles.iconLayout]} />
      <Component457 style={[styles.icon2, styles.iconLayout]} />
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
  icon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8,
  },
  password: {
    width: "22.09%",
    top: "37.5%",
    left: "11.04%",
    fontSize: FontSize.size_14,
    lineHeight: 12,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.microsoftYaHeiBold,
    color: Color.wz1,
    textAlign: "left",
    position: "absolute",
  },
  icon1: {
    height: "28.54%",
    width: "6.21%",
    top: "35.42%",
    right: "3.64%",
    bottom: "36.04%",
    left: "90.15%",
  },
  icon2: {
    height: "36.25%",
    width: "4.48%",
    top: "31.25%",
    right: "91.94%",
    bottom: "32.5%",
    left: "3.58%",
  },
  parent: {
    height: "5.91%",
    width: "89.33%",
    top: "27.22%",
    right: "5.33%",
    bottom: "66.87%",
    left: "5.33%",
    position: "absolute",
  },
});

export default GroupComponent18;
