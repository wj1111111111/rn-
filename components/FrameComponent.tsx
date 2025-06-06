import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Vector1172 from "../assets/vector117";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
      <View style={styles.frameChild} />
      <Image
        style={styles.image218Icon}
        resizeMode="cover"
        source={require("../assets/image-218.png")}
      />
      <Image
        style={styles.a6c3db9cFb48485cA445Ae6ecfIcon}
        resizeMode="cover"
        source={require("../assets/a6c3db9cfb48485ca445ae6ecfac231b1.png")}
      />
      <View style={styles.vectorParent}>
        <Vector1172 style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.day2312, styles.textFlexBox]}>20Day 23:12</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text, styles.textFlexBox]}>6</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 29,
    position: "absolute",
  },
  groupLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  frameChild: {
    left: 5,
    borderRadius: 88,
    backgroundColor: Color.colorGray1200,
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen,
    borderWidth: 2,
    width: 78,
    height: 78,
    top: 4,
    position: "absolute",
  },
  image218Icon: {
    top: 6,
    left: 7,
    borderRadius: 97,
    width: 74,
    height: 74,
    position: "absolute",
  },
  a6c3db9cFb48485cA445Ae6ecfIcon: {
    top: 17,
    left: 21,
    width: 46,
    height: 46,
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  day2312: {
    height: "77.78%",
    width: "91.14%",
    top: "16.67%",
    left: "3.8%",
    fontSize: FontSize.size_12,
    color: Color.colorPalegoldenrod100,
  },
  vectorParent: {
    height: "21.95%",
    width: "89.77%",
    top: "48.78%",
    right: "4.55%",
    bottom: "29.27%",
    left: "5.68%",
    position: "absolute",
  },
  groupItem: {
    top: 0,
    left: 0,
    borderRadius: Border.br_60,
    backgroundColor: Color.colorCrimson,
  },
  text: {
    top: 5,
    left: 8,
    fontSize: FontSize.size_14,
    color: Color.color,
    width: 5,
    height: 10,
  },
  rectangleGroup: {
    left: 64,
    top: 4,
  },
  rectangleParent: {
    top: 509,
    left: 176,
    width: 88,
    height: 82,
  },
});

export default FrameComponent;