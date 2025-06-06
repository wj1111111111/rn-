import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Slot7 from "../assets/slot7";
import Maskgroup71 from "../assets/maskgroup7";
import Group736135 from "../assets/group7361";
import Component358 from "../assets/";
import Stroke24 from "../assets/stroke";
import Group1264730 from "../assets/group12647";
import Group1264731 from "../assets/group12647";
import Group1264815 from "../assets/group12648";
import Group1264915 from "../assets/group12649";
import Group1265015 from "../assets/group12650";
import Group1265115 from "../assets/group12651";
import Rectangle7181 from "../assets/rectangle718";
import Group1266115 from "../assets/group126611";
import Maskgroup315 from "../assets/maskgroup3";
import Vector1549 from "../assets/vector15";
import Vector1550 from "../assets/vector15";
import Vector1551 from "../assets/vector15";
import Frame115 from "../assets/frame1";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Component19 = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <Slot7
        style={[styles.slotIcon, styles.slotIconLayout]}
        width={0}
        height={0}
      />
      <View style={styles.child} />
      <LinearGradient
        style={[styles.item, styles.itemPosition]}
        locations={[0, 1]}
        colors={["#373c42", "#2c3135"]}
        useAngle={true}
        angle={180}
      />
      <Maskgroup71
        style={[styles.maskGroupIcon, styles.itemPosition]}
        width={325}
        height={204}
      />
      <View style={[styles.instanceParent, styles.collectChildPosition]}>
        <View style={[styles.instanceParent, styles.collectChildPosition]}>
          <View style={[styles.rectangleParent, styles.iconGroupPosition]}>
            <View style={[styles.groupChild, styles.groupChildShadowBox]} />
            <View style={styles.r198000Parent}>
              <Text style={[styles.r198000, styles.signContainerTypo]}>
                ₱19800.00
              </Text>
              <Group736135 style={[styles.groupItem, styles.iconGroupLayout]} />
              <Component358 style={[styles.icon, styles.iconGroupLayout]} />
            </View>
          </View>
          <Stroke24 style={[styles.strokeIcon, styles.iconGroupLayout]} />
          <Text style={[styles.pgSlots, styles.pgSlotsClr]}>
            Continuous sign-ins
          </Text>
        </View>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/-1111.png")}
        />
      </View>
      <Text style={[styles.signInTodayDay, styles.signContainerTypo]}>
        Sign-in Today: Day 4
      </Text>
      <Text style={[styles.bonus020, styles.signContainerTypo]}>
        Bonus: ₱ 0.20
      </Text>
      <View style={styles.inner} />
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <LinearGradient
          style={[styles.groupInner, styles.groupPosition]}
          locations={[0, 1]}
          colors={["#37393c", "#25282d"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.logInToContainer, styles.signContainerTypo]}>
          {`1. Log in to the game every day to sign in.
2. Continuous sign-ins will gradually unlock rewards.
3. Please pay attention! After the continuous sign-in is interrupted, it will return to Day 1 and start again.
4. Each round of sign-in has`}
           1
          {` chance to re-sign.
5.Your remaining number of re-signments: `}
          0
        </Text>
        <Group1264730 style={[styles.groupIcon, styles.groupLayout1]} />
        <Group1264731 style={[styles.groupChild1, styles.groupLayout1]} />
        <Group1264815 style={[styles.groupChild2, styles.groupChildLayout1]} />
        <Text style={[styles.signInRules, styles.signInRulesTypo]}>
          Sign-in rules
        </Text>
        <Group1264915 style={[styles.groupChild3, styles.groupChildLayout1]} />
        <Group1265015 style={[styles.groupChild4, styles.groupChildLayout]} />
        <Group1265115 style={[styles.groupChild5, styles.groupChildLayout]} />
      </View>
      <View style={[styles.groupContainer, styles.rectangleContainerPosition]}>
        <View
          style={[styles.rectangleContainer, styles.rectangleContainerPosition]}
        >
          <View
            style={[styles.rectangleView, styles.rectangleContainerPosition]}
          />
          <Rectangle7181 style={styles.rectangleIcon} width={48} height={48} />
          <Text
            style={[styles.timesOfDeposits2, styles.signInRulesTypo]}
          >{`Times of deposits：2
Deposit amount： ₱200 `}</Text>
          <Image
            style={[
              styles.add2e694b50907790800188bb93242Icon,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/add2e694b50907790800188bb93242cee3957bd96358f3sm3f-12.png")}
          />
        </View>
        <Text style={[styles.signIn, styles.signContainerTypo]}>Sign-in</Text>
      </View>
      <Text style={[styles.day4, styles.dayTypo]}>Day 4</Text>
      <View style={[styles.child1, styles.childLayout]} />
      <Image
        style={[styles.dfa96056b444f5e96cae769e22f489Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/5dfa96056b444f5e96cae769e22f48911a71a1646f451kzw1wb-1.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>0.20</Text>
      <View style={[styles.child2, styles.childBorder]} />
      <Text style={[styles.text1, styles.textTypo1]}>0.20</Text>
      <View style={[styles.child3, styles.childBorder]} />
      <Text style={[styles.text2, styles.textTypo1]}>0.20</Text>
      <View style={[styles.child4, styles.childLayout]} />
      <Text style={[styles.text3, styles.textTypo1]}>₱ 0.20</Text>
      <Text style={[styles.day1, styles.dayTypo]}>Day 1</Text>
      <Text style={[styles.day2, styles.dayTypo]}>Day 2</Text>
      <Text style={[styles.day3, styles.dayTypo]}>Day 3</Text>
      <Text style={[styles.day5, styles.dayTypo]}>Day 5</Text>
      <View style={[styles.child5, styles.childBorder]} />
      <Text style={[styles.text4, styles.textTypo1]}>0.20</Text>
      <Text style={[styles.text5, styles.textTypo1]}>0.20</Text>
      <Group1266115 style={styles.child6} width={41} height={20} />
      <View style={[styles.unionParent, styles.unionLayout]}>
        <Image
          style={[styles.unionIcon, styles.unionLayout]}
          resizeMode="cover"
          source={require("../assets/union3.png")}
        />
        <Text style={[styles.text6, styles.dayTypo]}>+₱0.20</Text>
      </View>
      <View style={[styles.collect, styles.collectLayout]}>
        <LinearGradient
          style={[styles.collectChild, styles.collectLayout]}
          locations={[0, 1]}
          colors={["#76cd00", "#478a03"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.reSigning, styles.dayTypo]}>Re-signing</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
          <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
            <View style={[styles.groupChild6, styles.groupChildPosition1]} />
            <View style={[styles.groupChild7, styles.groupChildPosition1]} />
            <Image
              style={[
                styles.a65bbb3b63d7cefc212e71be374455Icon,
                styles.activityTime29dayContainerPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/a65bbb3b63d7cefc212e71be3744557bd9ca5c13c468lzqmo2-11.png")}
            />
          </View>
        </View>
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/1-733643598.png")}
        />
      </View>
      <View style={styles.groupParent1}>
        <View style={[styles.rectangleParent, styles.iconGroupPosition]}>
          <View style={[styles.groupChild8, styles.iconGroupPosition]} />
          <Text style={[styles.numberOfSignIns, styles.numberTypo]}>
            Number of sign-ins
          </Text>
          <View
            style={[styles.receivedTotalBonusWrapper, styles.receivedPosition]}
          >
            <Text style={[styles.receivedTotalBonus, styles.dayTypo]}>
              Received total bonus
            </Text>
          </View>
          <View style={[styles.lineView, styles.slotIconLayout]} />
          <View style={[styles.groupChild9, styles.groupChildPosition]} />
          <View style={styles.parent}>
            <Text style={[styles.text7, styles.textTypo]}>24</Text>
            <Image
              style={[
                styles.add2e694b50907790800188bb93242Icon1,
                styles.collectChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/add2e694b50907790800188bb93242cee3957bd96358f3sm3f-1.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent, styles.iconGroupPosition]}>
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.iconGroupPosition]}
            locations={[0, 0.5, 1]}
            colors={["#ef5b12", "#ff8c00", "#ffa800"]}
            useAngle={true}
            angle={90}
          />
          <Maskgroup315
            style={[styles.maskGroupIcon1, styles.iconGroupLayout]}
          />
          <Text style={[styles.numberOfSignIns1, styles.numberTypo]}>
            Number of sign-ins
          </Text>
          <Text style={[styles.receivedTotalBonus1, styles.receivedPosition]}>
            Received total bonus
          </Text>
          <View style={[styles.lineView, styles.slotIconLayout]} />
          <View style={[styles.groupChild11, styles.groupChildPosition]} />
          <View style={styles.wrapper}>
            <Text style={[styles.text8, styles.textTypo]}>₱ 0.20</Text>
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text7, styles.textTypo]}>24</Text>
            <Image
              style={[
                styles.add2e694b50907790800188bb93242Icon1,
                styles.collectChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/add2e694b50907790800188bb93242cee3957bd96358f3sm3f-1.png")}
            />
          </View>
        </View>
        <View style={[styles.lineView, styles.slotIconLayout]} />
        <View style={styles.wrapper}>
          <Text style={[styles.text8, styles.textTypo]}>₱ 0.20</Text>
        </View>
        <Image
          style={styles.icon3}
          resizeMode="cover"
          source={require("../assets/1-733643593.png")}
        />
      </View>
      <Image
        style={[styles.icon4, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <Image
        style={[styles.icon5, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <Image
        style={[styles.icon6, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <Image
        style={[styles.icon7, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <Vector1549 style={[styles.vectorIcon, styles.vectorIconLayout]} />
      <Vector1550 style={[styles.vectorIcon1, styles.vectorIconLayout]} />
      <Vector1551 style={[styles.vectorIcon2, styles.vectorIconLayout]} />
      <View style={styles.bonus020Parent}>
        <Text style={[styles.bonus020Container, styles.signContainerTypo]}>
          {`Bonus: `}₱ 0.20
        </Text>
        <Image
          style={[styles.icon8, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/1-733643593.png")}
        />
      </View>
      <Image
        style={[
          styles.dfa96056b444f5e96cae769e22f489Icon1,
          styles.iconGroupLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/5dfa96056b444f5e96cae769e22f48911a71a1646f451kzw1wb-11.png")}
      />
      <View style={styles.extra020Parent}>
        <Text style={[styles.extra020, styles.dayTypo]}>Extra: ₱0.20</Text>
        <Image
          style={[styles.icon9, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/3-1.png")}
        />
      </View>
      <View
        style={[styles.activityTime29day235959Parent, styles.frameIconLayout]}
      >
        <Text
          style={[
            styles.activityTime29dayContainer,
            styles.activityTime29dayContainerPosition,
          ]}
        >
          <Text style={styles.activityTime29dayContainer1}>
            {`Activity Time: `}29Day 23:59:59
          </Text>
        </Text>
        <Frame115
          style={[styles.frameIcon, styles.frameIconLayout]}
          width={22}
          height={22}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slotIconLayout: {
    width: 0,
    position: "absolute",
  },
  itemPosition: {
    width: 325,
    top: 351,
    marginLeft: -162.5,
    left: "50%",
    position: "absolute",
  },
  collectChildPosition: {
    left: 0,
    top: 0,
  },
  iconGroupPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  signContainerTypo: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  pgSlotsClr: {
    color: Color.color,
    textTransform: "capitalize",
    position: "absolute",
  },
  groupPosition: {
    height: 223,
    width: 345,
    left: "50%",
    marginLeft: -172.5,
    position: "absolute",
  },
  groupLayout1: {
    right: "92.41%",
    width: "4.12%",
    height: "5.38%",
    left: "3.48%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  groupChildLayout1: {
    height: "6.19%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  signInRulesTypo: {
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  groupChildLayout: {
    height: "5.29%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  rectangleContainerPosition: {
    height: 64,
    width: 305,
    marginLeft: -152.5,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 39,
    position: "absolute",
  },
  dayTypo: {
    textAlign: "center",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  childLayout: {
    height: 62,
    width: 60,
    borderRadius: Border.br_4,
    top: 259,
    left: "50%",
    position: "absolute",
  },
  textTypo1: {
    top: "31.18%",
    textAlign: "center",
    fontSize: FontSize.size_12,
    lineHeight: 14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  childBorder: {
    borderColor: Color.colorGold500,
    height: 62,
    width: 60,
    borderRadius: Border.br_4,
    top: 259,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.bg3,
    left: "50%",
    position: "absolute",
  },
  unionLayout: {
    height: 17,
    width: 47,
  },
  collectLayout: {
    height: 30,
    width: 85,
    position: "absolute",
  },
  groupLayout: {
    height: 70,
    position: "absolute",
  },
  groupWrapperPosition: {
    marginLeft: -35,
    width: 70,
    left: "50%",
  },
  groupChildPosition1: {
    borderRadius: Border.br_12,
    marginLeft: -35,
    height: 70,
    width: 70,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  activityTime29dayContainerPosition: {
    top: 1,
    position: "absolute",
  },
  numberTypo: {
    left: "5.8%",
    top: "57.58%",
    textAlign: "center",
    fontSize: FontSize.size_14,
    lineHeight: 14,
    textTransform: "capitalize",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  receivedPosition: {
    left: "53.91%",
    top: "57.58%",
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "12.12%",
    marginLeft: -0.5,
    height: "75.76%",
    top: "12.12%",
    width: 1,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_18,
    color: Color.color1,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 18,
    position: "absolute",
  },
  iconPosition: {
    top: 286,
    height: 24,
    width: 24,
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "63.53%",
    top: "34%",
    width: "7.73%",
    height: "2.47%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  frameIconLayout: {
    height: 22,
    position: "absolute",
  },
  slotIcon: {
    top: "65.88%",
    left: "48.93%",
  },
  child: {
    top: 178,
    borderColor: Color.colorYellow200,
    borderWidth: 2,
    height: 447,
    width: 345,
    marginLeft: -172.5,
    borderStyle: "solid",
    backgroundColor: Color.bg3,
    borderRadius: Border.br_6,
    left: "50%",
    position: "absolute",
  },
  item: {
    height: 224,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray700,
    borderRadius: Border.br_8,
  },
  maskGroupIcon: {},
  groupChild: {
    shadowColor: Color.colorGray2100,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Color.bg1,
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  r198000: {
    left: "17.25%",
    color: Color.wz,
    lineHeight: 18,
    position: "absolute",
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    top: "0%",
  },
  groupItem: {
    height: "88.89%",
    width: "12.24%",
    right: "87.76%",
    bottom: "5.56%",
    top: "5.56%",
    left: "0%",
  },
  icon: {
    height: "81.11%",
    width: "12.94%",
    top: "11.11%",
    bottom: "7.78%",
    left: "87.06%",
    right: "0%",
  },
  r198000Parent: {
    height: "20.93%",
    width: "34%",
    top: "54.65%",
    right: "5.47%",
    bottom: "24.42%",
    left: "60.53%",
    position: "absolute",
  },
  rectangleParent: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  strokeIcon: {
    height: "18.6%",
    width: "2.45%",
    right: "93.47%",
    bottom: "25.58%",
    left: "4.08%",
    top: "55.81%",
  },
  pgSlots: {
    left: "8.8%",
    lineHeight: 16,
    top: "55.81%",
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
  },
  instanceParent: {
    width: 375,
    height: 86,
    position: "absolute",
  },
  icon1: {
    top: 7,
    left: 10,
    width: 356,
    height: 13,
    position: "absolute",
  },
  signInTodayDay: {
    top: "22.59%",
    left: "7.2%",
    color: Color.color1,
    lineHeight: 14,
    textTransform: "capitalize",
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  bonus020: {
    marginLeft: -46.5,
    top: "53.53%",
    color: Color.fFF500,
    fontSize: FontSize.size_14,
    textTransform: "capitalize",
    lineHeight: 16,
    left: "50%",
    position: "absolute",
  },
  inner: {
    height: "38.24%",
    marginLeft: -163.5,
    top: "29.06%",
    bottom: "32.71%",
    borderRadius: Border.br_3,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    width: 1,
    backgroundColor: Color.colorDarkslategray500,
    left: "50%",
    position: "absolute",
  },
  groupInner: {
    top: 0,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray700,
    borderRadius: Border.br_8,
  },
  logInToContainer: {
    top: 45,
    left: 29,
    width: 304,
    height: 157,
    fontSize: FontSize.size_14,
    lineHeight: 16,
    position: "absolute",
  },
  groupIcon: {
    top: "69.19%",
    bottom: "25.43%",
    left: "3.48%",
  },
  groupChild1: {
    top: "85.65%",
    bottom: "8.97%",
    left: "3.48%",
  },
  groupChild2: {
    width: "3.8%",
    top: "8.83%",
    right: "92.72%",
    bottom: "84.98%",
    left: "3.48%",
  },
  signInRules: {
    top: 20,
    left: 32,
    width: 90,
    height: 14,
    lineHeight: 14,
    color: Color.color,
    textTransform: "capitalize",
    position: "absolute",
  },
  groupChild3: {
    width: "3.33%",
    top: "29.1%",
    right: "92.9%",
    bottom: "64.71%",
    left: "3.77%",
  },
  groupChild4: {
    width: "3.54%",
    top: "21.17%",
    right: "92.7%",
    bottom: "73.54%",
    left: "3.77%",
  },
  groupChild5: {
    width: "4.52%",
    top: "45.83%",
    right: "92.29%",
    bottom: "48.88%",
    left: "3.19%",
  },
  rectangleGroup: {
    top: 637,
  },
  rectangleView: {
    top: 0,
    backgroundColor: Color.bg3,
    borderRadius: Border.br_6,
  },
  rectangleIcon: {
    top: 8,
    borderRadius: Border.br_60,
    marginLeft: -144.5,
    left: "50%",
    position: "absolute",
  },
  timesOfDeposits2: {
    marginLeft: -95.5,
    top: 14,
    width: 238,
    color: Color.color1,
    lineHeight: 18,
    position: "absolute",
    left: "50%",
  },
  add2e694b50907790800188bb93242Icon: {
    top: 10,
    left: 12,
    height: 36,
  },
  rectangleContainer: {
    top: 0,
  },
  signIn: {
    marginLeft: -143.5,
    top: 40,
    fontSize: 13,
    fontStyle: "italic",
    lineHeight: 14,
    left: "50%",
    position: "absolute",
  },
  groupContainer: {
    top: 491,
  },
  day4: {
    left: "63.47%",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    position: "absolute",
    top: "38%",
    lineHeight: 16,
  },
  child1: {
    marginLeft: 36.5,
    backgroundColor: Color.colorForestgreen,
  },
  dfa96056b444f5e96cae769e22f489Icon: {
    top: 281,
    left: 169,
    height: 40,
  },
  text: {
    marginLeft: -13.5,
    color: Color.color1,
  },
  child2: {
    marginLeft: -96.5,
  },
  text1: {
    marginLeft: -78.5,
    color: Color.color2,
  },
  child3: {
    marginLeft: -30.5,
  },
  text2: {
    marginLeft: 54.5,
    color: Color.color1,
  },
  child4: {
    marginLeft: 102.5,
    borderColor: Color.wz,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.bg,
    height: 62,
    width: 60,
    borderRadius: Border.br_4,
    top: 259,
  },
  text3: {
    marginLeft: 115.5,
    color: Color.color2,
  },
  day1: {
    left: "10.4%",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    position: "absolute",
    top: "38%",
    lineHeight: 16,
  },
  day2: {
    left: "28%",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    position: "absolute",
    top: "38%",
    lineHeight: 16,
  },
  day3: {
    left: "45.6%",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    position: "absolute",
    top: "38%",
    lineHeight: 16,
  },
  day5: {
    left: "81.07%",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    position: "absolute",
    top: "38%",
    lineHeight: 16,
  },
  child5: {
    marginLeft: -162.5,
    borderColor: Color.colorGold500,
  },
  text4: {
    color: Color.color2,
    marginLeft: -144.5,
  },
  text5: {
    marginLeft: -12.5,
    color: Color.color2,
  },
  child6: {
    marginLeft: 111.5,
    top: 337,
    left: "50%",
    position: "absolute",
  },
  unionIcon: {
    borderRadius: Border.br_8,
  },
  text6: {
    left: "8.51%",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    position: "absolute",
    lineHeight: 14,
    textTransform: "capitalize",
    top: "0%",
  },
  unionParent: {
    marginLeft: 43.5,
    top: 247,
    left: "50%",
    position: "absolute",
  },
  collectChild: {
    borderColor: Color.color3,
    left: 0,
    top: 0,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_6,
  },
  reSigning: {
    top: 6,
    left: 6,
    fontSize: FontSize.size_14,
    lineHeight: 16,
    position: "absolute",
  },
  collect: {
    top: 197,
    left: 263,
  },
  groupChild6: {
    backgroundColor: Color.colorOrange300,
  },
  groupChild7: {
    shadowColor: Color.colorKhaki200,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: Color.colorGainsboro300,
    borderColor: Color.color,
    borderWidth: 1.4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderStyle: "solid",
    borderRadius: Border.br_12,
  },
  a65bbb3b63d7cefc212e71be374455Icon: {
    height: 69,
    marginLeft: -35,
    width: 70,
    left: "50%",
  },
  groupWrapper: {
    height: 70,
    position: "absolute",
    top: 0,
  },
  icon2: {
    marginLeft: -19,
    top: 16,
    width: 38,
    height: 38,
    left: "50%",
    position: "absolute",
  },
  groupView: {
    marginLeft: -34.5,
    top: 377,
    width: 70,
    height: 70,
    left: "50%",
  },
  groupChild8: {
    left: "0%",
    right: "0%",
    borderRadius: Border.br_8,
    backgroundColor: Color.bg3,
    position: "absolute",
    width: "100%",
  },
  numberOfSignIns: {
    color: Color.color2,
  },
  receivedTotalBonus: {
    color: Color.color2,
    fontSize: FontSize.size_14,
    lineHeight: 14,
    textTransform: "capitalize",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  receivedTotalBonusWrapper: {
    height: "21.21%",
    width: "42.32%",
    right: "3.77%",
    bottom: "21.21%",
  },
  lineView: {
    height: "50%",
    top: "27.27%",
    bottom: "22.73%",
    left: "49.86%",
  },
  groupChild9: {
    backgroundColor: Color.colorDarkslategray500,
    bottom: "12.12%",
    marginLeft: -0.5,
    height: "75.76%",
  },
  text7: {
    top: "15.38%",
    left: "61.11%",
  },
  add2e694b50907790800188bb93242Icon1: {
    width: 28,
    height: 26,
    position: "absolute",
  },
  parent: {
    height: "39.39%",
    width: "15.65%",
    right: "67.25%",
    bottom: "48.48%",
    left: "17.1%",
    top: "12.12%",
    position: "absolute",
  },
  rectangleLineargradient: {
    left: "0%",
    right: "0%",
    backgroundColor: "transparent",
    borderRadius: Border.br_8,
    position: "absolute",
    width: "100%",
  },
  maskGroupIcon1: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
    width: "100%",
  },
  numberOfSignIns1: {
    color: Color.color1,
  },
  receivedTotalBonus1: {
    textAlign: "center",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_14,
    color: Color.color1,
    lineHeight: 14,
    textTransform: "capitalize",
  },
  groupChild11: {
    backgroundColor: Color.colorKhaki100,
  },
  text8: {
    left: "0%",
    top: "0%",
  },
  wrapper: {
    height: "27.27%",
    width: "15.36%",
    top: "21.21%",
    right: "13.04%",
    bottom: "51.52%",
    left: "71.59%",
    position: "absolute",
  },
  icon3: {
    top: 11,
    left: 219,
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupParent1: {
    height: "7.76%",
    width: "92%",
    top: "11.53%",
    right: "4%",
    bottom: "80.71%",
    left: "4%",
    position: "absolute",
  },
  icon4: {
    left: 43,
  },
  icon5: {
    left: 109,
  },
  icon6: {
    left: 175,
  },
  icon7: {
    left: 308,
  },
  vectorIcon: {
    right: "64%",
    left: "28.27%",
  },
  vectorIcon1: {
    right: "46.13%",
    left: "46.13%",
  },
  vectorIcon2: {
    right: "81.33%",
    left: "10.93%",
  },
  bonus020Container: {
    left: "20.95%",
    fontSize: FontSize.size_14,
    textTransform: "capitalize",
    lineHeight: 16,
    top: "5.56%",
    position: "absolute",
  },
  icon8: {
    width: "17.14%",
    right: "82.86%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  bonus020Parent: {
    top: 217,
    width: 105,
    height: 18,
    left: 27,
    position: "absolute",
  },
  dfa96056b444f5e96cae769e22f489Icon1: {
    height: "4.71%",
    width: "10.67%",
    top: "32.82%",
    right: "26.93%",
    bottom: "62.47%",
    left: "62.4%",
  },
  extra020: {
    top: "15%",
    left: "19.8%",
    fontSize: FontSize.size_14,
    color: Color.color1,
    lineHeight: 14,
    textTransform: "capitalize",
    position: "absolute",
  },
  icon9: {
    width: "19.8%",
    right: "80.2%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  extra020Parent: {
    height: "2.35%",
    width: "26.93%",
    top: "25.29%",
    right: "33.6%",
    bottom: "72.35%",
    left: "39.47%",
    position: "absolute",
  },
  activityTime29dayContainer1: {
    width: "100%",
  },
  activityTime29dayContainer: {
    left: 30,
    lineHeight: 29,
    width: 200,
    height: 20,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  frameIcon: {
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  activityTime29day235959Parent: {
    top: 587,
    width: 230,
    left: 27,
  },
  scrollview: {
    flex: 1,
    maxWidth: "100%",
    width: "100%",
    backgroundColor: Color.bg,
  },
});

export default Component19;