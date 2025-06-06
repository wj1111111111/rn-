import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Stroke33 from "../assets/stroke3";
import Component278 from "../assets/";
import Component279 from "../assets/";
import Component280 from "../assets/";
import Component281 from "../assets/";
import Component282 from "../assets/";
import Component283 from "../assets/";
import Vector177 from "../assets/vector17";
import Vector188 from "../assets/vector18";
import Vector189 from "../assets/vector18";
import Ellipse1763 from "../assets/ellipse176";
import Group120243 from "../assets/group12024";
import { Color } from "../GlobalStyles";

const Component22 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={[styles.child, styles.childPosition]} />
      <Stroke33 style={[styles.strokeIcon, styles.iconLayout1]} />
      <View style={[styles.parent, styles.iconLayout]}>
        <Component278
          style={[styles.icon, styles.iconLayout]}
          width={322}
          height={50}
        />
        <Text style={[styles.login, styles.passwordTypo]}>Register</Text>
      </View>
      <View style={[styles.iHaveAgreedToTheUserAgreWrapper, styles.haveLayout]}>
        <Text style={[styles.iHaveAgreed, styles.iconPosition1]}>
          Forgot password
        </Text>
      </View>
      <View style={[styles.view, styles.viewLayout]} />
      <Text style={[styles.forgotPassword, styles.passwordTypo]}>
        Forgot password
      </Text>
      <View style={[styles.group, styles.groupPosition1]}>
        <Component279 style={[styles.icon1, styles.iconPosition]} />
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <Component280 style={[styles.icon2, styles.iconLayout1]} />
        <Component281 style={[styles.icon3, styles.iconLayout1]} />
      </View>
      <Component282 style={[styles.icon4, styles.groupPosition1]} />
      <Text style={[styles.username, styles.usernameTypo]}>1234567890|</Text>
      <Component283 style={[styles.icon5, styles.iconLayout1]} />
      <Text style={[styles.username1, styles.usernameTypo]}>+55</Text>
      <View style={styles.item} />
      <Vector177 style={[styles.vectorIcon, styles.iconLayout1]} />
      <Image
        style={[styles.d62a6059252dd42a1fed252c093b5bIcon, styles.viewLayout]}
        resizeMode="cover"
        source={require("../assets/d62a6059252dd42a1fed252c093b5bb5c8eab854-1.png")}
      />
      <Image
        style={[styles.icon6, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/84631-1.png")}
      />
      <Image
        style={[styles.image24Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/image-24.png")}
      />
      <Text style={[styles.register, styles.googleTypo]}>Register</Text>
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
          <Text style={[styles.iHaveAgreed, styles.iconPosition1]}>
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
          <Vector188 style={[styles.vectorIcon1, styles.iconPosition]} />
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupParentLayout]}>
        <View
          style={[styles.iHaveAgreedToTheUserAgreContainer, styles.haveLayout]}
        >
          <Text style={[styles.iHaveAgreed, styles.iconPosition1]}>
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
          <Vector189 style={[styles.vectorIcon1, styles.iconPosition]} />
        </View>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.lineParent, styles.groupViewLayout]}>
          <View style={[styles.groupInner, styles.lineViewLayout]} />
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <Text style={[styles.or, styles.passwordTypo]}>OR</Text>
        </View>
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={styles.frameWrapper}>
            <View style={[styles.frameView, styles.frameParentFlexBox]}>
              <View style={styles.ellipseLayout}>
                <Ellipse1763
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
              <Group120243
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
        <View style={styles.icon7}>
          <Image
            style={styles.unionIcon}
            resizeMode="cover"
            source={require("../assets/union2.png")}
          />
        </View>
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
    overflow: "hidden",
  },
  iconLayout: {
    height: 50,
    width: 322,
    position: "absolute",
  },
  passwordTypo: {
    textAlign: "left",
    fontFamily: "Arial",
  },
  haveLayout: {
    height: 0,
    width: 0,
    position: "absolute",
  },
  iconPosition1: {
    display: "none",
    position: "absolute",
  },
  viewLayout: {
    borderRadius: 2,
    position: "absolute",
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
  usernameTypo: {
    top: "22.04%",
    lineHeight: 12,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
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
    top: 0,
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
    position: "absolute",
  },
  parent: {
    top: 424,
    left: 27,
  },
  iHaveAgreed: {
    color: Color.color7,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 16,
    fontSize: 16,
    left: 0,
    top: 0,
  },
  iHaveAgreedToTheUserAgreWrapper: {
    top: 357,
    left: 40,
  },
  view: {
    height: "2.22%",
    width: "7.23%",
    top: "26.97%",
    right: "77.84%",
    bottom: "70.81%",
    left: "14.93%",
  },
  forgotPassword: {
    top: 490,
    fontWeight: "900",
    color: Color.color3,
    textTransform: "capitalize",
    lineHeight: 12,
    fontSize: 12,
    left: 40,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: 8,
    width: "100%",
    left: "0%",
  },
  password: {
    width: "22.09%",
    top: "37.5%",
    left: "11.04%",
    fontSize: 14,
    textTransform: "capitalize",
    lineHeight: 12,
    color: Color.wz1,
    fontWeight: "700",
    position: "absolute",
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
    height: 18,
  },
  icon6: {
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
    fontSize: 22,
    lineHeight: 18,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  forgotPassword1: {
    top: 486,
    left: 296,
    color: "#c0c8d2",
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
    backgroundColor: Color.bg,
    borderColor: Color.wz4,
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
  groupInner: {
    left: 0,
  },
  lineView: {
    left: 197,
  },
  or: {
    left: 164,
    color: Color.color8,
    lineHeight: 12,
    fontSize: 12,
    fontWeight: "700",
    top: 0,
    position: "absolute",
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
    top: 542,
    left: 15,
    height: 85,
  },
  enterReferral: {
    fontWeight: "500",
    lineHeight: 18,
    fontSize: 14,
  },
  unionIcon: {
    width: 14,
    height: 14,
  },
  icon7: {
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
    backgroundColor: Color.color2,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Component22;
