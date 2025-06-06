import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Ellipse710 from "../assets/ellipse7";
import Component369 from "../assets/";
import Vector159 from "../assets/vector1";
import Vector216 from "../assets/vector2";
import Vector319 from "../assets/vector3";
import Vector410 from "../assets/vector4";
import Component370 from "../assets/";
import Vector534 from "../assets/vector5";
import Component371 from "../assets/";
import Vector535 from "../assets/vector5";
import Stroke290 from "../assets/stroke2";
import Stroke291 from "../assets/stroke2";
import Stroke292 from "../assets/stroke2";
import Stroke293 from "../assets/stroke2";
import Stroke294 from "../assets/stroke2";
import Stroke295 from "../assets/stroke2";
import Stroke296 from "../assets/stroke2";
import Stroke297 from "../assets/stroke2";
import Stroke298 from "../assets/stroke2";
import Vector610 from "../assets/vector6";
import Vector79 from "../assets/vector7";
import Vector810 from "../assets/vector8";
import Group83010 from "../assets/group830";
import Vector910 from "../assets/vector9";
import Vector1010 from "../assets/vector10";
import Vector1116 from "../assets/vector11";
import Component372 from "../assets/";
import Component373 from "../assets/";
import Component374 from "../assets/";
import Component375 from "../assets/";
import Vector1215 from "../assets/vector12";
import Component376 from "../assets/";
import Component377 from "../assets/";
import Vector1317 from "../assets/vector13";
import Component378 from "../assets/";
import Vector1414 from "../assets/vector14";
import Union35 from "../assets/union3";
import Vector1510 from "../assets/vector15";
import Component379 from "../assets/";
import Group84812 from "../assets/group848";
import Component380 from "../assets/";
import Component381 from "../assets/";
import Group121105 from "../assets/group12110";
import Group121065 from "../assets/group12106";
import { Color } from "../GlobalStyles";

