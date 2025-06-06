import * as React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Component443 from "../assets/";
import Component444 from "../assets/";
import Component445 from "../assets/";
import Component446 from "../assets/";
import Vector1112 from "../assets/vector11";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const GroupComponent2 = () => {
  return (
    <View style={styles.parent}>
      <Component443 style={[styles.icon, styles.iconLayout]} />
      <Component444 style={[styles.icon1, styles.iconPosition]} />
      <Component445 style={[styles.icon2, styles.iconPosition]} />
      <Component446 style={[styles.icon3, styles.iconPosition]} />
      <Text style={[styles.members, styles.depositTypo]}>Home</Text>
      <Text style={styles.promotion}>Promotion</Text>
      <Text style={[styles.home, styles.depositTypo]}>Teams</Text>
      <Text style={[styles.deposit, styles.depositTypo]}>Deposit</Text>
      <Text style={[styles.deposit1, styles.depositTypo]}>Invite</Text>
      <Vector1112 style={[styles.vectorIcon, styles.iconPosition]} />
      <Image
        style={[styles.invite1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/invite-11.png")}
      />
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
  iconPosition: {
    bottom: "40.51%",
    top: "34.18%",
    height: "25.32%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  depositTypo: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_12,
    top: "65.82%",
    position: "absolute",
  },
  icon: {
    height: "81.01%",
    width: "100%",
    top: "18.99%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  icon1: {
    width: "5.2%",
    right: "7.33%",
    left: "87.47%",
  },
  icon2: {
    width: "5.28%",
    right: "26.72%",
    left: "68%",
  },
  icon3: {
    width: "5.36%",
    right: "67.71%",
    left: "26.93%",
  },
  members: {
    left: "5.33%",
    color: Color.wz1,
  },
  promotion: {
    left: "21.6%",
    textAlign: "center",
    color: Color.wz1,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_12,
    top: "65.82%",
    position: "absolute",
  },
  home: {
    left: "83.73%",
    color: Color.color3,
  },
  deposit: {
    left: "64.53%",
    color: Color.wz1,
  },
  deposit1: {
    left: "45.87%",
    color: Color.wz1,
  },
  vectorIcon: {
    width: "6.32%",
    right: "87.01%",
    left: "6.67%",
  },
  invite1Icon: {
    height: "68.35%",
    width: "14.4%",
    top: "-6.33%",
    right: "42.67%",
    bottom: "37.97%",
    left: "42.93%",
  },
  parent: {
    marginLeft: -187.5,
    bottom: 88,
    left: "50%",
    width: 375,
    height: 79,
    position: "absolute",
  },
});

export default GroupComponent2;