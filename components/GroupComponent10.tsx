import * as React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Component459 from "../assets/";
import Group130041 from "../assets/group13004";
import Ellipse3022 from "../assets/ellipse302";
import Ellipse3032 from "../assets/ellipse303";
import Vector2012 from "../assets/vector201";
import Subtract2 from "../assets/subtract";
import Ellipse3041 from "../assets/ellipse304";
import Subtract11 from "../assets/subtract1";
import Component460 from "../assets/";
import Union111 from "../assets/union11";
import Component461 from "../assets/";
import Vector2212 from "../assets/vector221";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const GroupComponent10 = () => {
  return (
    <View style={styles.parent}>
      <Component459 style={[styles.icon, styles.iconPosition]} />
      <Text style={[styles.promotion, styles.depositTypo]}>Deposit</Text>
      <Text style={[styles.home, styles.homeTypo]}>Teams</Text>
      <Text style={[styles.deposit, styles.depositTypo]}>Promotion</Text>
      <Text style={[styles.deposit1, styles.homeTypo]}>Invite</Text>
      <Group130041 style={[styles.groupChild, styles.groupChildPosition]} />
      <Ellipse3022 style={styles.groupItem} width={56} height={56} />
      <Ellipse3032
        style={[styles.groupInner, styles.icon2Layout]}
        width={46}
        height={46}
      />
      <Vector2012 style={[styles.vectorIcon, styles.groupChildLayout]} />
      <Subtract2 style={styles.subtractIcon} width={44} height={15} />
      <Ellipse3041 style={styles.ellipseIcon} width={3} height={3} />
      <Subtract11 style={styles.subtractIcon1} width={43} height={14} />
      <Component460 style={styles.subtractIcon} width={44} height={15} />
      <Union111 style={styles.unionIcon} width={33} height={8} />
      <Component461
        style={[styles.icon2, styles.icon2Layout]}
        width={46}
        height={31}
      />
      <Text style={[styles.members, styles.homeTypo]}>Home</Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-13007.png")}
      />
      <Image
        style={styles.groupChild1}
        resizeMode="cover"
        source={require("../assets/group-13046.png")}
      />
      <View style={[styles.vectorParent, styles.groupChildPosition]}>
        <Vector2212 style={[styles.vectorIcon1, styles.iconPosition]} />
        <LinearGradient
          style={styles.rectangleLineargradient}
          locations={[0.1, 1]}
          colors={["#fff", "#85d420"]}
          useAngle={true}
          angle={180}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  depositTypo: {
    textAlign: "center",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_12,
    top: "74.36%",
    color: Color.wz1,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_12,
    top: "74.36%",
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "34.62%",
    position: "absolute",
  },
  icon2Layout: {
    width: 46,
    position: "absolute",
  },
  groupChildLayout: {
    height: "32.05%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  icon: {
    height: "82.05%",
    top: "17.95%",
  },
  promotion: {
    left: "23.73%",
  },
  home: {
    left: "83.73%",
    color: Color.color3,
  },
  deposit: {
    left: "62.4%",
  },
  deposit1: {
    left: "45.87%",
    color: Color.wz1,
    textAlign: "left",
  },
  groupChild: {
    width: "6.93%",
    top: "33.33%",
    right: "66.67%",
    left: "26.4%",
    height: "32.05%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupItem: {
    top: 0,
    left: 160,
    position: "absolute",
  },
  groupInner: {
    top: 5,
    left: 165,
  },
  vectorIcon: {
    width: "7.2%",
    top: "12.82%",
    right: "46.13%",
    bottom: "55.13%",
    left: "46.67%",
    position: "absolute",
  },
  subtractIcon: {
    top: 33,
    left: 163,
    position: "absolute",
  },
  ellipseIcon: {
    top: 38,
    left: 202,
    position: "absolute",
  },
  subtractIcon1: {},
  unionIcon: {},
  icon2: {
    marginLeft: -16.4,
    bottom: 23,
    left: "50%",
  },
  members: {
    left: "6.67%",
    color: Color.wz1,
    textAlign: "left",
  },
  groupIcon: {
    top: 28,
    left: 31,
    width: 24,
    height: 23,
    position: "absolute",
  },
  groupChild1: {
    top: 14,
    left: 314,
    width: 42,
    height: 42,
    position: "absolute",
  },
  vectorIcon1: {
    height: "100%",
    top: "0%",
  },
  rectangleLineargradient: {
    top: 6,
    left: 10,
    shadowColor: Color.colorGray1600,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: Border.br_30,
    width: 4,
    height: 17,
    backgroundColor: "transparent",
    position: "absolute",
  },
  vectorParent: {
    height: "30.77%",
    width: "6.4%",
    top: "34.62%",
    right: "26.13%",
    left: "67.47%",
  },
  parent: {
    height: "8.39%",
    top: "91.61%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
});

export default GroupComponent10;