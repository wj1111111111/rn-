import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Ellipse710 from "../assets/ellipse7";
import Component334 from "../assets/";
import GroupComponent3 from "../components/GroupComponent3";
import Component335 from "../assets/";
import Vector434 from "../assets/vector4";
import Component336 from "../assets/";
import Vector435 from "../assets/vector4";
import Stroke290 from "../assets/stroke2";
import Stroke291 from "../assets/stroke2";
import Stroke292 from "../assets/stroke2";
import Stroke293 from "../assets/stroke2";
import Stroke294 from "../assets/stroke2";
import Stroke295 from "../assets/stroke2";
import Stroke296 from "../assets/stroke2";
import Stroke297 from "../assets/stroke2";
import Stroke298 from "../assets/stroke2";
import Vector510 from "../assets/vector5";
import Vector69 from "../assets/vector6";
import Vector710 from "../assets/vector7";
import Group83010 from "../assets/group830";
import Vector810 from "../assets/vector8";
import Vector910 from "../assets/vector9";
import Vector1010 from "../assets/vector10";
import GroupComponent2 from "../components/GroupComponent2";
import Component337 from "../assets/";
import Component338 from "../assets/";
import Vector1215 from "../assets/vector12";
import Component339 from "../assets/";
import Vector1313 from "../assets/vector13";
import Union35 from "../assets/union3";
import Vector1410 from "../assets/vector14";
import Component340 from "../assets/";
import Group84810 from "../assets/group848";
import Component341 from "../assets/";
import Component342 from "../assets/";
import Group121105 from "../assets/group12110";
import Group121065 from "../assets/group12106";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Component9 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={[styles.groupParent, styles.child1Position]}>
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
          style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
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
            style={[styles.icon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/8713-1.png")}
          />
        </View>
        <Component334 style={styles.icon1} width={10} height={10} />
        <Text style={[styles.text, styles.textFlexBox]}>98955464616</Text>
        <Text style={[styles.userName, styles.vip4Typo]}>User name</Text>
        <Text style={[styles.teamsCenter, styles.text1Text]}>Teams center</Text>
        <Text style={[styles.text1, styles.text1Position]}>₱ 1324.00</Text>
        <Text style={[styles.balance, styles.vip4Typo]}>Balance</Text>
        <GroupComponent3 />
        <View style={[styles.rectangleContainer, styles.maskGroupIconPosition]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
        </View>
        <View style={[styles.group, styles.groupLayout3]}>
          <Component335
            style={[styles.icon2, styles.iconPosition4]}
            width={124}
            height={36}
          />
          <Vector434
            style={[styles.vectorIcon, styles.vectorIconLayout1]}
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
          <Component336
            style={[styles.icon3, styles.icon3Layout]}
            width={136}
            height={36}
          />
          <View style={[styles.withdrawalWrapper, styles.depositWrapperLayout]}>
            <Text style={[styles.withdrawal, styles.depositWrapperLayout]}>
              Withdrawal
            </Text>
          </View>
          <Vector435
            style={[styles.vectorIcon1, styles.vectorIconLayout1]}
            width={16}
            height={12}
          />
        </View>
        <View style={[styles.groupContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleParent, styles.rectangleLayout]}>
            <LinearGradient
              style={[styles.rectangleLineargradient, styles.rectangleLayout]}
              locations={[0, 1]}
              colors={["#373c42", "#2c3135"]}
              useAngle={true}
              angle={180}
            />
            <View style={styles.vip4Wrapper}>
              <Text style={[styles.vip4, styles.vip4Typo]}>VIP 4</Text>
            </View>
          </View>
          <Image
            style={[styles.v4Icon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/v4.png")}
          />
        </View>
        <View style={[styles.rectangleView, styles.groupInnerLayout]} />
        <Stroke290
          style={[styles.strokeIcon, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke291
          style={[styles.strokeIcon1, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke292
          style={[styles.strokeIcon2, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke293
          style={[styles.strokeIcon3, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke294
          style={[styles.strokeIcon4, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke295
          style={[styles.strokeIcon5, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke296
          style={[styles.strokeIcon6, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke297
          style={[styles.strokeIcon7, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke298
          style={[styles.strokeIcon8, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <View style={[styles.lineView, styles.groupChildLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.groupChild3, styles.groupChildLayout]} />
        <View style={[styles.groupChild4, styles.groupChildLayout]} />
        <View style={[styles.groupChild5, styles.groupChildLayout]} />
        <Text style={[styles.promotion, styles.vipPosition]}>Promotion</Text>
        <Text style={[styles.vip, styles.passwordContainerTypo]}>VIP</Text>
        <View style={[styles.settingParent, styles.parentPosition]}>
          <Text style={[styles.setting, styles.settingTypo]}>Setting</Text>
          <Vector510 style={[styles.vectorIcon2, styles.iconLayout]} />
        </View>
        <Text style={[styles.logout, styles.passwordContainerTypo]}>
          Logout
        </Text>
        <Vector69 style={[styles.vectorIcon3, styles.vectorIconPosition]} />
        <View style={styles.vectorParent}>
          <Vector710 style={[styles.vectorIcon4, styles.iconLayout]} />
          <Text style={[styles.liveSupport, styles.settingTypo]}>
            Live Support
          </Text>
        </View>
        <View style={[styles.notificationParent, styles.parentPosition]}>
          <Text style={[styles.notification, styles.settingTypo]}>
            Notification
          </Text>
          <Group83010 style={[styles.groupIcon, styles.iconLayout]} />
        </View>
        <Text
          style={[styles.free28Bonus, styles.groupLayout2]}
        >{`Free ₱28 bonus by
downloading the official APP`}</Text>
        <Vector810 style={[styles.vectorIcon5, styles.vectorIconPosition]} />
        <Image
          style={[styles.icon4, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/-111.png")}
        />
        <Image
          style={[styles.group120051, styles.child2Layout]}
          resizeMode="cover"
          source={require("../assets/group-12005-1.png")}
        />
        <Image
          style={[styles.groupChild6, styles.groupLayout1]}
          resizeMode="cover"
          source={require("../assets/group-12097.png")}
        />
        <Image
          style={[styles.invite1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/invite-1.png")}
        />
        <View style={[styles.groupChild7, styles.groupChildLayout]} />
        <View style={[styles.groupChild8, styles.groupChildLayout]} />
        <Text style={[styles.invite, styles.spinTypo]}>Invite -</Text>
        <Text style={[styles.spin, styles.spinTypo]}>Spin -</Text>
        <Text style={[styles.cashback, styles.spinTypo]}>Cashback -</Text>
        <Text
          style={[
            styles.reconnendFriendsToContainer,
            styles.passwordContainerTypo,
          ]}
        >
          {`Reconnend friends
To join`}{" "}
          jbet88 and Earn money
        </Text>
        <Text
          style={[styles.winRealMoneyContainer, styles.passwordContainerTypo]}
        >
          {`Win real money `}₱500
        </Text>
        <Text style={[styles.weeklyMax20, styles.passwordContainerTypo]}>
          {`Weekly `}Max:20%
        </Text>
        <Vector910 style={[styles.vectorIcon6, styles.vectorIconLayout]} />
        <View style={[styles.rectangleGroup, styles.groupLayout2]}>
          <LinearGradient
            style={[styles.groupChild9, styles.groupLayout2]}
            locations={[0, 1]}
            colors={["#76cd01", "#498d03"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.instalall, styles.passwordContainerTypo]}>
            INSTALALL
          </Text>
        </View>
        <Vector1010 style={[styles.vectorIcon7, styles.vectorIconLayout]} />
        <GroupComponent2 />
      </View>
      <View style={[styles.child1, styles.child1Position]} />
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild10, styles.groupChildBorder]} />
        <Text style={[styles.receiveRewardsAfter, styles.loginTypo]}>
          Receive rewards after completing mobilephone verification
        </Text>
        <Component337 style={[styles.icon5, styles.iconLayout]} />
        <Text style={[styles.username, styles.usernameTypo]}>1234567890|</Text>
        <Component338 style={[styles.icon6, styles.iconLayout]} />
        <Text style={[styles.username1, styles.usernameTypo]}>+55</Text>
        <View style={[styles.groupChild11, styles.groupChildBorder]} />
        <Vector1215 style={[styles.vectorIcon8, styles.iconLayout]} />
        <Image
          style={styles.d62a6059252dd42a1fed252c093b5bIcon}
          resizeMode="cover"
          source={require("../assets/d62a6059252dd42a1fed252c093b5bb5c8eab854-1.png")}
        />
        <View style={[styles.parent1, styles.icon7Layout]}>
          <Component339
            style={[styles.icon7, styles.icon7Layout]}
            width={321}
            height={48}
          />
          <Text style={[styles.confirmPassword, styles.passwordContainerTypo]}>
            SMS
          </Text>
          <Vector1313
            style={[styles.vectorIcon9, styles.vectorIcon9Position]}
          />
        </View>
        <View style={[styles.unionParent, styles.unionLayout]}>
          <Union35 style={styles.unionLayout} width={321} height={84} />
          <Vector1410 style={[styles.vectorIcon10, styles.iconLayout]} />
          <Text style={styles.theMobileNumber}>
            The mobile number will be used to check that your money is safe when
            you try to withdraw
          </Text>
        </View>
        <View style={[styles.parent2, styles.icon8Layout]}>
          <Component340
            style={[styles.icon8, styles.iconPosition]}
            width={322}
            height={50}
          />
          <Text style={[styles.login, styles.loginTypo]}>
            Complete verification
          </Text>
        </View>
      </View>
      <Group84810
        style={[styles.child2, styles.child2Layout]}
        width={32}
        height={32}
      />
      <View style={[styles.parent3, styles.icon9Layout]}>
        <Component341
          style={[styles.icon9, styles.icon9Layout]}
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
      <View style={styles.parent4}>
        <Component342 style={[styles.icon10, styles.iconLayout]} />
        <Group121105
          style={[styles.groupChild12, styles.vectorIcon9Position]}
        />
        <Text style={[styles.password, styles.passwordContainerTypo]}>
          verification code
        </Text>
        <Group121065
          style={[styles.groupChild13, styles.icon9Layout]}
          width={86}
          height={34}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  child1Position: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  itemPosition: {
    height: 193,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  maskGroupIconPosition: {
    width: 345,
    left: 15,
    position: "absolute",
  },
  groupItemLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  iconLayout3: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    lineHeight: 14,
  },
  vip4Typo: {
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  text1Text: {
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    lineHeight: 18,
    textAlign: "left",
  },
  text1Position: {
    top: 146,
    position: "absolute",
  },
  groupInnerLayout: {
    backgroundColor: Color.bg3,
    borderRadius: Border.br_8,
    width: 345,
    position: "absolute",
  },
  groupLayout3: {
    height: 36,
    position: "absolute",
  },
  iconPosition4: {
    borderRadius: Border.br_30,
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
  rectangleLayout: {
    height: 28,
    width: 79,
    position: "absolute",
  },
  iconLayout2: {
    height: 13,
    position: "absolute",
  },
  groupChildLayout: {
    height: 1,
    width: 316,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorDarkslategray700,
    borderStyle: "dashed",
    left: 30,
    position: "absolute",
  },
  vipPosition: {
    left: 65,
    color: Color.wz1,
    fontSize: FontSize.size_14,
  },
  passwordContainerTypo: {
    lineHeight: 12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  parentPosition: {
    left: 33,
    position: "absolute",
  },
  settingTypo: {
    left: 32,
    lineHeight: 12,
    color: Color.wz1,
    textTransform: "capitalize",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_14,
    position: "absolute",
  },
  iconLayout: {
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
  groupLayout2: {
    height: 30,
    position: "absolute",
  },
  child2Layout: {
    height: 32,
    position: "absolute",
  },
  groupLayout1: {
    width: 36,
    left: 24,
  },
  spinTypo: {
    left: 70,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
    lineHeight: 14,
    fontSize: FontSize.size_14,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
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
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
    position: "absolute",
  },
  usernameTypo: {
    top: "15.64%",
    lineHeight: 12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  icon7Layout: {
    height: 48,
    width: 321,
    position: "absolute",
  },
  vectorIcon9Position: {
    left: "3.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  unionLayout: {},
  icon8Layout: {
    height: 50,
    width: 322,
    position: "absolute",
  },
  iconPosition: {
    borderRadius: Border.br_60,
    left: 0,
    top: 0,
  },
  icon9Layout: {
    height: 34,
    position: "absolute",
  },
  pleaseTypo: {
    color: Color.colorTomato200,
    left: 27,
    fontSize: FontSize.size_12,
    lineHeight: 12,
    textTransform: "capitalize",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  child: {
    backgroundColor: "transparent",
  },
  item: {
    opacity: 0.4,
  },
  maskGroupIcon: {
    top: 45,
    height: 192,
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
    color: Color.color,
    fontFamily: FontFamily.microsoftYaHei,
    fontWeight: "900",
    fontSize: FontSize.size_14,
    left: 76,
    lineHeight: 14,
    position: "absolute",
  },
  userName: {
    top: 65,
    color: Color.colorGainsboro100,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.size_14,
    left: 76,
    position: "absolute",
  },
  teamsCenter: {
    top: 256,
    textTransform: "capitalize",
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    color: Color.color,
    left: 15,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_24,
    color: Color.color9,
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    lineHeight: 18,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHei,
    fontWeight: "900",
    left: 30,
  },
  balance: {
    top: 124,
    textAlign: "left",
    lineHeight: 14,
    color: Color.color,
    fontSize: FontSize.size_14,
    left: 30,
    position: "absolute",
  },
  groupInner: {
    height: 168,
    left: 0,
    top: 0,
  },
  rectangleContainer: {
    top: 375,
    height: 168,
  },
  icon2: {
    position: "absolute",
  },
  vectorIcon: {
    left: 22,
  },
  deposit: {
    width: 59,
    height: 16,
    textAlign: "left",
    lineHeight: 14,
    color: Color.color,
    fontFamily: FontFamily.microsoftYaHei,
    fontWeight: "900",
    fontSize: FontSize.size_14,
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
    left: 176,
    width: 124,
    height: 36,
    top: 184,
  },
  icon3: {
    borderRadius: Border.br_30,
    left: 0,
    top: 0,
  },
  withdrawal: {
    width: 87,
    textAlign: "left",
    lineHeight: 14,
    color: Color.color,
    fontFamily: FontFamily.microsoftYaHei,
    fontWeight: "900",
    fontSize: FontSize.size_14,
    left: 0,
    top: 0,
  },
  withdrawalWrapper: {
    left: 36,
    width: 87,
    top: 10,
  },
  vectorIcon1: {
    left: 14,
  },
  container: {
    top: 184,
    left: 30,
  },
  rectangleLineargradient: {
    borderRadius: Border.br_30,
    left: 0,
    top: 0,
    backgroundColor: "transparent",
  },
  vip4: {
    textAlign: "left",
    lineHeight: 14,
    color: Color.color,
    fontSize: FontSize.size_14,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vip4Wrapper: {
    left: 35,
    width: 35,
    height: 14,
    top: 7,
    position: "absolute",
  },
  rectangleParent: {
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
  rectangleView: {
    top: 553,
    height: 347,
    left: "50%",
    marginLeft: -172.5,
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
  groupChild1: {
    top: 603,
  },
  groupChild2: {
    top: 699,
  },
  groupChild3: {
    top: 747,
  },
  groupChild4: {
    top: 797,
  },
  groupChild5: {
    top: 845,
  },
  promotion: {
    color: Color.wz1,
    top: 620,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 14,
    position: "absolute",
  },
  vip: {
    top: 573,
    color: Color.wz1,
    left: 65,
    fontSize: FontSize.size_14,
    textTransform: "capitalize",
  },
  setting: {
    top: 4,
  },
  vectorIcon2: {
    width: "25%",
    right: "75%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
  },
  settingParent: {
    top: 762,
    height: 20,
    width: 80,
  },
  logout: {
    top: 863,
    color: Color.wz1,
    left: 65,
    fontSize: FontSize.size_14,
    textTransform: "capitalize",
  },
  vectorIcon3: {
    width: "5.57%",
    top: "95.44%",
    right: "85.89%",
    bottom: "2.33%",
    height: "2.22%",
  },
  vectorIcon4: {
    width: "16.81%",
    right: "83.19%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
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
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
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
    color: Color.wz1,
    left: 65,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 14,
  },
  vectorIcon5: {
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
  groupChild6: {
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
  groupChild7: {
    top: 431,
  },
  groupChild8: {
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
    fontSize: FontSize.size_12,
  },
  winRealMoneyContainer: {
    top: 453,
    left: 119,
    fontSize: FontSize.size_12,
  },
  weeklyMax20: {
    top: 509,
    left: 155,
    fontSize: FontSize.size_12,
  },
  vectorIcon6: {
    height: "1.89%",
    top: "79.33%",
    right: "85.87%",
    bottom: "18.78%",
    left: "8.8%",
  },
  groupChild9: {
    borderRadius: Border.br_4,
    width: 80,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  instalall: {
    top: 9,
    left: 7,
    fontSize: FontSize.size_12,
    color: Color.color,
  },
  rectangleGroup: {
    left: 265,
    top: 710,
    height: 30,
    width: 80,
  },
  vectorIcon7: {
    top: "68.56%",
    right: "85.6%",
    bottom: "29.22%",
    left: "9.07%",
    height: "2.22%",
  },
  groupParent: {
    height: 900,
  },
  child1: {
    backgroundColor: Color.colorBlack,
    opacity: 0.8,
    height: 812,
  },
  groupChild10: {
    borderRadius: Border.br_12,
    borderColor: Color.colorDarkslategray600,
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
    fontSize: FontSize.size_14,
  },
  icon5: {
    height: "9.88%",
    width: "93.04%",
    top: "11.93%",
    right: "3.19%",
    bottom: "78.19%",
    left: "3.77%",
    borderRadius: Border.br_8,
  },
  username: {
    width: "36.52%",
    left: "35.94%",
    textTransform: "capitalize",
    fontSize: FontSize.size_14,
  },
  icon6: {
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
    fontSize: FontSize.size_12,
    color: Color.wz1,
  },
  groupChild11: {
    height: "5.14%",
    width: "0.29%",
    top: "14.3%",
    right: "66.81%",
    bottom: "80.56%",
    left: "32.9%",
    borderColor: Color.colorDarkslategray100,
    borderRightWidth: 1,
  },
  vectorIcon8: {
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
    borderRadius: Border.br_2,
    width: 26,
    height: 18,
    position: "absolute",
  },
  icon7: {
    borderRadius: Border.br_8,
    left: 0,
    top: 0,
  },
  confirmPassword: {
    top: 18,
    left: 37,
    color: Color.wz1,
    textTransform: "capitalize",
    fontSize: FontSize.size_14,
  },
  vectorIcon9: {
    height: "35.63%",
    width: "4.74%",
    top: "31.25%",
    right: "91.53%",
    bottom: "33.12%",
  },
  parent1: {
    top: 138,
    left: 13,
  },
  vectorIcon10: {
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
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
    fontSize: FontSize.size_14,
    position: "absolute",
  },
  unionParent: {
    marginLeft: -159.5,
    top: 298,
    left: "50%",
    position: "absolute",
  },
  icon8: {
    position: "absolute",
  },
  login: {
    marginLeft: -81,
    top: 17,
    left: "50%",
    fontSize: FontSize.size_16,
  },
  parent2: {
    top: 416,
    left: 13,
  },
  groupView: {
    marginLeft: -173.5,
    top: 146,
    position: "absolute",
  },
  child2: {
    top: 648,
    left: 171,
  },
  icon9: {
    borderRadius: Border.br_60,
    left: 0,
    top: 0,
  },
  confirmPassword1: {
    top: 11,
    left: 27,
    lineHeight: 12,
    textTransform: "capitalize",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
    fontSize: FontSize.size_14,
    position: "absolute",
  },
  parent3: {
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
  icon10: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_8,
    width: "100%",
  },
  groupChild12: {
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
    fontSize: FontSize.size_14,
  },
  groupChild13: {
    left: 223,
    top: 7,
  },
  parent4: {
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