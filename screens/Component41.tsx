import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Stroke54 from "../assets/stroke5";
import Component437 from "../assets/";
import GroupComponent18 from "../components/GroupComponent18";
import Component438 from "../assets/";
import Component439 from "../assets/";
import Vector1217 from "../assets/vector12";
import Vector337 from "../assets/vector33";
import Vector338 from "../assets/vector33";
import GroupComponent17 from "../components/GroupComponent17";
import Icon1 from "../components/Icon1";
import { FontSize, FontFamily, Border, Color, Gap } from "../GlobalStyles";

const Component42 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={[styles.child, styles.childPosition]} />
      <Stroke54 style={[styles.strokeIcon, styles.iconLayout1]} />
      <View style={[styles.parent, styles.iconLayout]}>
        <Component437
          style={[styles.icon, styles.iconPosition1]}
          width={322}
          height={50}
        />
        <Text style={[styles.login, styles.loginTypo]}>Register</Text>
      </View>
      <View style={[styles.iHaveAgreedToTheUserAgreWrapper, styles.haveLayout]}>
        <Text style={[styles.iHaveAgreed, styles.iconPosition]}>
          Forgot password
        </Text>
      </View>
      <View style={[styles.view, styles.viewPosition]} />
      <Text style={styles.forgotPassword}>Forgot password</Text>
      <GroupComponent18 />
      <Component438 style={[styles.icon1, styles.iconLayout1]} />
      <Text style={[styles.username, styles.usernameTypo]}>1234567890|</Text>
      <Component439 style={[styles.icon2, styles.iconLayout1]} />
      <Text style={[styles.username1, styles.usernameTypo]}>+55</Text>
      <View style={[styles.item, styles.itemBorder]} />
      <Vector1217 style={[styles.vectorIcon, styles.iconLayout1]} />
      <Image
        style={[styles.d62a6059252dd42a1fed252c093b5bIcon, styles.viewPosition]}
        resizeMode="cover"
        source={require("../assets/d62a6059252dd42a1fed252c093b5bb5c8eab854-1.png")}
      />
      <Image
        style={[styles.icon3, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/84631-1.png")}
      />
      <Image
        style={[styles.image24Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-24.png")}
      />
      <Text style={[styles.register, styles.registerClr]}>Register</Text>
      <Text style={styles.forgotPassword1}>Login</Text>
      <Image
        style={[styles.inner, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/group-12054.png")}
      />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View
          style={[styles.iHaveAgreedToTheUserAgreContainer, styles.haveLayout]}
        >
          <Text style={[styles.iHaveAgreed, styles.iconPosition]}>
            Forgot password
          </Text>
        </View>
        <View style={[styles.groupChild, styles.itemBorder]} />
        <View
          style={[
            styles.lAgreeToTheUserAgreementParent,
            styles.groupParentLayout,
          ]}
        >
          <Text style={styles.agreeTypo}>
            l agree to the User Agreement
            {` & confirm l am at least 18 years old`}
          </Text>
          <Vector337 style={[styles.vectorIcon1, styles.iconLayout1]} />
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupParentLayout]}>
        <View
          style={[styles.iHaveAgreedToTheUserAgreContainer, styles.haveLayout]}
        >
          <Text style={[styles.iHaveAgreed, styles.iconPosition]}>
            Forgot password
          </Text>
        </View>
        <View style={[styles.groupChild, styles.itemBorder]} />
        <View
          style={[
            styles.lAgreeToTheUserAgreementParent,
            styles.groupParentLayout,
          ]}
        >
          <Text style={[styles.lAgreeTo, styles.agreeTypo]}>
            l agree to receive marketing promotions from Jbet88
          </Text>
          <Vector338 style={[styles.vectorIcon1, styles.iconLayout1]} />
        </View>
      </View>
      <GroupComponent17 />
      <View style={styles.enterReferralPromoCodeParent}>
        <Text style={[styles.enterReferral, styles.registerClr]}>
          Enter Referral / Promo Code
        </Text>
        <Icon1 variant="常规" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 50,
    width: 322,
    position: "absolute",
  },
  iconPosition1: {
    left: 0,
    top: 0,
  },
  loginTypo: {
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  haveLayout: {
    height: 0,
    width: 0,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  viewPosition: {
    position: "absolute",
    borderRadius: Border.br_2,
  },
  usernameTypo: {
    top: "22.04%",
    lineHeight: 12,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  itemBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  registerClr: {
    color: Color.color,
    lineHeight: 18,
    textAlign: "left",
  },
  groupParentLayout: {
    height: 32,
    width: 331,
    position: "absolute",
  },
  agreeTypo: {
    width: 309,
    left: 22,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 16,
    top: 0,
    position: "absolute",
  },
  child: {
    marginLeft: -187.5,
    shadowColor: Color.colorGray2100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    backgroundColor: Color.bg1,
    width: 375,
    height: 60,
    top: 0,
    left: "50%",
  },
  strokeIcon: {
    width: "2.45%",
    top: "2.71%",
    right: "92.21%",
    bottom: "95.32%",
    left: "5.33%",
    maxWidth: "100%",
    height: "1.97%",
  },
  icon: {
    borderRadius: Border.br_36,
    position: "absolute",
  },
  login: {
    marginLeft: -33,
    top: 17,
    color: Color.wz1,
    left: "50%",
    position: "absolute",
  },
  parent: {
    top: 424,
    left: 27,
  },
  iHaveAgreed: {
    color: Color.color13,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  iHaveAgreedToTheUserAgreWrapper: {
    top: 357,
    left: 40,
    height: 0,
    width: 0,
  },
  view: {
    height: "2.22%",
    width: "7.23%",
    top: "26.97%",
    right: "77.84%",
    bottom: "70.81%",
    left: "14.93%",
    borderRadius: Border.br_2,
  },
  forgotPassword: {
    top: 490,
    fontWeight: "900",
    fontFamily: FontFamily.microsoftYaHei,
    color: Color.color3,
    textTransform: "capitalize",
    lineHeight: 12,
    fontSize: FontSize.size_12,
    left: 40,
    textAlign: "left",
    position: "absolute",
  },
  icon1: {
    height: "5.91%",
    width: "89.33%",
    top: "19.83%",
    right: "5.33%",
    bottom: "74.26%",
    borderRadius: Border.br_8,
    left: "5.33%",
    maxWidth: "100%",
  },
  username: {
    width: "33.6%",
    left: "34.93%",
    fontSize: FontSize.size_14,
    textTransform: "capitalize",
  },
  icon2: {
    width: "4.99%",
    top: "21.8%",
    right: "8.61%",
    bottom: "76.23%",
    left: "86.4%",
    height: "1.97%",
  },
  username1: {
    width: "5.84%",
    left: "23.84%",
    fontSize: FontSize.size_12,
    top: "22.04%",
    color: Color.wz1,
  },
  item: {
    height: "3.08%",
    width: "0.27%",
    top: "21.24%",
    right: "67.6%",
    bottom: "75.68%",
    left: "32.13%",
    borderColor: Color.colorDarkslategray100,
    borderRightWidth: 1,
  },
  vectorIcon: {
    height: "2.2%",
    width: "3.63%",
    top: "21.67%",
    right: "87.84%",
    bottom: "76.12%",
    left: "8.53%",
  },
  d62a6059252dd42a1fed252c093b5bIcon: {
    marginTop: -230,
    top: "50%",
    left: 57,
    width: 26,
    height: 18,
    borderRadius: Border.br_2,
  },
  icon3: {
    top: 723,
    left: 163,
    width: 48,
    height: 48,
  },
  image24Icon: {
    top: 360,
    left: 53,
    width: 283,
    height: 156,
  },
  register: {
    marginLeft: -44.5,
    top: 21,
    fontSize: FontSize.size_22,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    color: Color.color,
    left: "50%",
    position: "absolute",
  },
  forgotPassword1: {
    top: 486,
    left: 296,
    color: Color.color2,
    textAlign: "right",
    lineHeight: 18,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  inner: {
    height: "5.79%",
    width: "34.59%",
    top: "10.84%",
    right: "32.61%",
    bottom: "83.37%",
    left: "32.8%",
  },
  iHaveAgreedToTheUserAgreContainer: {
    top: 14,
    left: 16,
  },
  groupChild: {
    backgroundColor: Color.bg3,
    borderColor: Color.wz2,
    borderWidth: 1,
    width: 16,
    height: 16,
    borderRadius: Border.br_2,
    left: 0,
    top: 0,
  },
  vectorIcon1: {
    height: "36.56%",
    width: "4.83%",
    top: "6.25%",
    right: "95.17%",
    bottom: "57.19%",
    left: "0%",
  },
  lAgreeToTheUserAgreementParent: {
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 315,
    left: 24,
    height: 32,
  },
  lAgreeTo: {
    color: Color.wz1,
  },
  groupContainer: {
    top: 362,
    left: 24,
    height: 32,
  },
  enterReferral: {
    fontWeight: "500",
    fontFamily: FontFamily.arialMT,
    fontSize: FontSize.size_14,
  },
  enterReferralPromoCodeParent: {
    top: 281,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_4,
    width: 331,
    position: "absolute",
  },
  safeareaview: {
    backgroundColor: Color.color4,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Component42;