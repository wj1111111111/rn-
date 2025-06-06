import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Stroke53 from "../assets/stroke5";
import Component504 from "../assets/";
import Component505 from "../assets/";
import Component506 from "../assets/";
import Component507 from "../assets/";
import Component508 from "../assets/";
import Component509 from "../assets/";
import Vector1318 from "../assets/vector13";
import Component510 from "../assets/";
import Frame22 from "../assets/frame2";
import Vector384 from "../assets/vector38";
import Vector385 from "../assets/vector38";
import Ellipse1762 from "../assets/ellipse176";
import Group120242 from "../assets/group12024";
import { Color } from "../GlobalStyles";

const Component40 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.child} />
      <Stroke53 style={[styles.strokeIcon, styles.iconLayout2]} />
      <View style={[styles.parent, styles.iconLayout1]}>
        <Component504
          style={[styles.icon, styles.iconLayout1]}
          width={322}
          height={50}
        />
        <Text style={[styles.login, styles.orTypo]}>Register</Text>
      </View>
      <View style={[styles.iHaveAgreedToTheUserAgreWrapper, styles.haveLayout]}>
        <Text style={[styles.iHaveAgreed, styles.orTypo]}>Forgot password</Text>
      </View>
      <View style={styles.view} />
      <Text style={[styles.forgotPassword, styles.orLayout]}>
        Forgot password
      </Text>
      <View style={[styles.group, styles.groupPosition1]}>
        <Component505 style={[styles.icon1, styles.iconPosition]} />
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <Component506 style={[styles.icon2, styles.iconLayout2]} />
        <Component507 style={[styles.icon3, styles.iconLayout2]} />
      </View>
      <Component508 style={[styles.icon4, styles.groupPosition1]} />
      <Text style={[styles.username, styles.usernameTypo]}>1234567890|</Text>
      <Component509 style={[styles.icon5, styles.iconLayout2]} />
      <Text style={[styles.username1, styles.usernameTypo]}>+55</Text>
      <View style={styles.item} />
      <Vector1318 style={[styles.vectorIcon, styles.iconLayout2]} />
      <Image
        style={[styles.d62a6059252dd42a1fed252c093b5bIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/d62a6059252dd42a1fed252c093b5bb5c8eab854-1.png")}
      />
      <Image
        style={styles.icon6}
        resizeMode="cover"
        source={require("../assets/84631-1.png")}
      />
      <Image
        style={styles.image24Icon}
        resizeMode="cover"
        source={require("../assets/image-24.png")}
      />
      <View style={[styles.container, styles.groupPosition1]}>
        <Component510 style={[styles.icon1, styles.iconPosition]} />
        <Text style={[styles.password1, styles.passwordTypo]}>
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
      <Text style={[styles.register, styles.googleTypo]}>Register</Text>
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
          <Text style={[styles.iHaveAgreed, styles.orTypo]}>
            Forgot password
          </Text>
        </View>
        <View style={styles.groupChild} />
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
          <Vector384 style={[styles.vectorIcon1, styles.iconPosition]} />
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupParentLayout]}>
        <View
          style={[styles.iHaveAgreedToTheUserAgreContainer, styles.haveLayout]}
        >
          <Text style={[styles.iHaveAgreed, styles.orTypo]}>
            Forgot password
          </Text>
        </View>
        <View style={styles.groupChild} />
        <View
          style={[
            styles.lAgreeToTheUserAgreementParent,
            styles.groupParentLayout,
          ]}
        >
          <Text style={[styles.lAgreeTo, styles.agreeTypo]}>
            l agree to receive marketing promotions from Jbet88
          </Text>
          <Vector385 style={[styles.vectorIcon1, styles.iconPosition]} />
        </View>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.lineParent, styles.groupViewLayout]}>
          <View style={[styles.groupInner, styles.lineViewLayout]} />
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <Text style={[styles.or, styles.orLayout]}>OR</Text>
        </View>
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={styles.frameWrapper}>
            <View style={[styles.frameView, styles.frameParentFlexBox]}>
              <View style={styles.ellipseLayout}>
                <Ellipse1762
                  style={[styles.ellipseIcon, styles.ellipseLayout]}
                  width={28}
                  height={28}
                />
                <Image
                  style={styles.googleLogo98082Icon}
                  resizeMode="cover"
                  source={require("../assets/googlelogo9808-2.png")}
                />
              </View>
              <Text style={[styles.google, styles.googleTypo]}>Google</Text>
            </View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={[styles.frameView, styles.frameParentFlexBox]}>
              <Group120242
                style={styles.ellipseLayout}
                width={28}
                height={28}
              />
              <Text style={[styles.google, styles.googleTypo]}>Telegram</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.enterReferralPromoCodeParent, styles.frameParentFlexBox]}
      >
        <Text style={[styles.enterReferral, styles.googleTypo]}>
          Enter Referral / Promo Code
        </Text>
        <Image
          style={styles.icon8}
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
  orTypo: {
    textAlign: "left",
    fontFamily: "Arial",
    position: "absolute",
  },
  haveLayout: {
    height: 0,
    width: 0,
    position: "absolute",
  },
  orLayout: {
    lineHeight: 12,
    fontSize: 12,
  },
  groupPosition1: {
    right: "5.33%",
    width: "89.33%",
    height: "5.91%",
    left: "5.33%",
    position: "absolute",
  },
  iconPosition: {
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  passwordTypo: {
    left: "11.04%",
    top: "37.5%",
    fontSize: 14,
    textTransform: "capitalize",
    lineHeight: 12,
    textAlign: "left",
    color: Color.wz1,
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  usernameTypo: {
    top: "22.04%",
    lineHeight: 12,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 18,
    position: "absolute",
  },
  googleTypo: {
    color: Color.color,
    textAlign: "left",
    fontFamily: "Arial",
  },
  groupParentLayout: {
    height: 32,
    width: 331,
    position: "absolute",
  },
  agreeTypo: {
    width: 309,
    left: 22,
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 16,
    top: 0,
    position: "absolute",
  },
  groupViewLayout: {
    width: 345,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 149,
    borderTopWidth: 1,
    top: 6,
    borderColor: "#455461",
    borderStyle: "solid",
    position: "absolute",
  },
  frameParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  ellipseLayout: {},
  child: {
    marginLeft: -187.5,
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
    borderRadius: 36,
    left: 0,
    top: 0,
  },
  login: {
    marginLeft: -33,
    top: 17,
    color: Color.wz1,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: 16,
    textAlign: "left",
    left: "50%",
  },
  parent: {
    top: 478,
    left: 27,
  },
  iHaveAgreed: {
    color: Color.color13,
    display: "none",
    fontWeight: "700",
    lineHeight: 16,
    fontSize: 16,
    textAlign: "left",
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
    borderRadius: 2,
    position: "absolute",
  },
  forgotPassword: {
    top: 544,
    fontWeight: "900",
    color: Color.color3,
    textTransform: "capitalize",
    left: 40,
    textAlign: "left",
    fontFamily: "Arial",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: 8,
    width: "100%",
  },
  password: {
    width: "22.09%",
    fontSize: 14,
  },
  icon2: {
    height: "28.54%",
    width: "6.21%",
    top: "35.42%",
    right: "3.64%",
    bottom: "36.04%",
    left: "90.15%",
    position: "absolute",
  },
  icon3: {
    height: "36.25%",
    width: "4.48%",
    top: "31.25%",
    right: "91.94%",
    bottom: "32.5%",
    left: "3.58%",
    position: "absolute",
  },
  group: {
    top: "27.22%",
    bottom: "66.87%",
  },
  icon4: {
    top: "19.83%",
    bottom: "74.26%",
    borderRadius: 8,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  username: {
    width: "33.6%",
    left: "34.93%",
    fontSize: 14,
    textTransform: "capitalize",
  },
  icon5: {
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
    fontSize: 12,
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
    borderRightWidth: 1,
    borderColor: "#455461",
    borderStyle: "solid",
    position: "absolute",
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
    borderRadius: 2,
  },
  icon6: {
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
  password1: {
    fontSize: 14,
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
  container: {
    top: "37.81%",
    bottom: "56.28%",
  },
  register: {
    marginLeft: -44.5,
    top: 21,
    fontSize: 22,
    lineHeight: 18,
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
    fontSize: 14,
    fontFamily: "Arial",
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
    borderStyle: "solid",
    borderRadius: 2,
    left: 0,
    top: 0,
    position: "absolute",
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
  groupInner: {
    left: 0,
  },
  lineView: {
    left: 197,
  },
  or: {
    left: 164,
    color: Color.color6,
    textAlign: "left",
    fontFamily: "Arial",
    position: "absolute",
    fontWeight: "700",
    top: 0,
  },
  lineParent: {
    height: 12,
    left: 0,
    top: 0,
  },
  ellipseIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  googleLogo98082Icon: {
    top: 4,
    left: 4,
    width: 21,
    height: 21,
    position: "absolute",
  },
  google: {
    lineHeight: 12,
    fontSize: 12,
    fontWeight: "700",
  },
  frameView: {
    gap: 12,
    alignItems: "center",
  },
  frameWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    height: 42,
    paddingHorizontal: 36,
    paddingVertical: 7,
    alignItems: "center",
    borderRadius: 8,
    flex: 1,
  },
  frameParent: {
    top: 43,
    left: 5,
    width: 335,
    gap: 10,
    alignItems: "center",
    position: "absolute",
  },
  groupView: {
    top: 596,
    left: 15,
    height: 85,
  },
  enterReferral: {
    fontWeight: "500",
    lineHeight: 18,
    fontSize: 14,
  },
  icon8: {
    width: 20,
    height: 20,
  },
  enterReferralPromoCodeParent: {
    top: 281,
    left: 20,
    gap: 4,
    alignItems: "center",
    width: 331,
    flexDirection: "row",
    position: "absolute",
  },
  safeareaview: {
    backgroundColor: Color.color4,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Component40;
