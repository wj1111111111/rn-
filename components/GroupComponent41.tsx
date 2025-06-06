import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type GroupComponent41Type = {
  group736?: React.ReactNode;
  prop?: React.ReactNode;
};

const GroupComponent41 = ({ group736, prop }: GroupComponent41Type) => {
  return (
    <View style={styles.r198000Parent}>
      <Text style={styles.r198000}>₱1980.00</Text>
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
  r198000: {
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

export default GroupComponent41;
