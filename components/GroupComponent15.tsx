import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type GroupComponent15Type = {
  prop?: string;
  vector?: React.ReactNode;

  /** Style props */
  groupViewTop?: number | string;
  textColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent15 = ({
  groupViewTop,
  prop,
  textColor,
  vector,
}: GroupComponent15Type) => {
  const groupView5Style = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
    };
  }, [groupViewTop]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View style={[styles.parent, groupView5Style]}>
      <Text style={[styles.text, text1Style]}>{prop}</Text>
      <View>{vector && vector}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    top: "0%",
    left: "16.3%",
    fontSize: FontSize.size_16,
    fontWeight: "700",
    fontFamily: FontFamily.microsoftYaHeiBold,
    color: Color.colorRosybrown,
    textAlign: "left",
    position: "absolute",
  },
  parent: {
    top: 10,
    left: 132,
    width: 92,
    height: 16,
    position: "absolute",
  },
});

export default GroupComponent15;
