import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type GroupComponent110Type = {
  group736?: React.ReactNode;
  prop?: React.ReactNode;
};

const GroupComponent110 = ({ group736, prop }: GroupComponent110Type) => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>₱1980.00</Text>
      <View>{group736 && group736}</View>
      <View>{prop && prop}</View>
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
    fontSize: FontSize.size_16,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.microsoftYaHeiBold,
    color: Color.wz,
    textAlign: "left",
    position: "absolute",
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

export default GroupComponent110;
