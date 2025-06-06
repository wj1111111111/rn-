import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Group4482 from "../assets/group448";
import Group4483 from "../assets/group448";
import Component298 from "../assets/";
import Component299 from "../assets/";
import Component300 from "../assets/";
import Component301 from "../assets/";
import Component302 from "../assets/";
import Component303 from "../assets/";
import Component304 from "../assets/";
import Component305 from "../assets/";
import Component306 from "../assets/";
import Component307 from "../assets/";
import Component308 from "../assets/";
import Group4521 from "../assets/group452";
import GroupComponent1 from "../components/GroupComponent1";
import Vector36 from "../assets/vector";
import GroupComponent13 from "../components/GroupComponent13";
import Group125172 from "../assets/group12517";
import Group125173 from "../assets/group12517";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Component4 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={[styles.child, styles.itemLayout]} />
      <Text style={[styles.forgotPassword, styles.setAFundTypo]}>
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
      <Text style={[styles.fundPassword, styles.textLayout]}>
        Fund Password
      </Text>
      <Text style={[styles.pleaseCreateA, styles.textLayout]}>
        Please create a login password
      </Text>
      <Text style={[styles.setAFund, styles.setAFundTypo]}>
        Set a fund password to make your account more secure.
      </Text>
      <Text style={[styles.oldPassword, styles.passwordTypo]}>
        Old Password
      </Text>
      <Component298 style={styles.icon} width={6} height={5} />
      <Component299
        style={[styles.icon1, styles.iconPosition1]}
        width={6}
        height={5}
      />
      <Component300
        style={[styles.icon2, styles.iconPosition]}
        width={6}
        height={5}
      />
      <Component301
        style={[styles.icon3, styles.iconPosition1]}
        width={6}
        height={5}
      />
      <Component302
        style={[styles.icon4, styles.iconPosition]}
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
      <Component303
        style={[styles.icon5, styles.iconLayout2]}
        width={321}
        height={48}
      />
      <Component304
        style={[styles.icon6, styles.iconLayout1]}
        width={20}
        height={14}
      />
      <Component305
        style={[styles.icon7, styles.iconLayout]}
        width={14}
        height={17}
      />
      <Component306
        style={[styles.icon8, styles.iconLayout2]}
        width={321}
        height={48}
      />
      <Component307
        style={[styles.icon9, styles.iconLayout1]}
        width={20}
        height={14}
      />
      <Component308
        style={[styles.icon10, styles.iconLayout]}
        width={14}
        height={17}
      />
      <View style={[styles.lineView, styles.child2Border]} />
      <Group4521
        style={[styles.child1, styles.innerLayout]}
        width={321}
        height={48}
      />
      <Text style={[styles.text, styles.passwordTypo]}>123456789</Text>
      <GroupComponent1 />
      <View style={[styles.child2, styles.child2Border]} />
      <Vector36 style={[styles.vectorIcon, styles.child3Layout]} />
      <GroupComponent13 groupViewBottom={870} />
      <View style={styles.registerParent}>
        <Text style={[styles.register, styles.passwordTypo]}>Security</Text>
        <Group125172 style={[styles.groupInner, styles.child3Layout]} />
      </View>
      <Group125173 style={[styles.child3, styles.child3Layout]} />
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
    borderRadius: Border.br_8,
    left: 15,
    position: "absolute",
  },
  setAFundTypo: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
    lineHeight: 12,
    position: "absolute",
  },
  innerLayout: {
    height: 48,
    width: 321,
    left: 27,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 16,
    color: Color.color,
  },
  passwordTypo: {
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconPosition1: {
    left: 132,
    height: 5,
    width: 6,
    position: "absolute",
  },
  iconPosition: {
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
    fontSize: FontSize.size_16,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout2: {
    borderRadius: Border.br_6,
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
  child2Border: {
    borderStyle: "solid",
    position: "absolute",
  },
  child3Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  confirmTypo: {
    left: 63,
    fontSize: FontSize.size_14,
    color: Color.wz1,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
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
    left: 27,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
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
    fontSize: FontSize.size_16,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
    left: 30,
  },
  pleaseCreateA: {
    top: 629,
    left: 48,
    color: Color.color,
    fontSize: FontSize.size_16,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  setAFund: {
    top: 184,
    width: 315,
    color: Color.wz1,
    left: 30,
  },
  oldPassword: {
    top: 233,
    color: Color.wz1,
    lineHeight: 12,
    fontSize: FontSize.size_14,
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
    color: Color.wz1,
    lineHeight: 12,
    fontSize: FontSize.size_14,
    left: 27,
  },
  newPassword1: {
    top: 321,
    color: Color.wz1,
    lineHeight: 12,
    fontSize: FontSize.size_14,
    left: 27,
  },
  confirmNewPassword: {
    top: 409,
    color: Color.wz1,
    lineHeight: 12,
    fontSize: FontSize.size_14,
    left: 27,
  },
  groupShadowBox: {
    backgroundColor: "transparent",
    borderRadius: Border.br_36,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: Color.colorGray2100,
    left: 0,
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
    color: Color.wz1,
    lineHeight: 12,
    fontSize: FontSize.size_14,
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
    borderColor: Color.colorDarkslategray700,
    borderTopWidth: 1,
    width: 326,
    height: 1,
  },
  child1: {
    top: 257,
  },
  text: {
    top: 273,
    left: 62,
    color: Color.color,
    lineHeight: 16,
  },
  child2: {
    height: "0.21%",
    width: "18.13%",
    top: "13.37%",
    right: "7.47%",
    bottom: "86.42%",
    left: "74.4%",
    borderColor: Color.color3,
    borderTopWidth: 2,
  },
  vectorIcon: {
    height: "1.38%",
    width: "5.33%",
    top: "29.41%",
    right: "10.4%",
    bottom: "69.21%",
    left: "84.27%",
  },
  register: {
    top: "0%",
    left: "22.22%",
    color: Color.color,
    lineHeight: 16,
  },
  groupInner: {
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
    width: "100%",
    height: 935,
    overflow: "hidden",
  },
});

export default Component4;