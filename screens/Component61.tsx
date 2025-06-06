import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Ellipse77 from "../assets/ellipse7";
import Component322 from "../assets/";
import Vector148 from "../assets/vector1";
import Vector1117 from "../assets/vector11";
import Vector210 from "../assets/vector2";
import Vector37 from "../assets/vector3";
import Component323 from "../assets/";
import Vector428 from "../assets/vector4";
import Component324 from "../assets/";
import Vector429 from "../assets/vector4";
import Stroke1163 from "../assets/stroke11";
import Stroke1164 from "../assets/stroke11";
import Stroke1165 from "../assets/stroke11";
import Stroke1166 from "../assets/stroke11";
import Stroke1167 from "../assets/stroke11";
import Stroke1168 from "../assets/stroke11";
import Stroke1169 from "../assets/stroke11";
import Stroke1170 from "../assets/stroke11";
import Stroke1171 from "../assets/stroke11";
import Vector57 from "../assets/vector5";
import Vector66 from "../assets/vector6";
import Vector77 from "../assets/vector7";
import Group8307 from "../assets/group830";
import Vector87 from "../assets/vector8";
import Vector97 from "../assets/vector9";
import Vector107 from "../assets/vector10";
import GroupComponent2 from "../components/GroupComponent2";
import Component325 from "../assets/";
import Component326 from "../assets/";
import Vector1214 from "../assets/vector12";
import Component327 from "../assets/";
import Vector1312 from "../assets/vector13";
import Union215 from "../assets/union21";
import Vector149 from "../assets/vector14";
import Component328 from "../assets/";
import Group8489 from "../assets/group848";
import Component329 from "../assets/";
import Group121104 from "../assets/group12110";
import Group121064 from "../assets/group12106";
import Component330 from "../assets/";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Component6 = () => {
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
          style={styles.maskGroupIcon}
          resizeMode="cover"
          source={require("../assets/mask-group.png")}
        />
        <View style={[styles.ellipseParent, styles.groupItemLayout]}>
          <Ellipse77
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
        <Component322 style={styles.icon1} width={10} height={10} />
        <Text style={[styles.text, styles.textTypo]}>98955464616</Text>
        <Text style={[styles.userName, styles.passwordContainerTypo]}>
          User name
        </Text>
        <Text style={[styles.teamsCenter, styles.text1Text]}>Teams center</Text>
        <Text style={[styles.text1, styles.text1Text]}>₱ 1324.00</Text>
        <Text style={[styles.balance, styles.passwordContainerTypo]}>
          Balance
        </Text>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerPosition]} />
          <Text style={[styles.depositRecord, styles.recordTypo]}>
            Deposit Record
          </Text>
          <Text style={[styles.withdrawalRecord, styles.recordTypo]}>
            Withdrawal Record
          </Text>
          <Text style={[styles.bettingRecord, styles.recordTypo]}>{`Betting
Record`}</Text>
          <Text style={[styles.accountRecord, styles.recordTypo]}>{`Account
Record`}</Text>
          <Vector148 style={[styles.vectorIcon, styles.iconLayout1]} />
          <Vector1117 style={[styles.vectorIcon1, styles.iconLayout1]} />
          <Vector210 style={[styles.vectorIcon2, styles.iconLayout1]} />
          <Vector37 style={[styles.vectorIcon3, styles.iconLayout1]} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
        </View>
        <View style={[styles.group, styles.groupLayout3]}>
          <Component323
            style={[styles.icon2, styles.iconPosition1]}
            width={124}
            height={36}
          />
          <Vector428
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
          <Component324
            style={[styles.icon3, styles.icon3Layout]}
            width={136}
            height={36}
          />
          <View style={[styles.withdrawalWrapper, styles.depositWrapperLayout]}>
            <Text style={[styles.withdrawal, styles.depositWrapperLayout]}>
              Withdrawal
            </Text>
          </View>
          <Vector429
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
              <Text style={[styles.vip4, styles.passwordContainerTypo]}>
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
        <View style={styles.groupChild1} />
        <Stroke1163
          style={[styles.strokeIcon, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke1164
          style={[styles.strokeIcon1, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke1165
          style={[styles.strokeIcon2, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke1166
          style={[styles.strokeIcon3, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke1167
          style={[styles.strokeIcon4, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke1168
          style={[styles.strokeIcon5, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke1169
          style={[styles.strokeIcon6, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke1170
          style={[styles.strokeIcon7, styles.iconLayout]}
          width={8}
          height={13}
        />
        <Stroke1171
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
          <Vector57 style={[styles.vectorIcon6, styles.iconPosition]} />
        </View>
        <Text style={[styles.logout, styles.vipTypo]}>Logout</Text>
        <Vector66 style={[styles.vectorIcon7, styles.vectorIconPosition]} />
        <View style={styles.vectorParent}>
          <Vector77 style={[styles.vectorIcon8, styles.iconPosition]} />
          <Text style={[styles.liveSupport, styles.settingTypo]}>
            Live Support
          </Text>
        </View>
        <View style={[styles.notificationParent, styles.parentPosition]}>
          <Text style={[styles.notification, styles.settingTypo]}>
            Notification
          </Text>
          <Group8307 style={[styles.groupIcon, styles.iconPosition]} />
        </View>
        <Text
          style={[styles.free28Bonus, styles.groupLayout1]}
        >{`Free ₱28 bonus by
downloading the official APP`}</Text>
        <Vector87 style={[styles.vectorIcon9, styles.vectorIconPosition]} />
        <Image
          style={[styles.icon4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-1111.png")}
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
        <Vector97 style={[styles.vectorIcon10, styles.vectorIconLayout]} />
        <View style={[styles.groupView, styles.groupLayout1]}>
          <LinearGradient
            style={[styles.groupChild10, styles.icon10Position]}
            locations={[0, 1]}
            colors={["#76cd01", "#498d03"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.instalall, styles.passwordContainerLayout]}>
            INSTALALL
          </Text>
        </View>
        <Vector107 style={[styles.vectorIcon11, styles.vectorIconLayout]} />
        <GroupComponent2 />
      </View>
      <View style={[styles.child1, styles.child1Position]} />
      <View style={[styles.rectangleParent1, styles.groupChild11Layout]}>
        <View style={[styles.groupChild11, styles.groupChildBorder]} />
        <Text style={[styles.receiveRewardsAfter, styles.loginTypo]}>
          Receive rewards after completing mobilephone verification
        </Text>
        <Component325 style={[styles.icon5, styles.iconLayout1]} />
        <Text style={[styles.username, styles.usernameTypo]}>1234|</Text>
        <Component326 style={[styles.icon6, styles.iconLayout1]} />
        <Text style={[styles.username1, styles.usernameTypo]}>+55</Text>
        <View style={[styles.groupChild12, styles.groupChildBorder]} />
        <Vector1214 style={[styles.vectorIcon12, styles.iconLayout1]} />
        <Image
          style={styles.d62a6059252dd42a1fed252c093b5bIcon}
          resizeMode="cover"
          source={require("../assets/d62a6059252dd42a1fed252c093b5bb5c8eab854-1.png")}
        />
        <View style={[styles.parent1, styles.icon7Layout]}>
          <Component327
            style={[styles.icon7, styles.icon7Layout]}
            width={321}
            height={48}
          />
          <Text
            style={[styles.confirmPassword, styles.passwordContainerLayout]}
          >
            SMS
          </Text>
          <Vector1312
            style={[styles.vectorIcon13, styles.vectorIcon13Position]}
          />
        </View>
        <View style={[styles.unionParent, styles.unionLayout]}>
          <Union215 style={styles.unionLayout} width={321} height={84} />
          <Vector149 style={[styles.vectorIcon14, styles.iconLayout1]} />
          <Text style={styles.theMobileNumber}>
            The mobile number will be used to check that your money is safe when
            you try to withdraw
          </Text>
        </View>
        <View style={[styles.parent2, styles.icon8Layout]}>
          <Component328
            style={[styles.icon8, styles.icon8Layout]}
            width={322}
            height={50}
          />
          <Text style={[styles.login, styles.loginTypo]}>
            Complete verification
          </Text>
        </View>
      </View>
      <Group8489
        style={[styles.child2, styles.child2Layout]}
        width={32}
        height={32}
      />
      <View style={styles.parent3}>
        <Component329 style={[styles.icon9, styles.iconPosition]} />
        <Group121104
          style={[styles.groupChild13, styles.vectorIcon13Position]}
        />
        <Text style={[styles.password, styles.passwordContainerLayout]}>
          verification code
        </Text>
        <Group121064
          style={[styles.groupChild14, styles.icon10Layout]}
          width={86}
          height={34}
        />
      </View>
      <View style={[styles.parent4, styles.icon10Layout]}>
        <Component330
          style={[styles.icon10, styles.icon10Layout]}
          width={77}
          height={34}
        />
        <Text style={[styles.confirmPassword1, styles.passwordContainerLayout]}>
          Get code
        </Text>
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
    fontFamily: FontFamily.microsoftYaHei,
    fontWeight: "900",
  },
  passwordContainerTypo: {
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
    position: "absolute",
  },
  groupInnerLayout: {
    height: 81,
    width: 345,
    position: "absolute",
  },
  groupInnerPosition: {
    backgroundColor: Color.bg3,
    borderRadius: Border.br_8,
    left: 0,
    top: 0,
  },
  recordTypo: {
    textAlign: "center",
    color: Color.wz1,
    lineHeight: 12,
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    top: 45,
    position: "absolute",
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
  iconPosition1: {
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
  groupLayout2: {
    height: 28,
    width: 79,
    position: "absolute",
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
    borderColor: Color.colorDarkslategray700,
    borderStyle: "dashed",
    left: 30,
    position: "absolute",
  },
  vipTypo: {
    left: 65,
    color: Color.wz1,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_14,
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
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_14,
    position: "absolute",
  },
  iconPosition: {
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
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
    lineHeight: 14,
    fontSize: FontSize.size_14,
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
  icon10Position: {
    borderRadius: Border.br_4,
    left: 0,
    top: 0,
  },
  groupChild11Layout: {
    height: 428,
    left: "50%",
    marginLeft: -172.5,
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
    position: "absolute",
  },
  usernameTypo: {
    top: "18.22%",
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
  vectorIcon13Position: {
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
  icon10Layout: {
    height: 34,
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
    width: 345,
    top: 45,
    left: 15,
    position: "absolute",
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
    lineHeight: 14,
    fontSize: FontSize.size_14,
    left: 76,
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
  },
  text1: {
    top: 146,
    fontSize: FontSize.size_24,
    color: Color.color9,
    fontFamily: FontFamily.microsoftYaHei,
    fontWeight: "900",
    left: 30,
  },
  balance: {
    top: 124,
    textAlign: "left",
    color: Color.color,
    lineHeight: 14,
    fontSize: FontSize.size_14,
    left: 30,
    position: "absolute",
  },
  groupInner: {
    height: 81,
    width: 345,
    position: "absolute",
  },
  depositRecord: {
    width: 63,
    left: 176,
  },
  withdrawalRecord: {
    left: 252,
    width: 77,
  },
  bettingRecord: {
    left: 21,
  },
  accountRecord: {
    left: 100,
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
    borderRadius: Border.br_6,
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
    borderRadius: Border.br_8,
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
    fontFamily: FontFamily.microsoftYaHei,
    fontWeight: "900",
    lineHeight: 14,
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
    width: 124,
    height: 36,
    top: 184,
    left: 176,
  },
  icon3: {
    borderRadius: Border.br_30,
    left: 0,
    top: 0,
  },
  withdrawal: {
    width: 87,
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.microsoftYaHei,
    fontWeight: "900",
    lineHeight: 14,
    fontSize: FontSize.size_14,
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
    borderRadius: Border.br_30,
    left: 0,
    top: 0,
    backgroundColor: "transparent",
  },
  vip4: {
    textAlign: "left",
    color: Color.color,
    lineHeight: 14,
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
    backgroundColor: Color.bg3,
    borderRadius: Border.br_8,
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
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_14,
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
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
  },
  winRealMoneyContainer: {
    top: 453,
    left: 119,
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
  },
  weeklyMax20: {
    top: 509,
    left: 155,
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
  },
  vectorIcon10: {
    height: "1.89%",
    top: "79.33%",
    right: "85.87%",
    bottom: "18.78%",
    left: "8.8%",
  },
  groupChild10: {
    height: 30,
    position: "absolute",
    width: 80,
    backgroundColor: "transparent",
  },
  instalall: {
    top: 9,
    left: 7,
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.color,
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
  groupParent: {
    height: 900,
  },
  child1: {
    backgroundColor: Color.colorBlack,
    opacity: 0.8,
    height: 812,
  },
  groupChild11: {
    borderRadius: Border.br_12,
    borderColor: Color.colorDarkslategray600,
    borderWidth: 1,
    opacity: 0.98,
    height: 428,
    left: "50%",
    marginLeft: -172.5,
    width: 345,
    top: 0,
    borderStyle: "solid",
    backgroundColor: Color.bg,
  },
  receiveRewardsAfter: {
    top: 16,
    left: 16,
    width: 313,
    color: Color.color,
    fontSize: FontSize.size_14,
  },
  icon5: {
    height: "11.21%",
    width: "93.04%",
    top: "14.02%",
    right: "3.48%",
    bottom: "74.77%",
    left: "3.48%",
    borderRadius: Border.br_8,
  },
  username: {
    width: "36.52%",
    left: "35.65%",
    textTransform: "capitalize",
    fontSize: FontSize.size_14,
  },
  icon6: {
    height: "3.74%",
    width: "5.42%",
    top: "17.76%",
    right: "7.04%",
    bottom: "78.5%",
    left: "87.54%",
  },
  username1: {
    width: "6.35%",
    left: "23.59%",
    color: Color.wz1,
    fontSize: FontSize.size_12,
  },
  groupChild12: {
    height: "5.84%",
    width: "0.29%",
    top: "16.71%",
    right: "67.1%",
    bottom: "77.45%",
    left: "32.61%",
    borderColor: Color.colorDarkslategray100,
    borderRightWidth: 1,
  },
  vectorIcon12: {
    height: "4.18%",
    width: "3.94%",
    top: "17.52%",
    right: "89.1%",
    bottom: "78.29%",
    left: "6.96%",
  },
  d62a6059252dd42a1fed252c093b5bIcon: {
    marginTop: -139,
    top: "50%",
    left: 49,
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
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_14,
  },
  vectorIcon13: {
    height: "35.63%",
    width: "4.74%",
    top: "31.25%",
    right: "91.53%",
    bottom: "33.12%",
  },
  parent1: {
    top: 120,
    left: 12,
  },
  vectorIcon14: {
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
    marginLeft: -160.5,
    top: 240,
    left: "50%",
    position: "absolute",
  },
  icon8: {
    borderRadius: Border.br_36,
    left: 0,
    top: 0,
  },
  login: {
    marginLeft: -81,
    top: 17,
    left: "50%",
    color: Color.wz1,
    fontSize: FontSize.size_16,
  },
  parent2: {
    top: 358,
    left: 12,
  },
  rectangleParent1: {
    top: 172,
    position: "absolute",
  },
  child2: {
    top: 616,
    left: 172,
  },
  icon9: {
    right: "0%",
    borderRadius: Border.br_8,
    width: "100%",
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
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_14,
  },
  groupChild14: {
    left: 223,
    top: 7,
  },
  parent3: {
    height: "5.91%",
    width: "85.6%",
    top: "43.35%",
    right: "7.2%",
    bottom: "50.74%",
    left: "7.2%",
    position: "absolute",
  },
  icon10: {
    borderRadius: Border.br_4,
    left: 0,
    top: 0,
  },
  confirmPassword1: {
    top: 11,
    left: 13,
    color: Color.colorDimgray200,
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
  },
  parent4: {
    top: 299,
    left: 259,
    width: 77,
  },
  safeareaview: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.bg,
  },
});

export default Component6;