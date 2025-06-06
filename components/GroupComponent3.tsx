import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Vector1103 from "../assets/vector1";
import Vector1119 from "../assets/vector11";
import Vector215 from "../assets/vector2";
import Vector38 from "../assets/vector3";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent3 = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={[styles.depositRecord, styles.recordTypo]}>
        Deposit Record
      </Text>
      <Text style={[styles.withdrawalRecord, styles.recordTypo]}>
        Withdrawal Record
      </Text>
      <Text style={[styles.bettingRecord, styles.recordTypo]}>{`Betting
Record`}</Text>
      <Text style={[styles.accountRecord, styles.recordTypo]}>{`Account
Record`}</Text>
      <Vector1103 style={[styles.vectorIcon, styles.vectorIconLayout]} />
      <Vector1119 style={[styles.vectorIcon1, styles.vectorIconLayout]} />
      <Vector215 style={[styles.vectorIcon2, styles.vectorIconLayout]} />
      <Vector38 style={[styles.vectorIcon3, styles.vectorIconLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 81,
    width: 345,
    position: "absolute",
  },
  recordTypo: {
    textAlign: "center",
    color: Color.wz1,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_12,
    top: 45,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "16.05%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_8,
    backgroundColor: Color.bg3,
  },
  depositRecord: {
    left: 176,
    width: 63,
  },
  withdrawalRecord: {
    left: 252,
    width: 77,
  },
  bettingRecord: {
    left: 21,
  },
  accountRecord: {
    left: 100,
  },
  vectorIcon: {
    right: "84.06%",
    left: "8.41%",
    bottom: "51.85%",
    height: "32.1%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "16.05%",
    width: "7.54%",
  },
  vectorIcon1: {
    width: "5.97%",
    right: "60.99%",
    left: "33.04%",
    bottom: "51.85%",
    height: "32.1%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "16.05%",
  },
  vectorIcon2: {
    height: "31.98%",
    right: "36.52%",
    bottom: "51.98%",
    left: "55.94%",
    borderRadius: Border.br_6,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "16.05%",
    width: "7.54%",
  },
  vectorIcon3: {
    width: "7.07%",
    right: "12.35%",
    left: "80.58%",
    bottom: "51.85%",
    height: "32.1%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "16.05%",
  },
  rectangleParent: {
    top: 284,
    left: 15,
  },
});

export default GroupComponent3;