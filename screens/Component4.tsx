import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Group4482 from "../assets/group448";
import Group4483 from "../assets/group448";
import Component306 from "../assets/";
import Component307 from "../assets/";
import Component308 from "../assets/";
import Component309 from "../assets/";
import Component310 from "../assets/";
import Component311 from "../assets/";
import Component312 from "../assets/";
import Component313 from "../assets/";
import Component314 from "../assets/";
import Component315 from "../assets/";
import Component316 from "../assets/";
import Group4521 from "../assets/group452";
import Group7364 from "../assets/group736";
import Component317 from "../assets/";
import Stroke19 from "../assets/stroke1";
import Vector39 from "../assets/vector";
import Group736135 from "../assets/group7361";
import Component318 from "../assets/";
import Group125172 from "../assets/group12517";
import Group125173 from "../assets/group12517";
import { Color } from "../GlobalStyles";

const Component4 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={[styles.child, styles.itemLayout]} />
      <Text style={[styles.forgotPassword, styles.passwordTypo]}>
        Forgot password?
      </Text>
      <View style={[styles.item, styles.itemLayout]} />
      <Group4482
        style={[styles.inner, styles.innerLayout]}
        width={321}
        height={48}
      />
      <Group4483
        style={[styles.groupIcon, styles.innerLayout]}
        width={321}
        height={48}
      />
      <Text style={[styles.fundPassword, styles.textTypo]}>Fund Password</Text>
      <Text style={[styles.pleaseCreateA, styles.textTypo]}>
        Please create a login password
      </Text>
      <Text style={[styles.setAFund, styles.passwordTypo]}>
        Set a fund password to make your account more secure.
      </Text>
      <Text style={[styles.oldPassword, styles.passwordTypo]}>
        Old Password
      </Text>
      <Component306 style={styles.icon} width={6} height={5} />
      <Component307
        style={[styles.icon1, styles.iconPosition2]}
        width={6}
        height={5}
      />
      <Component308
        style={[styles.icon2, styles.iconPosition1]}
        width={6}
        height={5}
      />
      <Component309
        style={[styles.icon3, styles.iconPosition2]}
        width={6}
        height={5}
      />
      <Component310
        style={[styles.icon4, styles.iconPosition1]}
        width={6}
        height={5}
      />
      <Text style={[styles.newPassword, styles.passwordTypo]}>
        New Password
      </Text>
      <Text style={[styles.newPassword1, styles.passwordTypo]}>
        New Password
      </Text>
      <Text style={[styles.confirmNewPassword, styles.passwordTypo]}>
        Confirm New Password
      </Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <LinearGradient
          style={styles.groupShadowBox}
          locations={[0, 1]}
          colors={["#373c42", "#2c3135"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <LinearGradient
          style={styles.groupShadowBox}
          locations={[0, 1]}
          colors={["#76cd00", "#478a03"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.save1, styles.saveTypo]}>Save</Text>
      </View>
      <Text style={[styles.confirmNewPassword1, styles.passwordTypo]}>
        Confirm New Password
      </Text>
      <Component311
        style={[styles.icon5, styles.iconLayout2]}
        width={321}
        height={48}
      />
      <Component312
        style={[styles.icon6, styles.iconLayout1]}
        width={20}
        height={14}
      />
      <Component313
        style={[styles.icon7, styles.iconLayout]}
        width={14}
        height={17}
      />
      <Component314
        style={[styles.icon8, styles.iconLayout2]}
        width={321}
        height={48}
      />
      <Component315
        style={[styles.icon9, styles.iconLayout1]}
        width={20}
        height={14}
      />
      <Component316
        style={[styles.icon10, styles.iconLayout]}
        width={14}
        height={17}
      />
      <View style={styles.lineView} />
      <Group4521
        style={[styles.child1, styles.innerLayout]}
        width={321}
        height={48}
      />
      <Text style={[styles.text, styles.textTypo]}>123456789</Text>
      <View style={styles.rectangleContainer}>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <Text style={[styles.register, styles.registerTypo]}>General</Text>
        <View style={[styles.groupWrapper, styles.parentPosition]}>
          <View style={[styles.r198000Parent, styles.frameChildPosition]}>
            <Text style={[styles.r198000, styles.text1Position]}>
              R$1980.00
            </Text>
            <Group7364 style={[styles.groupInner, styles.childGroupLayout]} />
            <Component317 style={[styles.icon11, styles.iconPosition]} />
          </View>
        </View>
        <Text style={[styles.register1, styles.registerTypo]}>
          Bank Account
        </Text>
        <Image
          style={[styles.icon12, styles.icon12Position]}
          resizeMode="cover"
          source={require("../assets/-11.png")}
        />
        <View style={[styles.frameItem, styles.child2Border]} />
        <Stroke19 style={[styles.strokeIcon, styles.childGroupLayout]} />
        <Text style={[styles.setting, styles.textTypo]}>Setting</Text>
      </View>
      <View style={[styles.child2, styles.child2Border]} />
      <Vector39 style={[styles.vectorIcon, styles.childGroupLayout]} />
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text1, styles.text1Position]}>₱1980.00</Text>
        <Group736135 style={[styles.instanceChild, styles.icon12Position]} />
        <Component318 style={[styles.icon13, styles.iconPosition]} />
      </View>
      <View style={styles.registerParent}>
        <Text style={styles.register2}>Security</Text>
        <Group125172 style={[styles.groupChild1, styles.childGroupLayout]} />
      </View>
      <Group125173 style={[styles.child3, styles.childGroupLayout]} />
      <Text style={[styles.confirmPassword, styles.confirmTypo]}>
        Enter a new password
      </Text>
      <Text style={[styles.confirmPassword1, styles.confirmTypo]}>
        Confirm Password
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    width: 345,
    backgroundColor: Color.bg3,
    borderRadius: 8,
    left: 15,
    position: "absolute",
  },
  passwordTypo: {
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    textAlign: "left",
    position: "absolute",
  },
  innerLayout: {
    height: 48,
    width: 321,
    left: 27,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 16,
    color: Color.color,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  iconPosition2: {
    left: 132,
    height: 5,
    width: 6,
    position: "absolute",
  },
  iconPosition1: {
    left: 190,
    height: 5,
    width: 6,
    position: "absolute",
  },
  rectangleLayout: {
    height: 42,
    width: 240,
    left: 68,
    position: "absolute",
  },
  saveTypo: {
    left: 102,
    top: 13,
    lineHeight: 16,
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout2: {
    borderRadius: 6,
    height: 48,
    width: 321,
    left: 27,
    position: "absolute",
  },
  iconLayout1: {
    height: 14,
    width: 20,
    left: 316,
    position: "absolute",
  },
  iconLayout: {
    height: 17,
    width: 14,
    left: 39,
    position: "absolute",
    overflow: "hidden",
  },
  frameChildPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
  },
  registerTypo: {
    top: "75.4%",
    color: Color.wz1,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  parentPosition: {
    right: "5.47%",
    position: "absolute",
  },
  text1Position: {
    color: Color.wz,
    lineHeight: 18,
    top: "0%",
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  childGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "7.78%",
    top: "11.11%",
    height: "81.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  icon12Position: {
    top: "5.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  child2Border: {
    borderTopWidth: 2,
    borderColor: Color.color3,
    width: "18.13%",
    borderStyle: "solid",
    position: "absolute",
  },
  confirmTypo: {
    left: 63,
    fontSize: 14,
    color: Color.wz1,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    position: "absolute",
  },
  child: {
    top: 142,
    height: 459,
  },
  forgotPassword: {
    top: 493,
    color: Color.color3,
    textAlign: "left",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 12,
    left: 27,
  },
  item: {
    top: 613,
    height: 302,
  },
  inner: {
    top: 685,
  },
  groupIcon: {
    top: 771,
  },
  fundPassword: {
    top: 158,
    color: Color.color,
    fontSize: 16,
    left: 30,
  },
  pleaseCreateA: {
    top: 629,
    left: 48,
    color: Color.color,
    fontSize: 16,
  },
  setAFund: {
    top: 184,
    width: 315,
    color: Color.wz1,
    left: 30,
    textAlign: "left",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 12,
  },
  oldPassword: {
    top: 233,
    fontSize: 14,
    color: Color.wz1,
    textAlign: "left",
    left: 27,
  },
  icon: {
    top: 236,
    left: 127,
    position: "absolute",
  },
  icon1: {
    top: 324,
  },
  icon2: {
    top: 412,
  },
  icon3: {
    top: 664,
  },
  icon4: {
    top: 752,
  },
  newPassword: {
    top: 661,
    fontSize: 14,
    color: Color.wz1,
    textAlign: "left",
    left: 27,
  },
  newPassword1: {
    top: 321,
    fontSize: 14,
    color: Color.wz1,
    textAlign: "left",
    left: 27,
  },
  confirmNewPassword: {
    top: 409,
    fontSize: 14,
    color: Color.wz1,
    textAlign: "left",
    left: 27,
  },
  groupShadowBox: {
    backgroundColor: "transparent",
    borderRadius: 36,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    shadowOpacity: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    height: 42,
    width: 240,
    position: "absolute",
  },
  save: {
    color: Color.wz1,
  },
  rectangleParent: {
    top: 535,
  },
  save1: {
    color: Color.color,
  },
  rectangleGroup: {
    top: 849,
  },
  confirmNewPassword1: {
    top: 749,
    fontSize: 14,
    color: Color.wz1,
    textAlign: "left",
    left: 27,
  },
  icon5: {
    top: 345,
  },
  icon6: {
    top: 362,
  },
  icon7: {
    top: 360,
  },
  icon8: {
    top: 433,
  },
  icon9: {
    top: 450,
  },
  icon10: {
    top: 448,
  },
  lineView: {
    top: 220,
    left: 25,
    borderColor: "#292f36",
    borderTopWidth: 1,
    width: 326,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  child1: {
    top: 257,
  },
  text: {
    top: 273,
    left: 62,
    fontSize: 14,
    color: Color.color,
  },
  frameChild: {
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Color.bg1,
    left: "0%",
    right: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    shadowOpacity: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  register: {
    left: "8.8%",
    fontSize: 16,
  },
  r198000: {
    left: "16.24%",
    fontSize: 18,
    textAlign: "left",
  },
  groupInner: {
    width: "12.92%",
    right: "87.08%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    maxWidth: "100%",
  },
  icon11: {
    width: "12.18%",
    left: "87.82%",
  },
  r198000Parent: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupWrapper: {
    height: "14.29%",
    width: "36.13%",
    top: "37.3%",
    bottom: "48.41%",
    left: "58.4%",
    display: "none",
  },
  register1: {
    marginLeft: -46.5,
    left: "50%",
    fontSize: 14,
  },
  icon12: {
    height: "10.32%",
    width: "94.93%",
    right: "2.4%",
    bottom: "84.13%",
    left: "2.67%",
  },
  frameItem: {
    height: "1.59%",
    top: "99.21%",
    right: "74.13%",
    bottom: "-0.79%",
    left: "7.73%",
    display: "none",
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
    fontSize: 16,
  },
  rectangleContainer: {
    marginLeft: -187.5,
    width: 375,
    height: 126,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  child2: {
    height: "0.21%",
    top: "13.37%",
    right: "7.47%",
    bottom: "86.42%",
    left: "74.4%",
  },
  vectorIcon: {
    height: "1.38%",
    width: "5.33%",
    top: "29.41%",
    right: "10.4%",
    bottom: "69.21%",
    left: "84.27%",
  },
  text1: {
    left: "18.72%",
    textAlign: "right",
    fontSize: 16,
  },
  instanceChild: {
    height: "88.89%",
    width: "13.28%",
    right: "86.72%",
    bottom: "5.56%",
    left: "0%",
  },
  icon13: {
    width: "14.04%",
    left: "85.96%",
  },
  parent: {
    width: "31.33%",
    bottom: 870,
    left: "63.2%",
    height: 18,
  },
  register2: {
    left: "22.22%",
    top: "0%",
    fontSize: 14,
    color: Color.color,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  groupChild1: {
    height: "75%",
    width: "16.67%",
    top: "12.5%",
    right: "83.33%",
    bottom: "12.5%",
    left: "0%",
  },
  registerParent: {
    height: "1.71%",
    width: "19.2%",
    top: "10.16%",
    right: "6.93%",
    bottom: "88.13%",
    left: "73.87%",
    position: "absolute",
  },
  child3: {
    height: "1.28%",
    width: "3.2%",
    top: "67.49%",
    right: "88.8%",
    bottom: "31.23%",
    left: "8%",
  },
  confirmPassword: {
    top: 703,
  },
  confirmPassword1: {
    top: 789,
    textTransform: "capitalize",
  },
  safeareaview: {
    backgroundColor: Color.bg,
    flex: 1,
    height: 935,
    overflow: "hidden",
    width: "100%",
  },
});

export default Component4;