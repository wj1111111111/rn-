import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Component440 from "../assets/";
import Component441 from "../assets/";
import Vector1218 from "../assets/vector12";
import Component442 from "../assets/";
import Component443 from "../assets/";
import Vector1314 from "../assets/vector13";
import Component444 from "../assets/";
import Group84814 from "../assets/group848";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const GroupComponent4 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.receiveRewardsAfter, styles.usernameTypo1]}>
          Receive rewards after completing mobilephone verification
        </Text>
        <Component440 style={[styles.icon, styles.iconLayout]} />
        <Text style={[styles.username, styles.usernameTypo]}>1234|</Text>
        <Component441 style={[styles.icon1, styles.iconLayout]} />
        <Text style={[styles.username1, styles.loginTypo]}>+55</Text>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <Vector1218 style={[styles.vectorIcon, styles.iconLayout]} />
        <Image
          style={styles.d62a6059252dd42a1fed252c093b5bIcon}
          resizeMode="cover"
          source={require("../assets/d62a6059252dd42a1fed252c093b5bb5c8eab854-1.png")}
        />
        <View style={[styles.parent, styles.icon2Layout]}>
          <Component442
            style={[styles.icon2, styles.iconPosition]}
            width={321}
            height={48}
          />
          <View style={[styles.group, styles.groupLayout]}>
            <Component443
              style={[styles.icon3, styles.groupLayout]}
              width={77}
              height={34}
            />
            <Text style={[styles.confirmPassword, styles.username1Typo]}>
              send
            </Text>
          </View>
          <Text style={[styles.confirmPassword1, styles.loginTypo]}>SMS</Text>
          <Vector1314 style={[styles.vectorIcon1, styles.iconLayout]} />
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/group-12051.png")}
        />
        <View style={[styles.container, styles.icon4Layout]}>
          <Component444
            style={[styles.icon4, styles.icon4Layout]}
            width={322}
            height={50}
          />
          <Text style={[styles.login, styles.loginTypo]}>
            Complete verification
          </Text>
        </View>
      </View>
      <Group84814 style={styles.groupIcon} width={32} height={32} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 262,
    top: 0,
    width: 345,
    left: "50%",
    marginLeft: -172.5,
  },
  groupBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  usernameTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  usernameTypo: {
    lineHeight: 12,
    textTransform: "capitalize",
    fontSize: FontSize.size_14,
  },
  loginTypo: {
    color: Color.wz1,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon2Layout: {
    height: 48,
    width: 321,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    top: 0,
  },
  groupLayout: {
    height: 34,
    width: 77,
    position: "absolute",
  },
  username1Typo: {
    fontSize: FontSize.size_12,
    lineHeight: 12,
  },
  icon4Layout: {
    height: 50,
    width: 322,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_12,
    backgroundColor: Color.bg,
    borderColor: Color.colorDarkslategray600,
    borderWidth: 1,
    opacity: 0.98,
    height: 262,
    top: 0,
    width: 345,
    left: "50%",
    marginLeft: -172.5,
  },
  receiveRewardsAfter: {
    top: 16,
    left: 16,
    color: Color.color,
    width: 313,
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
  },
  icon: {
    height: "18.32%",
    width: "93.04%",
    top: "22.9%",
    right: "3.48%",
    bottom: "58.78%",
    left: "3.48%",
    borderRadius: Border.br_8,
  },
  username: {
    width: "36.52%",
    left: "35.65%",
    top: "29.77%",
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon1: {
    height: "6.11%",
    width: "5.42%",
    top: "29.01%",
    right: "7.04%",
    bottom: "64.89%",
    left: "87.54%",
  },
  username1: {
    width: "6.35%",
    left: "23.59%",
    fontSize: FontSize.size_12,
    lineHeight: 12,
    top: "29.77%",
  },
  groupItem: {
    height: "9.54%",
    width: "0.29%",
    top: "27.48%",
    right: "66.96%",
    bottom: "62.98%",
    left: "32.75%",
    borderColor: Color.colorDarkslategray100,
    borderRightWidth: 1,
  },
  vectorIcon: {
    height: "6.83%",
    width: "3.94%",
    top: "28.63%",
    right: "89.1%",
    bottom: "64.54%",
    left: "6.96%",
  },
  d62a6059252dd42a1fed252c093b5bIcon: {
    marginTop: -56,
    top: "50%",
    left: 49,
    borderRadius: Border.br_2,
    width: 26,
    height: 18,
    position: "absolute",
  },
  icon2: {
    position: "absolute",
    borderRadius: Border.br_8,
  },
  icon3: {
    borderRadius: Border.br_4,
    left: 0,
    top: 0,
  },
  confirmPassword: {
    top: 11,
    left: 24,
    color: Color.colorDimgray200,
    textAlign: "center",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
    textTransform: "capitalize",
    position: "absolute",
  },
  group: {
    top: 7,
    left: 232,
  },
  confirmPassword1: {
    top: 18,
    left: 37,
    lineHeight: 12,
    textTransform: "capitalize",
    fontSize: FontSize.size_14,
  },
  vectorIcon1: {
    height: "35.63%",
    width: "4.74%",
    top: "31.25%",
    right: "91.53%",
    bottom: "33.12%",
    left: "3.74%",
  },
  parent: {
    top: 120,
    left: 12,
  },
  groupInner: {
    width: 0,
    height: 0,
  },
  icon4: {
    borderRadius: Border.br_36,
    left: 0,
    top: 0,
  },
  login: {
    marginLeft: -81,
    top: 17,
    fontSize: FontSize.size_16,
    textTransform: "capitalize",
    lineHeight: 16,
    left: "50%",
    color: Color.wz1,
  },
  container: {
    top: 192,
    left: 12,
  },
  rectangleParent: {
    position: "absolute",
  },
  groupIcon: {
    top: 278,
    left: 157,
    position: "absolute",
  },
  groupParent: {
    top: 240,
    height: 310,
    width: 345,
    marginLeft: -172.5,
    left: "50%",
    position: "absolute",
  },
});

export default GroupComponent4;