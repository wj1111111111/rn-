import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Stroke53 from "../assets/stroke5";
import Component433 from "../assets/";
import GroupComponent18 from "../components/GroupComponent18";
import Component434 from "../assets/";
import Component435 from "../assets/";
import Vector1216 from "../assets/vector12";
import Component436 from "../assets/";
import Frame22 from "../assets/frame2";
import Vector335 from "../assets/vector33";
import Vector336 from "../assets/vector33";
import GroupComponent17 from "../components/GroupComponent17";
import { FontSize, FontFamily, Color, Border, Gap } from "../GlobalStyles";

const Component41 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.child} />
      <Stroke53 style={[styles.strokeIcon, styles.iconLayout2]} />
      <View style={[styles.parent, styles.iconLayout1]}>
        <Component433
          style={[styles.icon, styles.iconPosition1]}
          width={322}
          height={50}
        />
        <Text style={[styles.login, styles.loginTypo]}>Register</Text>
      </View>
      <View style={[styles.iHaveAgreedToTheUserAgreWrapper, styles.haveLayout]}>
        <Text style={[styles.iHaveAgreed, styles.loginTypo]}>
          Forgot password
        </Text>
      </View>
      <View style={styles.view} />
      <Text style={[styles.forgotPassword, styles.passwordText]}>
        Forgot password
      </Text>
      <GroupComponent18 />
      <Component434 style={[styles.icon1, styles.icon1Position]} />
      <Text style={[styles.username, styles.usernameTypo]}>1234567890|</Text>
      <Component435 style={[styles.icon2, styles.iconLayout2]} />
      <Text style={[styles.username1, styles.usernameTypo]}>+55</Text>
      <View style={[styles.item, styles.itemBorder]} />
      <Vector1216 style={[styles.vectorIcon, styles.iconLayout2]} />
      <Image
        style={[styles.d62a6059252dd42a1fed252c093b5bIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/d62a6059252dd42a1fed252c093b5bb5c8eab854-1.png")}
      />
      <Image
        style={styles.icon3}
        resizeMode="cover"
        source={require("../assets/84631-1.png")}
      />
      <Image
        style={styles.image24Icon}
        resizeMode="cover"
        source={require("../assets/image-24.png")}
      />
      <View style={[styles.group, styles.icon1Position]}>
        <Component436 style={[styles.icon4, styles.iconPosition]} />
        <Text style={[styles.password, styles.passwordText]}>
          Invitation code
        </Text>
        <Frame22
          style={[styles.frameIcon, styles.iconLayout]}
          width={18}
          height={18}
        />
        <Image
          style={styles.promocode1Icon}
          resizeMode="cover"
          source={require("../assets/promocode-1.png")}
        />
      </View>
      <Text style={[styles.register, styles.registerClr]}>Register</Text>
      <Text style={styles.forgotPassword1}>Login</Text>
      <Image
        style={[styles.inner, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/group-12054.png")}
      />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View
          style={[styles.iHaveAgreedToTheUserAgreContainer, styles.haveLayout]}
        >
          <Text style={[styles.iHaveAgreed, styles.loginTypo]}>
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
          <Vector335 style={[styles.vectorIcon1, styles.iconPosition]} />
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupParentLayout]}>
        <View
          style={[styles.iHaveAgreedToTheUserAgreContainer, styles.haveLayout]}
        >
          <Text style={[styles.iHaveAgreed, styles.loginTypo]}>
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
          <Vector336 style={[styles.vectorIcon1, styles.iconPosition]} />
        </View>
      </View>
      <GroupComponent17 groupViewTop={596} />
      <View style={styles.enterReferralPromoCodeParent}>
        <Text style={[styles.enterReferral, styles.registerClr]}>
          Enter Referral / Promo Code
        </Text>
        <Image
          style={styles.icon5}
          resizeMode="cover"
          source={require("../assets/icon1.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout1: {
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
    position: "absolute",
  },
  haveLayout: {
    height: 0,
    width: 0,
    position: "absolute",
  },
  passwordText: {
    lineHeight: 12,
    textTransform: "capitalize",
    textAlign: "left",
    position: "absolute",
  },
  icon1Position: {
    right: "5.33%",
    width: "89.33%",
    height: "5.91%",
    left: "5.33%",
    position: "absolute",
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
  iconLayout: {
    height: 18,
    position: "absolute",
  },
  iconPosition: {
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    left: "50%",
    top: 0,
    position: "absolute",
  },
  strokeIcon: {
    width: "2.45%",
    top: "2.71%",
    right: "92.21%",
    bottom: "95.32%",
    left: "5.33%",
    maxWidth: "100%",
    height: "1.97%",
    position: "absolute",
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
  },
  parent: {
    top: 478,
    left: 27,
  },
  iHaveAgreed: {
    color: Color.color13,
    display: "none",
    left: 0,
    top: 0,
  },
  iHaveAgreedToTheUserAgreWrapper: {
    top: 411,
    left: 40,
  },
  view: {
    height: "2.22%",
    width: "7.23%",
    top: "26.97%",
    right: "77.84%",
    bottom: "70.81%",
    left: "14.93%",
    borderRadius: Border.br_2,
    position: "absolute",
  },
  forgotPassword: {
    top: 544,
    fontWeight: "900",
    fontFamily: FontFamily.microsoftYaHei,
    color: Color.color3,
    textTransform: "capitalize",
    fontSize: FontSize.size_12,
    left: 40,
  },
  icon1: {
    top: "19.83%",
    bottom: "74.26%",
    borderRadius: Border.br_8,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    maxWidth: "100%",
    position: "absolute",
  },
  username1: {
    width: "5.84%",
    left: "23.84%",
    fontSize: FontSize.size_12,
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
    position: "absolute",
  },
  d62a6059252dd42a1fed252c093b5bIcon: {
    marginTop: -230,
    top: "50%",
    left: 57,
    width: 26,
    borderRadius: Border.br_2,
  },
  icon3: {
    top: 723,
    left: 163,
    width: 48,
    height: 48,
    display: "none",
    position: "absolute",
  },
  image24Icon: {
    top: 360,
    left: 53,
    width: 283,
    height: 156,
    display: "none",
    position: "absolute",
  },
  icon4: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_8,
    width: "100%",
  },
  password: {
    top: "37.5%",
    left: "11.04%",
    fontSize: FontSize.size_14,
    textTransform: "capitalize",
    color: Color.wz1,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  frameIcon: {
    top: 15,
    left: 11,
    display: "none",
    overflow: "hidden",
  },
  promocode1Icon: {
    top: 12,
    left: 8,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  group: {
    top: "37.81%",
    bottom: "56.28%",
  },
  register: {
    marginLeft: -44.5,
    top: 21,
    fontSize: FontSize.size_22,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  forgotPassword1: {
    top: 540,
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
    position: "absolute",
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
  },
  lAgreeToTheUserAgreementParent: {
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 369,
    left: 24,
    height: 32,
  },
  lAgreeTo: {
    color: Color.wz1,
  },
  groupContainer: {
    top: 416,
    left: 24,
    height: 32,
  },
  enterReferral: {
    fontWeight: "500",
    fontFamily: FontFamily.arialMT,
    fontSize: FontSize.size_14,
  },
  icon5: {
    width: 20,
    height: 20,
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
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Component41;