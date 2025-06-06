import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Group736142 from "../assets/group7361";
import Component433 from "../assets/";
import Stroke36 from "../assets/stroke";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const GroupComponent121 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.rectangleParent, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.r198000Parent}>
          <Text style={[styles.r198000, styles.r198000Typo]}>R$1980.00</Text>
          <Group736142 style={[styles.groupItem, styles.iconLayout]} />
          <Component433 style={[styles.icon, styles.iconLayout]} />
        </View>
      </View>
      <Stroke36 style={[styles.strokeIcon, styles.pgSlotsPosition]} />
      <Text style={[styles.pgSlots, styles.pgSlotsPosition]}>
        Notifications
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: "0%",
    position: "absolute",
  },
  r198000Typo: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  pgSlotsPosition: {
    top: "55.81%",
    position: "absolute",
  },
  groupChild: {
    shadowColor: Color.colorGray2100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    backgroundColor: Color.bg1,
    bottom: "0%",
    width: "100%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
  r198000: {
    left: "17.25%",
    lineHeight: 18,
    color: Color.colorOrange100,
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
    position: "absolute",
  },
  groupItem: {
    height: "88.89%",
    width: "12.24%",
    top: "5.56%",
    right: "87.76%",
    bottom: "5.56%",
    left: "0%",
    position: "absolute",
  },
  icon: {
    height: "81.11%",
    width: "12.94%",
    top: "11.11%",
    bottom: "7.78%",
    left: "87.06%",
    right: "0%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  r198000Parent: {
    height: "20.93%",
    width: "34%",
    top: "54.65%",
    right: "5.47%",
    bottom: "24.42%",
    left: "60.53%",
    display: "none",
    position: "absolute",
  },
  rectangleParent: {
    bottom: "0%",
    width: "100%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
  strokeIcon: {
    height: "18.6%",
    width: "2.45%",
    right: "93.47%",
    bottom: "25.58%",
    left: "4.08%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  pgSlots: {
    left: "8.8%",
    lineHeight: 16,
    textTransform: "capitalize",
    color: Color.color,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
  },
  groupParent: {
    top: 0,
    left: 0,
    width: 375,
    height: 86,
    position: "absolute",
  },
});

export default GroupComponent121;