const Component9 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={styles.itemPosition}>
          <View style={styles.itemPosition}>
            <LinearGradient
              style={[styles.child, styles.itemPosition]}
              locations={[0, 1]}
              colors={["#2d3b48", "#171c21"]}
              useAngle={true}
              angle={180}
            />
            <View style={[styles.item, styles.itemPosition]} />
            <View style={[styles.item, styles.itemPosition]} />
          </View>
          <View style={styles.itemPosition}>
            <LinearGradient
              style={[styles.child, styles.itemPosition]}
              locations={[0.35, 1]}
              colors={["rgba(23, 28, 33, 0)", "#171c21"]}
              useAngle={true}
              angle={180.31}
            />
          </View>
        </View>
        <Image
          style={[styles.maskGroupIcon, styles.groupLayout5]}
          resizeMode="cover"
          source={require("../assets/mask-group.png")}
        />
        <View style={[styles.ellipseParent, styles.groupItemLayout]}>
          <Ellipse710
            style={[styles.groupItem, styles.groupItemLayout]}
            width={40}
            height={40}
          />
          <Image
            style={[styles.icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/8713-1.png")}
          />
        </View>
        <Component369 style={styles.icon1} width={10} height={10} />
        <Text style={[styles.text, styles.textTypo]}>98955464616</Text>
        <Text style={[styles.userName, styles.textTypo]}>User name</Text>
        <Text style={[styles.teamsCenter, styles.text1Typo]}>Teams center</Text>
        <Text style={[styles.text1, styles.text1Position]}>₱ 1324.00</Text>
        <Text style={styles.balance}>Balance</Text>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupBg]} />
          <Text style={[styles.depositRecord, styles.recordFlexBox]}>
            Deposit Record
          </Text>
          <Text style={[styles.withdrawalRecord, styles.recordFlexBox]}>
            Withdrawal Record
          </Text>
          <Text style={[styles.bettingRecord, styles.recordFlexBox]}>{`Betting
Record`}</Text>
          <Text style={[styles.accountRecord, styles.recordFlexBox]}>{`Account
Record`}</Text>
          <Vector159 style={[styles.vectorIcon, styles.iconLayout1]} />
          <Vector216 style={[styles.vectorIcon1, styles.iconLayout1]} />
          <Vector319 style={[styles.vectorIcon2, styles.iconLayout1]} />
          <Vector410 style={[styles.vectorIcon3, styles.iconLayout1]} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
        </View>
        <View style={[styles.group, styles.groupLayout3]}>
          <Component370
            style={[styles.icon2, styles.iconPosition4]}
            width={124}
            height={36}
          />
          <Vector534
            style={[styles.vectorIcon4, styles.vectorIconLayout1]}
            width={16}
            height={12}
          />
          <View style={[styles.depositWrapper, styles.depositWrapperLayout]}>
            <Text style={[styles.deposit, styles.depositWrapperLayout]}>
              Deposit
            </Text>
          </View>
        </View>
        <View style={[styles.container, styles.icon3Layout]}>
          <Component371
            style={[styles.icon3, styles.icon3Layout]}
            width={136}
            height={36}
          />
          <View style={[styles.withdrawalWrapper, styles.depositWrapperLayout]}>
            <Text style={[styles.withdrawal, styles.depositWrapperLayout]}>
              Withdrawal
            </Text>
          </View>
          <Vector535
            style={[styles.vectorIcon5, styles.vectorIconLayout1]}
            width={16}
            height={12}
          />
        </View>
        <View style={[styles.groupContainer, styles.groupLayout2]}>
          <View style={[styles.rectangleGroup, styles.groupLayout2]}>
            <LinearGradient
              style={[styles.rectangleLineargradient, styles.groupLayout2]}
              locations={[0, 1]}
              colors={["#373c42", "#2c3135"]}
              useAngle={true}
              angle={180}
            />
            <View style={styles.vip4Wrapper}>
              <Text style={[styles.vip4, styles.childGroupPosition]}>
                VIP 4
              </Text>
            </View>
          </View>
          <Image
            style={[styles.v4Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/v4.png")}
          />
        </View>
        <View style={[styles.groupChild1, styles.groupBg]} />
        <Stroke290
          style={[styles.strokeIcon, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke291
          style={[styles.strokeIcon1, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke292
          style={[styles.strokeIcon2, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke293
          style={[styles.strokeIcon3, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke294
          style={[styles.strokeIcon4, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke295
          style={[styles.strokeIcon5, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke296
          style={[styles.strokeIcon6, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke297
          style={[styles.strokeIcon7, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke298
          style={[styles.strokeIcon8, styles.iconLayout]}
          width={8}
          height={13}
        />
        <View style={[styles.lineView, styles.groupChildLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.groupChild3, styles.groupChildLayout]} />
        <View style={[styles.groupChild4, styles.groupChildLayout]} />
        <View style={[styles.groupChild5, styles.groupChildLayout]} />
        <View style={[styles.groupChild6, styles.groupChildLayout]} />
        <Text style={[styles.promotion, styles.vipTypo]}>Promotion</Text>
        <Text style={[styles.vip, styles.vipTypo]}>VIP</Text>
        <View style={[styles.settingParent, styles.parentPosition]}>
          <Text style={[styles.setting, styles.settingTypo]}>Setting</Text>
          <Vector610 style={[styles.vectorIcon6, styles.iconPosition3]} />
        </View>
        <Text style={[styles.logout, styles.vipTypo]}>Logout</Text>
        <Vector79 style={[styles.vectorIcon7, styles.vectorIconPosition]} />
        <View style={styles.vectorParent}>
          <Vector810 style={[styles.vectorIcon8, styles.iconPosition3]} />
          <Text style={[styles.liveSupport, styles.settingTypo]}>
            Live Support
          </Text>
        </View>
        <View style={[styles.notificationParent, styles.parentPosition]}>
          <Text style={[styles.notification, styles.settingTypo]}>
            Notification
          </Text>
          <Group83010 style={[styles.groupIcon, styles.iconPosition3]} />
        </View>
        <Text
          style={[styles.free28Bonus, styles.groupLayout1]}
        >{`Free ₱28 bonus by
downloading the official APP`}</Text>
        <Vector910 style={[styles.vectorIcon9, styles.vectorIconPosition]} />
        <Image
          style={[styles.icon4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-16.png")}
        />
        <Image
          style={[styles.group120051, styles.child2Layout]}
          resizeMode="cover"
          source={require("../assets/group-12005-1.png")}
        />
        <Image
          style={[styles.groupChild7, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-12097.png")}
        />
        <Image
          style={[styles.invite1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/invite-1.png")}
        />
        <View style={[styles.groupChild8, styles.groupChildLayout]} />
        <View style={[styles.groupChild9, styles.groupChildLayout]} />
        <Text style={[styles.invite, styles.spinTypo]}>Invite -</Text>
        <Text style={[styles.spin, styles.spinTypo]}>Spin -</Text>
        <Text style={[styles.cashback, styles.spinTypo]}>Cashback -</Text>
        <Text
          style={[
            styles.reconnendFriendsToContainer,
            styles.passwordContainerLayout,
          ]}
        >
          {`Reconnend friends
To join`}{" "}
          jbet88 and Earn money
        </Text>
        <Text
          style={[styles.winRealMoneyContainer, styles.passwordContainerLayout]}
        >
          {`Win real money `}₱500
        </Text>
        <Text style={[styles.weeklyMax20, styles.passwordContainerLayout]}>
          {`Weekly `}Max:20%
        </Text>
        <Vector1010 style={[styles.vectorIcon10, styles.vectorIconLayout]} />
        <View style={[styles.groupView, styles.groupLayout1]}>
          <LinearGradient
            style={[styles.groupChild10, styles.groupLayout1]}
            locations={[0, 1]}
            colors={["#76cd01", "#498d03"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.instalall, styles.passwordContainerLayout]}>
            INSTALALL
          </Text>
        </View>
        <Vector1116 style={[styles.vectorIcon11, styles.vectorIconLayout]} />
        <View style={[styles.parent1, styles.parentLayout]}>
          <Component372 style={[styles.icon5, styles.iconPosition2]} />
          <Component373 style={[styles.icon6, styles.iconPosition1]} />
          <Component374 style={[styles.icon7, styles.iconPosition1]} />
          <Component375 style={[styles.icon8, styles.iconPosition1]} />
          <Text style={[styles.members, styles.depositTypo]}>Home</Text>
          <Text style={[styles.promotion1, styles.depositTypo]}>Promotion</Text>
          <Text style={[styles.home, styles.depositTypo]}>Teams</Text>
          <Text style={[styles.deposit1, styles.depositTypo]}>Deposit</Text>
          <Text style={[styles.deposit2, styles.depositTypo]}>Invite</Text>
          <Vector1215 style={[styles.vectorIcon12, styles.iconPosition1]} />
          <Image
            style={[styles.invite1Icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/invite-11.png")}
          />
        </View>
      </View>
      <View style={[styles.child1, styles.parentLayout]} />
      <View style={[styles.rectangleParent1, styles.groupChild11Layout]}>
        <View style={[styles.groupChild11, styles.groupChildBorder]} />
        <Text style={[styles.receiveRewardsAfter, styles.loginTypo]}>
          Receive rewards after completing mobilephone verification
        </Text>
        <Component376 style={[styles.icon9, styles.iconLayout1]} />
        <Text style={[styles.username, styles.usernameTypo]}>1234567890|</Text>
        <Component377 style={[styles.icon10, styles.iconLayout1]} />
        <Text style={[styles.username1, styles.usernameTypo]}>+55</Text>
        <View style={[styles.groupChild12, styles.groupChildBorder]} />
        <Vector1317 style={[styles.vectorIcon13, styles.iconLayout1]} />
        <Image
          style={styles.d62a6059252dd42a1fed252c093b5bIcon}
          resizeMode="cover"
          source={require("../assets/d62a6059252dd42a1fed252c093b5bb5c8eab854-1.png")}
        />
        <View style={[styles.parent2, styles.icon11Layout]}>
          <Component378
            style={[styles.icon11, styles.icon11Layout]}
            width={321}
            height={48}
          />
          <Text
            style={[styles.confirmPassword, styles.passwordContainerLayout]}
          >
            SMS
          </Text>
          <Vector1414
            style={[styles.vectorIcon14, styles.vectorIcon14Position]}
          />
        </View>
        <View style={[styles.unionParent, styles.unionLayout]}>
          <Union35 style={styles.unionLayout} width={321} height={84} />
          <Vector1510 style={[styles.vectorIcon15, styles.iconLayout1]} />
          <Text style={styles.theMobileNumber}>
            The mobile number will be used to check that your money is safe when
            you try to withdraw
          </Text>
        </View>
        <View style={[styles.parent3, styles.icon12Layout]}>
          <Component379
            style={[styles.icon12, styles.iconPosition]}
            width={322}
            height={50}
          />
          <Text style={[styles.login, styles.loginTypo]}>
            Complete verification
          </Text>
        </View>
      </View>
      <Group84812
        style={[styles.child2, styles.child2Layout]}
        width={32}
        height={32}
      />
      <View style={[styles.parent4, styles.icon13Layout]}>
        <Component380
          style={[styles.icon13, styles.icon13Layout]}
          width={78}
          height={34}
        />
        <Text style={styles.confirmPassword1}>59s</Text>
      </View>
      <Text style={[styles.theMobileNum, styles.pleaseTypo]}>
        The mobile num is not yalid
      </Text>
      <Text style={[styles.pleaseEnterA, styles.pleaseTypo]}>
        Please enter a valid verification code
      </Text>
      <Text style={[styles.pleaseEnterA1, styles.pleaseTypo]}>
        Please enter a valid verification code
      </Text>
      <View style={styles.parent5}>
        <Component381 style={[styles.icon14, styles.iconPosition2]} />
        <Group121105
          style={[styles.groupChild13, styles.vectorIcon14Position]}
        />
        <Text style={[styles.password, styles.passwordContainerLayout]}>
          verification code
        </Text>
        <Group121065
          style={[styles.groupChild14, styles.icon13Layout]}
          width={86}
          height={34}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 375,
    position: "absolute",
  },
  itemPosition: {
    height: 193,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout5: {
    width: 345,
    position: "absolute",
  },
  groupItemLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  iconLayout2: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  textTypo: {
    left: 76,
    textAlign: "left",
    fontFamily: "Arial",
    lineHeight: 14,
    fontSize: 14,
    position: "absolute",
  },
  text1Typo: {
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    lineHeight: 18,
    textAlign: "left",
    fontFamily: "Arial",
  },
  text1Position: {
    top: 146,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 81,
    width: 345,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.bg3,
    borderRadius: 8,
  },
  recordFlexBox: {
    textAlign: "center",
    color: Color.wz1,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 168,
    width: 345,
    position: "absolute",
  },
  groupLayout3: {
    height: 36,
    position: "absolute",
  },
  iconPosition4: {
    borderRadius: 30,
    left: 0,
    top: 0,
  },
  vectorIconLayout1: {
    height: 12,
    width: 16,
    top: 12,
    position: "absolute",
  },
  depositWrapperLayout: {
    height: 16,
    position: "absolute",
  },
  icon3Layout: {
    width: 136,
    height: 36,
    position: "absolute",
  },
  groupLayout2: {
    height: 28,
    width: 79,
    position: "absolute",
  },
  childGroupPosition: {
    left: 0,
    top: 0,
  },
  iconLayout: {
    height: 13,
    position: "absolute",
  },
  groupChildLayout: {
    height: 1,
    width: 316,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: "#292f36",
    borderStyle: "dashed",
    left: 30,
    position: "absolute",
  },
  vipTypo: {
    left: 65,
    color: Color.wz1,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: "Arial",
    fontSize: 14,
  },
  parentPosition: {
    left: 33,
    position: "absolute",
  },
  settingTypo: {
    left: 32,
    color: Color.wz1,
    lineHeight: 12,
    textTransform: "capitalize",
    fontWeight: "700",
    textAlign: "left",
    fontFamily: "Arial",
    fontSize: 14,
    position: "absolute",
  },
  iconPosition3: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "8.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout1: {
    height: 30,
    position: "absolute",
  },
  child2Layout: {
    height: 32,
    position: "absolute",
  },
  groupLayout: {
    width: 36,
    left: 24,
  },
  spinTypo: {
    left: 70,
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
    fontFamily: "Arial",
    lineHeight: 14,
    fontSize: 14,
    position: "absolute",
  },
  passwordContainerLayout: {
    lineHeight: 12,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition2: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  iconPosition1: {
    bottom: "40.51%",
    top: "34.18%",
    height: "25.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  depositTypo: {
    top: "65.82%",
    lineHeight: 12,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Arial",
    position: "absolute",
  },
  groupChild11Layout: {
    height: 486,
    left: "50%",
    width: 345,
  },
  groupChildBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  loginTypo: {
    lineHeight: 16,
    textTransform: "capitalize",
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
    fontFamily: "Arial",
    position: "absolute",
  },
  usernameTypo: {
    top: "15.64%",
    lineHeight: 12,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: "Arial",
    position: "absolute",
  },
  icon11Layout: {
    height: 48,
    width: 321,
    position: "absolute",
  },
  vectorIcon14Position: {
    left: "3.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  unionLayout: {},
  icon12Layout: {
    height: 50,
    width: 322,
    position: "absolute",
  },
  iconPosition: {
    borderRadius: 60,
    left: 0,
    top: 0,
  },
  icon13Layout: {
    height: 34,
    position: "absolute",
  },
  pleaseTypo: {
    color: "#f65252",
    left: 27,
    lineHeight: 12,
    fontSize: 12,
    textTransform: "capitalize",
    fontWeight: "700",
    textAlign: "left",
    fontFamily: "Arial",
    position: "absolute",
  },
  child: {
    backgroundColor: "transparent",
  },
  item: {
    opacity: 0.4,
  },
  maskGroupIcon: {
    height: 192,
    left: 15,
    top: 45,
  },
  groupItem: {
    left: 0,
    top: 0,
  },
  icon: {
    top: 8,
    left: 8,
  },
  ellipseParent: {
    left: 30,
    top: 60,
  },
  icon1: {
    top: 85,
    left: 186,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 82,
    textAlign: "left",
    color: Color.color,
    fontFamily: "Arial",
    fontWeight: "900",
    lineHeight: 14,
    fontSize: 14,
  },
  userName: {
    top: 65,
    color: "#e7e7e7",
    fontWeight: "700",
    textAlign: "left",
    fontFamily: "Arial",
    lineHeight: 14,
    fontSize: 14,
  },
  teamsCenter: {
    top: 256,
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "700",
    color: Color.color,
    left: 15,
    position: "absolute",
  },
  text1: {
    fontSize: 24,
    color: Color.color9,
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    lineHeight: 18,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "900",
    left: 30,
  },
  balance: {
    top: 124,
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
    fontFamily: "Arial",
    lineHeight: 14,
    fontSize: 14,
    left: 30,
    position: "absolute",
  },
  groupInner: {
    height: 81,
    width: 345,
    position: "absolute",
    left: 0,
    top: 0,
  },
  depositRecord: {
    width: 63,
    lineHeight: 12,
    position: "absolute",
    fontSize: 12,
    left: 176,
    fontWeight: "700",
    fontFamily: "Arial",
    top: 45,
  },
  withdrawalRecord: {
    left: 252,
    width: 77,
    lineHeight: 12,
    position: "absolute",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Arial",
    top: 45,
  },
  bettingRecord: {
    left: 21,
    lineHeight: 12,
    position: "absolute",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Arial",
    top: 45,
  },
  accountRecord: {
    left: 100,
    lineHeight: 12,
    position: "absolute",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Arial",
    top: 45,
  },
  vectorIcon: {
    right: "84.06%",
    left: "8.41%",
    bottom: "51.85%",
    height: "32.1%",
    maxWidth: "100%",
    top: "16.05%",
    width: "7.54%",
  },
  vectorIcon1: {
    width: "5.97%",
    right: "60.99%",
    left: "33.04%",
    bottom: "51.85%",
    height: "32.1%",
    maxWidth: "100%",
    top: "16.05%",
  },
  vectorIcon2: {
    height: "31.98%",
    right: "36.52%",
    bottom: "51.98%",
    left: "55.94%",
    borderRadius: 6,
    top: "16.05%",
    maxWidth: "100%",
    width: "7.54%",
  },
  vectorIcon3: {
    width: "7.07%",
    right: "12.35%",
    left: "80.58%",
    bottom: "51.85%",
    height: "32.1%",
    maxWidth: "100%",
    top: "16.05%",
  },
  rectangleParent: {
    top: 284,
    left: 15,
  },
  rectangleView: {
    backgroundColor: Color.bg3,
    borderRadius: 8,
    left: 0,
    top: 0,
  },
  rectangleContainer: {
    top: 375,
    left: 15,
  },
  icon2: {
    position: "absolute",
  },
  vectorIcon4: {
    left: 22,
  },
  deposit: {
    width: 59,
    height: 16,
    textAlign: "left",
    color: Color.color,
    fontFamily: "Arial",
    fontWeight: "900",
    lineHeight: 14,
    fontSize: 14,
    left: 0,
    top: 0,
  },
  depositWrapper: {
    left: 44,
    width: 59,
    height: 16,
    top: 10,
  },
  group: {
    width: 124,
    height: 36,
    top: 184,
    left: 176,
  },
  icon3: {
    borderRadius: 30,
    left: 0,
    top: 0,
  },
  withdrawal: {
    width: 87,
    textAlign: "left",
    color: Color.color,
    fontFamily: "Arial",
    fontWeight: "900",
    lineHeight: 14,
    fontSize: 14,
    left: 0,
    top: 0,
  },
  withdrawalWrapper: {
    left: 36,
    width: 87,
    top: 10,
  },
  vectorIcon5: {
    left: 14,
  },
  container: {
    top: 184,
    left: 30,
  },
  rectangleLineargradient: {
    borderRadius: 30,
    left: 0,
    top: 0,
    backgroundColor: "transparent",
  },
  vip4: {
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
    fontFamily: "Arial",
    lineHeight: 14,
    fontSize: 14,
    position: "absolute",
  },
  vip4Wrapper: {
    left: 35,
    width: 35,
    height: 14,
    top: 7,
    position: "absolute",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  v4Icon: {
    left: 9,
    top: 4,
  },
  groupContainer: {
    left: 266,
    top: 60,
  },
  groupChild1: {
    top: 553,
    height: 347,
    left: "50%",
    marginLeft: -172.5,
    width: 345,
    position: "absolute",
  },
  strokeIcon: {
    left: 337,
    top: 620,
  },
  strokeIcon1: {
    top: 572,
    left: 337,
  },
  strokeIcon2: {
    top: 396,
    left: 337,
  },
  strokeIcon3: {
    top: 667,
    left: 337,
  },
  strokeIcon4: {
    top: 452,
    left: 337,
  },
  strokeIcon5: {
    top: 508,
    left: 337,
  },
  strokeIcon6: {
    top: 766,
    left: 337,
  },
  strokeIcon7: {
    top: 814,
    left: 337,
  },
  strokeIcon8: {
    top: 862,
    left: 337,
  },
  lineView: {
    top: 651,
  },
  groupChild2: {
    top: 603,
  },
  groupChild3: {
    top: 699,
  },
  groupChild4: {
    top: 747,
  },
  groupChild5: {
    top: 797,
  },
  groupChild6: {
    top: 845,
  },
  promotion: {
    top: 620,
    lineHeight: 14,
    position: "absolute",
  },
  vip: {
    top: 573,
    lineHeight: 12,
    position: "absolute",
    textTransform: "capitalize",
  },
  setting: {
    top: 4,
  },
  vectorIcon6: {
    width: "25%",
    right: "75%",
  },
  settingParent: {
    top: 762,
    height: 20,
    width: 80,
  },
  logout: {
    top: 863,
    lineHeight: 12,
    position: "absolute",
    textTransform: "capitalize",
  },
  vectorIcon7: {
    width: "5.57%",
    top: "95.44%",
    right: "85.89%",
    bottom: "2.33%",
    height: "2.22%",
  },
  vectorIcon8: {
    width: "16.81%",
    right: "83.19%",
  },
  liveSupport: {
    top: 4,
    width: 87,
  },
  vectorParent: {
    width: "31.73%",
    top: "90.11%",
    right: "59.47%",
    bottom: "7.67%",
    left: "8.8%",
    height: "2.22%",
    position: "absolute",
  },
  notification: {
    top: 5,
  },
  groupIcon: {
    width: "18.36%",
    right: "81.64%",
  },
  notificationParent: {
    top: 662,
    width: 110,
    height: 22,
  },
  free28Bonus: {
    width: 215,
    top: 710,
    height: 30,
    left: 65,
    color: Color.wz1,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: "Arial",
    fontSize: 14,
    lineHeight: 14,
  },
  vectorIcon9: {
    height: "2%",
    width: "6.11%",
    top: "63.33%",
    right: "85.36%",
    bottom: "34.67%",
  },
  icon4: {
    left: 10,
    width: 356,
    top: 7,
  },
  group120051: {
    top: 499,
    width: 36,
    left: 24,
  },
  groupChild7: {
    top: 441,
    height: 36,
    position: "absolute",
  },
  invite1Icon: {
    height: "4%",
    width: "9.6%",
    top: "42.78%",
    right: "84%",
    bottom: "53.22%",
    left: "6.4%",
  },
  groupChild8: {
    top: 431,
  },
  groupChild9: {
    top: 487,
  },
  invite: {
    top: 396,
  },
  spin: {
    top: 452,
  },
  cashback: {
    top: 508,
  },
  reconnendFriendsToContainer: {
    top: 391,
    left: 126,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: "Arial",
  },
  winRealMoneyContainer: {
    top: 453,
    left: 119,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: "Arial",
  },
  weeklyMax20: {
    top: 509,
    left: 155,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: "Arial",
  },
  vectorIcon10: {
    height: "1.89%",
    top: "79.33%",
    right: "85.87%",
    bottom: "18.78%",
    left: "8.8%",
  },
  groupChild10: {
    borderRadius: 4,
    width: 80,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  instalall: {
    top: 9,
    left: 7,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
    fontFamily: "Arial",
  },
  groupView: {
    left: 265,
    top: 710,
    height: 30,
    width: 80,
  },
  vectorIcon11: {
    top: "68.56%",
    right: "85.6%",
    bottom: "29.22%",
    left: "9.07%",
    height: "2.22%",
  },
  icon5: {
    height: "81.01%",
    top: "18.99%",
  },
  icon6: {
    width: "5.2%",
    right: "7.33%",
    left: "87.47%",
  },
  icon7: {
    width: "5.28%",
    right: "26.72%",
    left: "68%",
  },
  icon8: {
    width: "5.36%",
    right: "67.71%",
    left: "26.93%",
  },
  members: {
    left: "5.33%",
    color: Color.wz1,
    textAlign: "left",
  },
  promotion1: {
    left: "21.6%",
    textAlign: "center",
    color: Color.wz1,
  },
  home: {
    left: "83.73%",
    color: Color.color3,
    textAlign: "left",
  },
  deposit1: {
    left: "64.53%",
    color: Color.wz1,
    textAlign: "left",
  },
  deposit2: {
    left: "45.87%",
    color: Color.wz1,
    textAlign: "left",
  },
  vectorIcon12: {
    width: "6.32%",
    right: "87.01%",
    left: "6.67%",
  },
  invite1Icon1: {
    height: "68.35%",
    width: "14.4%",
    top: "-6.33%",
    right: "42.67%",
    bottom: "37.97%",
    left: "42.93%",
  },
  parent1: {
    marginLeft: -187.5,
    bottom: 88,
    height: 79,
    left: "50%",
  },
  groupParent: {
    height: 900,
    left: 0,
    top: 0,
  },
  child1: {
    backgroundColor: "#000",
    opacity: 0.8,
    left: 0,
    top: 0,
    height: 812,
  },
  groupChild11: {
    borderRadius: 12,
    borderColor: "#2c353e",
    borderWidth: 1,
    opacity: 0.98,
    height: 486,
    left: "50%",
    width: 345,
    marginLeft: -172.5,
    top: 0,
    borderStyle: "solid",
    backgroundColor: Color.bg,
  },
  receiveRewardsAfter: {
    top: 14,
    left: 17,
    width: 313,
    fontSize: 14,
  },
  icon9: {
    height: "9.88%",
    width: "93.04%",
    top: "11.93%",
    right: "3.19%",
    bottom: "78.19%",
    left: "3.77%",
    borderRadius: 8,
  },
  username: {
    width: "36.52%",
    left: "35.94%",
    textTransform: "capitalize",
    fontSize: 14,
  },
  icon10: {
    height: "3.29%",
    width: "5.42%",
    top: "15.23%",
    right: "6.75%",
    bottom: "81.48%",
    left: "87.83%",
  },
  username1: {
    width: "6.35%",
    left: "23.88%",
    color: Color.wz1,
    fontSize: 12,
  },
  groupChild12: {
    height: "5.14%",
    width: "0.29%",
    top: "14.3%",
    right: "66.81%",
    bottom: "80.56%",
    left: "32.9%",
    borderColor: "#455461",
    borderRightWidth: 1,
  },
  vectorIcon13: {
    height: "3.68%",
    width: "3.94%",
    top: "15.02%",
    right: "88.81%",
    bottom: "81.3%",
    left: "7.25%",
  },
  d62a6059252dd42a1fed252c093b5bIcon: {
    marginTop: -170,
    top: "50%",
    left: 50,
    borderRadius: 2,
    width: 26,
    height: 18,
    position: "absolute",
  },
  icon11: {
    borderRadius: 8,
    left: 0,
    top: 0,
  },
  confirmPassword: {
    top: 18,
    left: 37,
    color: Color.wz1,
    textTransform: "capitalize",
    fontWeight: "700",
    textAlign: "left",
    fontFamily: "Arial",
    fontSize: 14,
  },
  vectorIcon14: {
    height: "35.63%",
    width: "4.74%",
    top: "31.25%",
    right: "91.53%",
    bottom: "33.12%",
  },
  parent2: {
    top: 138,
    left: 13,
  },
  vectorIcon15: {
    height: "16.67%",
    width: "4.36%",
    top: "25%",
    right: "93.15%",
    bottom: "58.33%",
    left: "2.49%",
  },
  theMobileNumber: {
    top: 20,
    left: 28,
    width: 283,
    textTransform: "capitalize",
    lineHeight: 18,
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
    fontFamily: "Arial",
    fontSize: 14,
    position: "absolute",
  },
  unionParent: {
    marginLeft: -159.5,
    top: 298,
    left: "50%",
    position: "absolute",
  },
  icon12: {
    position: "absolute",
  },
  login: {
    marginLeft: -81,
    top: 17,
    left: "50%",
    fontSize: 16,
  },
  parent3: {
    top: 416,
    left: 13,
  },
  rectangleParent1: {
    marginLeft: -173.5,
    top: 146,
    position: "absolute",
  },
  child2: {
    top: 648,
    left: 171,
  },
  icon13: {
    borderRadius: 60,
    left: 0,
    top: 0,
  },
  confirmPassword1: {
    top: 11,
    left: 27,
    lineHeight: 12,
    textTransform: "capitalize",
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
    fontFamily: "Arial",
    fontSize: 14,
    position: "absolute",
  },
  parent4: {
    top: 291,
    left: 258,
    width: 78,
    height: 34,
  },
  theMobileNum: {
    top: 260,
  },
  pleaseEnterA: {
    top: 340,
  },
  pleaseEnterA1: {
    top: 420,
  },
  icon14: {
    top: "0%",
    height: "100%",
    right: "0%",
    borderRadius: 8,
  },
  groupChild13: {
    height: "27.08%",
    width: "4.67%",
    top: "35.42%",
    right: "91.59%",
    bottom: "37.5%",
  },
  password: {
    top: "37.5%",
    left: "11.53%",
    color: Color.wz1,
    textTransform: "capitalize",
    fontWeight: "700",
    textAlign: "left",
    fontFamily: "Arial",
    fontSize: 14,
  },
  groupChild14: {
    left: 223,
    top: 7,
  },
  parent5: {
    height: "5.91%",
    width: "85.6%",
    top: "44.83%",
    right: "7.2%",
    bottom: "49.26%",
    left: "7.2%",
    position: "absolute",
  },
  safeareaview: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.bg,
  },
});

export default Component9;