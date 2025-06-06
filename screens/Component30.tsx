import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import Group736138 from "../assets/group7361";
import Component395 from "../assets/";
import Stroke34 from "../assets/stroke";
import GroupComponent8 from "../components/GroupComponent8";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Component30 = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={styles.r198000Parent}>
            <Text style={[styles.r198000, styles.r198000Typo]}>R$1980.00</Text>
            <Group736138 style={[styles.groupItem, styles.iconLayout]} />
            <Component395 style={[styles.icon, styles.iconLayout]} />
          </View>
        </View>
        <Stroke34 style={[styles.strokeIcon, styles.iconLayout]} />
        <Text style={[styles.pgSlots, styles.noDataTypo]}>Notice</Text>
      </View>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/-16.png")}
      />
      <GroupComponent8 />
      <Text style={[styles.noData, styles.noDataTypo]}>No data</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  r198000Typo: {
    textAlign: "left",
    fontSize: FontSize.size_16,
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  noDataTypo: {
    textTransform: "capitalize",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
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
    left: "0%",
  },
  r198000: {
    left: "17.25%",
    lineHeight: 18,
    color: Color.colorOrange100,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_16,
    top: "0%",
    position: "absolute",
  },
  groupItem: {
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
    bottom: "7.78%",
    left: "87.06%",
    right: "0%",
    overflow: "hidden",
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
    left: "0%",
  },
  strokeIcon: {
    height: "18.6%",
    width: "2.45%",
    right: "93.47%",
    bottom: "25.58%",
    left: "4.08%",
    top: "55.81%",
  },
  pgSlots: {
    left: "8.8%",
    lineHeight: 16,
    color: Color.color,
    top: "55.81%",
    textAlign: "left",
    fontSize: FontSize.size_16,
    textTransform: "capitalize",
  },
  groupParent: {
    top: 0,
    left: 0,
    width: 375,
    height: 86,
    position: "absolute",
  },
  icon1: {
    top: 7,
    left: 10,
    width: 356,
    height: 13,
    position: "absolute",
  },
  noData: {
    marginLeft: -26.5,
    top: 318,
    left: "50%",
    fontSize: FontSize.size_14,
    lineHeight: 12,
    color: Color.wz1,
    textAlign: "center",
  },
  scrollview: {
    backgroundColor: Color.bg,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default Component30;
