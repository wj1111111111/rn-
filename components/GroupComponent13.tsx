import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import Group7361145 from "../assets/group73611";
import Component441 from "../assets/";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type GroupComponent13Type = {
  /** Style props */
  groupViewBottom?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent13 = ({ groupViewBottom }: GroupComponent13Type) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("bottom", groupViewBottom),
    };
  }, [groupViewBottom]);

  return (
    <View style={[styles.parent, groupViewStyle]}>
      <Text style={styles.text}>₱1980.00</Text>
      <Group7361145 style={[styles.instanceChild, styles.iconLayout]} />
      <Component441 style={[styles.icon, styles.iconLayout]} />
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
    left: "18.72%",
    fontSize: FontSize.size_16,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.microsoftYaHeiBold,
    color: Color.wz,
    textAlign: "right",
    position: "absolute",
  },
  instanceChild: {
    height: "88.89%",
    width: "13.28%",
    top: "5.56%",
    right: "86.72%",
    bottom: "5.56%",
    left: "0%",
  },
  icon: {
    height: "81.11%",
    width: "14.04%",
    top: "11.11%",
    right: "0%",
    bottom: "7.78%",
    left: "85.96%",
  },
  parent: {
    width: "31.33%",
    right: "5.47%",
    bottom: 747,
    left: "63.2%",
    height: 18,
    position: "absolute",
  },
});

export default GroupComponent13;