import * as React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import Component517 from "../assets/";
import Component518 from "../assets/";
import Component519 from "../assets/";
import Vector3112 from "../assets/vector31";
import { Color } from "../GlobalStyles";

export type GroupComponentType = {
  prop?: React.ReactNode;
};

const GroupComponent = ({ prop }: GroupComponentType) => {
  return (
    <View style={styles.parent}>
      <View>{prop && prop}</View>
      <Component517 style={[styles.icon1, styles.iconPosition]} />
      <Component518 style={[styles.icon2, styles.iconPosition]} />
      <Component519 style={[styles.icon3, styles.iconPosition]} />
      <Text style={styles.members}>Home</Text>
      <Text style={[styles.promotion, styles.depositTypo]}>Promotion</Text>
      <Text style={[styles.home, styles.depositTypo]}>Teams</Text>
      <Text style={[styles.deposit, styles.depositTypo]}>Deposit</Text>
      <Text style={[styles.deposit1, styles.depositTypo]}>Invite</Text>
      <Vector3112 style={[styles.vectorIcon, styles.iconPosition]} />
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
    color: Color.wz1,
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    fontSize: 12,
    top: "65.82%",
    position: "absolute",
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
    color: Color.color3,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    fontSize: 12,
    top: "65.82%",
    position: "absolute",
  },
  promotion: {
    left: "21.6%",
    textAlign: "center",
  },
  home: {
    left: "83.73%",
    textAlign: "left",
  },
  deposit: {
    left: "64.53%",
    textAlign: "left",
  },
  deposit1: {
    left: "45.87%",
    textAlign: "left",
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
    bottom: 0,
    left: "50%",
    width: 375,
    height: 79,
    position: "absolute",
  },
});

export default GroupComponent;