import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Ellipse78 from "../assets/ellipse7";
import Component327 from "../assets/";
import GroupComponent3 from "../components/GroupComponent3";
import Component328 from "../assets/";
import Vector430 from "../assets/vector4";
import Component329 from "../assets/";
import Vector431 from "../assets/vector4";
import Stroke272 from "../assets/stroke2";
import Stroke273 from "../assets/stroke2";
import Stroke274 from "../assets/stroke2";
import Stroke275 from "../assets/stroke2";
import Stroke276 from "../assets/stroke2";
import Stroke277 from "../assets/stroke2";
import Stroke278 from "../assets/stroke2";
import Stroke279 from "../assets/stroke2";
import Stroke280 from "../assets/stroke2";
import Vector58 from "../assets/vector5";
import Vector67 from "../assets/vector6";
import Vector78 from "../assets/vector7";
import Group8308 from "../assets/group830";
import Vector88 from "../assets/vector8";
import Vector98 from "../assets/vector9";
import Vector108 from "../assets/vector10";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent4 from "../components/GroupComponent4";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Component7 = () => {
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
          <Ellipse78
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
        <Component327 style={styles.icon1} width={10} height={10} />
        <Text style={[styles.text, styles.textTypo]}>98955464616</Text>
        <Text style={[styles.userName, styles.vip4Typo]}>User name</Text>
        <Text style={[styles.teamsCenter, styles.text1Text]}>Teams center</Text>
        <Text style={[styles.text1, styles.text1Text]}>₱ 1324.00</Text>
        <Text style={[styles.balance, styles.vip4Typo]}>Balance</Text>
        <GroupComponent3 />
        <View style={[styles.rectangleContainer, styles.maskGroupIconPosition]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
        </View>
        <View style={[styles.group, styles.groupLayout1]}>
          <Component328
            style={[styles.icon2, styles.iconPosition3]}
            width={124}
            height={36}
          />
          <Vector430
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
          <Component329
            style={[styles.icon3, styles.icon3Layout]}
            width={136}
            height={36}
          />
          <View style={[styles.withdrawalWrapper, styles.depositWrapperLayout]}>
            <Text style={[styles.withdrawal, styles.depositWrapperLayout]}>
              Withdrawal
            </Text>
          </View>
          <Vector431
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
        <Stroke272
          style={[styles.strokeIcon, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke273
          style={[styles.strokeIcon1, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke274
          style={[styles.strokeIcon2, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke275
          style={[styles.strokeIcon3, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke276
          style={[styles.strokeIcon4, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke277
          style={[styles.strokeIcon5, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke278
          style={[styles.strokeIcon6, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke279
          style={[styles.strokeIcon7, styles.iconLayout2]}
          width={8}
          height={13}
        />
        <Stroke280
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
        <Text style={[styles.promotion, styles.promotionTypo]}>Promotion</Text>
        <Text style={[styles.vip, styles.vipTypo]}>VIP</Text>
        <View style={[styles.settingParent, styles.parentPosition]}>
          <Text style={[styles.setting, styles.settingTypo]}>Setting</Text>
          <Vector58 style={[styles.vectorIcon2, styles.iconLayout]} />
        </View>
        <Text style={[styles.logout, styles.vipTypo]}>Logout</Text>
        <Vector67 style={[styles.vectorIcon3, styles.vectorIconPosition]} />
        <View style={styles.vectorParent}>
          <Vector78 style={[styles.vectorIcon4, styles.iconLayout]} />
          <Text style={[styles.liveSupport, styles.settingTypo]}>
            Live Support
          </Text>
        </View>
        <View style={[styles.notificationParent, styles.parentPosition]}>
          <Text style={[styles.notification, styles.settingTypo]}>
            Notification
          </Text>
          <Group8308 style={[styles.groupIcon, styles.iconLayout]} />
        </View>
        <Text
          style={[styles.free28Bonus, styles.groupLayout]}
        >{`Free ₱28 bonus by
downloading the official APP`}</Text>
        <Vector88 style={[styles.vectorIcon5, styles.vectorIconPosition]} />
        <Image
          style={[styles.icon4, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/-111.png")}
        />
        <Image
          style={[styles.group120051, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-12005-1.png")}
        />
        <Image
          style={[styles.groupChild6, styles.groupPosition]}
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
          style={[styles.reconnendFriendsToContainer, styles.containerTypo]}
        >
          {`Reconnend friends
To join`}{" "}
          jbet88 and Earn money
        </Text>
        <Text style={[styles.winRealMoneyContainer, styles.containerTypo]}>
          {`Win real money `}₱500
        </Text>
        <Text style={[styles.weeklyMax20, styles.containerTypo]}>
          {`Weekly `}Max:20%
        </Text>
        <Vector98 style={[styles.vectorIcon6, styles.vectorIconLayout]} />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <LinearGradient
            style={[styles.groupChild9, styles.groupLayout]}
            locations={[0, 1]}
            colors={["#76cd01", "#498d03"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.instalall, styles.containerTypo]}>
            INSTALALL
          </Text>
        </View>
        <Vector108 style={[styles.vectorIcon7, styles.vectorIconLayout]} />
        <GroupComponent2 />
      </View>
      <View style={[styles.child1, styles.child1Position]} />
      <GroupComponent4 />
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
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHei,
    fontWeight: "900",
    lineHeight: 14,
    fontSize: FontSize.size_14,
    color: Color.color,
  },
  vip4Typo: {
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.size_14,
    position: "absolute",
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
    position: "absolute",
  },
  groupInnerLayout: {
    backgroundColor: Color.bg3,
    borderRadius: Border.br_8,
    width: 345,
    position: "absolute",
  },
  groupLayout1: {
    width: 124,
    height: 36,
    position: "absolute",
  },
  iconPosition3: {
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
  promotionTypo: {
    color: Color.wz1,
    left: 65,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.size_14,
  },
  vipTypo: {
    lineHeight: 12,
    color: Color.wz1,
    left: 65,
    textTransform: "capitalize",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_14,
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
  groupLayout: {
    height: 30,
    position: "absolute",
  },
  groupPosition: {
    width: 36,
    left: 24,
    position: "absolute",
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
  containerTypo: {
    fontSize: FontSize.size_12,
    lineHeight: 12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    width: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    left: 76,
    position: "absolute",
  },
  userName: {
    top: 65,
    color: Color.colorGainsboro100,
    left: 76,
  },
  teamsCenter: {
    top: 256,
    fontSize: FontSize.size_16,
    textTransform: "capitalize",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    lineHeight: 18,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    color: Color.color,
    left: 15,
  },
  text1: {
    top: 146,
    fontSize: FontSize.size_24,
    color: Color.color9,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    lineHeight: 18,
    fontFamily: FontFamily.microsoftYaHei,
    fontWeight: "900",
    left: 30,
  },
  balance: {
    top: 124,
    color: Color.color,
    left: 30,
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
    fontFamily: FontFamily.microsoftYaHei,
    fontWeight: "900",
    lineHeight: 14,
    fontSize: FontSize.size_14,
    color: Color.color,
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
    fontFamily: FontFamily.microsoftYaHei,
    fontWeight: "900",
    lineHeight: 14,
    fontSize: FontSize.size_14,
    color: Color.color,
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
    color: Color.color,
    left: 0,
    top: 0,
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
    marginLeft: -172.5,
    top: 553,
    left: "50%",
    height: 347,
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
    top: 620,
    position: "absolute",
  },
  vip: {
    top: 573,
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
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.size_14,
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
    height: 32,
  },
  groupChild6: {
    top: 441,
    height: 36,
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
  },
  winRealMoneyContainer: {
    top: 453,
    left: 119,
  },
  weeklyMax20: {
    top: 509,
    left: 155,
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
  safeareaview: {
    backgroundColor: Color.bg,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Component7;