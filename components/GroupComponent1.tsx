import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Group73614 from "../assets/group7361";
import Component442 from "../assets/";
import Stroke111 from "../assets/stroke1";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const GroupComponent1 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.childPosition]} />
      <Text style={[styles.register, styles.registerTypo]}>General</Text>
      <View style={[styles.groupWrapper, styles.frameItemPosition]}>
        <View style={[styles.r198000Parent, styles.childPosition]}>
          <Text style={[styles.r198000, styles.registerTypo]}>R$1980.00</Text>
          <Group73614 style={[styles.groupChild, styles.iconLayout]} />
          <Component442 style={[styles.icon, styles.iconLayout]} />
        </View>
      </View>
      <Text style={[styles.register1, styles.registerTypo]}>Bank Account</Text>
      <Image
        style={[styles.icon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-16.png")}
      />
      <View style={[styles.frameItem, styles.frameItemPosition]} />
      <Stroke111 style={[styles.strokeIcon, styles.iconLayout]} />
      <Text style={[styles.setting, styles.registerTypo]}>Setting</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  registerTypo: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameItemPosition: {
    display: "none",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  frameChild: {
    shadowColor: Color.colorGray2100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    backgroundColor: Color.bg1,
    right: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  register: {
    left: "8.8%",
    color: Color.wz1,
    top: "75.4%",
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_16,
  },
  r198000: {
    left: "16.24%",
    fontSize: FontSize.size_18,
    lineHeight: 18,
    color: Color.wz,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    top: "0%",
  },
  groupChild: {
    width: "12.92%",
    right: "87.08%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  icon: {
    height: "81.11%",
    width: "12.18%",
    top: "11.11%",
    bottom: "7.78%",
    left: "87.82%",
    right: "0%",
  },
  r198000Parent: {
    right: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  groupWrapper: {
    height: "14.29%",
    width: "36.13%",
    top: "37.3%",
    right: "5.47%",
    bottom: "48.41%",
    left: "58.4%",
  },
  register1: {
    marginLeft: -46.5,
    fontSize: FontSize.size_14,
    color: Color.wz1,
    top: "75.4%",
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 16,
    left: "50%",
  },
  icon1: {
    height: "10.32%",
    width: "94.93%",
    top: "5.56%",
    right: "2.4%",
    bottom: "84.13%",
    left: "2.67%",
  },
  frameItem: {
    height: "1.59%",
    width: "18.13%",
    top: "99.21%",
    right: "74.13%",
    bottom: "-0.79%",
    left: "7.73%",
    borderStyle: "solid",
    borderColor: Color.color3,
    borderTopWidth: 2,
  },
  strokeIcon: {
    height: "10.56%",
    width: "2.05%",
    top: "38.89%",
    right: "93.87%",
    bottom: "50.56%",
    left: "4.08%",
  },
  setting: {
    top: "38.1%",
    left: "8.27%",
    color: Color.color,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_16,
  },
  rectangleParent: {
    marginLeft: -187.5,
    top: 0,
    width: 375,
    height: 126,
    left: "50%",
    position: "absolute",
  },
});

export default GroupComponent1;