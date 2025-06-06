import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Slot3 from "../assets/slot3";
import Maskgroup27 from "../assets/maskgroup2";
import Group736131 from "../assets/group7361";
import Component354 from "../assets/";
import Stroke19 from "../assets/stroke";
import Group1266110 from "../assets/group12661";
import Group1264722 from "../assets/group12647";
import Group1264723 from "../assets/group12647";
import Group1264811 from "../assets/group12648";
import Group1264911 from "../assets/group12649";
import Group1265011 from "../assets/group12650";
import Group1265111 from "../assets/group12651";
import Group126633 from "../assets/group12663";
import Maskgroup311 from "../assets/maskgroup3";
import Vector1536 from "../assets/vector15";
import Vector1537 from "../assets/vector15";
import Vector1538 from "../assets/vector15";
import Vector1539 from "../assets/vector15";
import Frame111 from "../assets/frame1";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Component15 = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <Slot3
        style={[styles.slotIcon, styles.slotIconLayout]}
        width={0}
        height={0}
      />
      <View style={styles.child} />
      <LinearGradient
        style={[styles.item, styles.itemPosition]}
        locations={[0, 0.5, 1]}
        colors={["#d8d908", "#30a025", "#009f41"]}
        useAngle={true}
        angle={40.99}
      />
      <Maskgroup27
        style={[styles.maskGroupIcon, styles.itemPosition]}
        width={325}
        height={204}
      />
      <Text style={[styles.day4, styles.dayTypo]}>Day 4</Text>
      <View style={styles.instanceParent}>
        <View style={styles.instanceParent}>
          <View style={[styles.rectangleParent, styles.iconGroupPosition]}>
            <View style={[styles.groupChild, styles.groupChildShadowBox]} />
            <View style={styles.r198000Parent}>
              <Text style={[styles.r198000, styles.r198000Layout]}>
                ₱19800.00
              </Text>
              <Group736131 style={[styles.groupItem, styles.iconGroupLayout]} />
              <Component354 style={[styles.icon, styles.iconGroupLayout]} />
            </View>
          </View>
          <Stroke19 style={[styles.strokeIcon, styles.iconGroupLayout]} />
          <Text style={[styles.pgSlots, styles.pgSlotsText]}>
            Continuous sign-ins
          </Text>
        </View>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/-1111.png")}
        />
      </View>
      <Text style={[styles.signInTodayDay, styles.r198000Typo]}>
        Sign-in Today: Day 5
      </Text>
      <Text style={[styles.day1, styles.dayTypo]}>Day 1</Text>
      <Text style={[styles.day2, styles.dayTypo]}>Day 2</Text>
      <Text style={[styles.day3, styles.dayTypo]}>Day 3</Text>
      <Text style={[styles.day5, styles.dayTypo]}>Day 5</Text>
      <Text style={[styles.bonus020, styles.bonusContainerTypo]}>
        Bonus: ₱ 0.20
      </Text>
      <View style={styles.inner} />
      <Group1266110 style={styles.groupIcon} width={41} height={20} />
      <View style={[styles.rectangleGroup, styles.groupPosition1]}>
        <LinearGradient
          style={[styles.groupInner, styles.groupPosition1]}
          locations={[0, 1]}
          colors={["#37393c", "#25282d"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.logInToContainer, styles.bonusContainerTypo]}>
          {`1. Log in to the game every day to sign in.
2. Continuous sign-ins will gradually unlock rewards.
3. Please pay attention! After the continuous sign-in is interrupted, it will return to Day 1 and start again.
4. Each round of sign-in has`}
           1
          {` chance to re-sign.
5.Your remaining number of re-signments: `}
          0
        </Text>
        <Group1264722 style={[styles.groupChild1, styles.groupChildLayout2]} />
        <Group1264723 style={[styles.groupChild2, styles.groupChildLayout2]} />
        <Group1264811 style={[styles.groupChild3, styles.groupChildLayout1]} />
        <Text style={[styles.signInRules, styles.finishedFlexBox]}>
          Sign-in rules
        </Text>
        <Group1264911 style={[styles.groupChild4, styles.groupChildLayout1]} />
        <Group1265011 style={[styles.groupChild5, styles.groupChildLayout]} />
        <Group1265111 style={[styles.groupChild6, styles.groupChildLayout]} />
      </View>
      <View style={[styles.collect, styles.collectLayout1]}>
        <LinearGradient
          style={[styles.collectChild, styles.collectLayout1]}
          locations={[0, 1]}
          colors={["#76cd00", "#478a03"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.unlock, styles.bonusContainerTypo]}>Unlock</Text>
        <Image
          style={[
            styles.e20d8191b75bf24128ad9a71c8758aIcon,
            styles.groupChild7Position,
          ]}
          resizeMode="cover"
          source={require("../assets/e20d8191b75bf24128ad9a71c8758aec6b55b61f2cf0itmebv-2.png")}
        />
      </View>
      <View style={[styles.collectParent, styles.collectLayout]}>
        <View style={[styles.collect1, styles.collectLayout]}>
          <LinearGradient
            style={[styles.collectItem, styles.collectLayout]}
            locations={[0, 1]}
            colors={["#373c42", "#2c3135"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.received, styles.bonusContainerTypo]}>
            Received
          </Text>
        </View>
        <Group126633
          style={[styles.groupChild7, styles.groupChild7Position]}
          width={16}
          height={16}
        />
      </View>
      <View style={[styles.rectangleView, styles.childLayout]} />
      <Image
        style={[styles.dfa96056b444f5e96cae769e22f489Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/5dfa96056b444f5e96cae769e22f48911a71a1646f451kzw1wb-1.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>0.20</Text>
      <View style={[styles.child1, styles.childLayout]} />
      <Text style={[styles.text1, styles.textTypo1]}>0.20</Text>
      <View style={[styles.child2, styles.childLayout]} />
      <Text style={[styles.text2, styles.textTypo1]}>0.20</Text>
      <View style={[styles.child3, styles.childLayout]} />
      <Text style={[styles.text3, styles.textTypo1]}>₱ 0.20</Text>
      <View style={[styles.child4, styles.childLayout]} />
      <Text style={[styles.text4, styles.text4Position]}>0.20</Text>
      <Text style={[styles.text5, styles.textTypo1]}>0.20</Text>
      <View style={[styles.unionParent, styles.unionLayout]}>
        <Image
          style={[styles.unionIcon, styles.unionLayout]}
          resizeMode="cover"
          source={require("../assets/union3.png")}
        />
        <Text style={[styles.text6, styles.dayTypo]}>+₱0.20</Text>
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <View style={[styles.groupChild8, styles.groupPosition]} />
            <View style={[styles.groupChild9, styles.text4Position]} />
            <Text
              style={[styles.timesOfDeposits2, styles.finishedFlexBox]}
            >{`Times of deposits：2
Deposit amount： ₱200 `}</Text>
            <Image
              style={[
                styles.add2e694b50907790800188bb93242Icon,
                styles.iconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/add2e694b50907790800188bb93242cee3957bd96358f3sm3f-14.png")}
            />
          </View>
          <Text style={[styles.signIn, styles.signInTypo]}>Sign-in</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent1, styles.zsofe1IconLayout]}>
        <View style={[styles.groupChild10, styles.finishedTransform]} />
        <Image
          style={[styles.zsofe1Icon, styles.zsofe1IconLayout]}
          resizeMode="cover"
          source={require("../assets/zsofe-1.png")}
        />
        <Text style={[styles.finished, styles.finishedTransform]}>
          Finished
        </Text>
      </View>
      <View style={[styles.groupParent1, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
          <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
            <View style={[styles.groupChild11, styles.groupChildPosition1]} />
            <View style={[styles.groupChild12, styles.groupChildPosition1]} />
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
      <View style={styles.groupParent2}>
        <View style={[styles.rectangleParent, styles.iconGroupPosition]}>
          <View style={[styles.groupChild13, styles.iconGroupPosition]} />
          <Text style={[styles.numberOfSignIns, styles.numberTypo]}>
            Number of sign-ins
          </Text>
          <View
            style={[styles.receivedTotalBonusWrapper, styles.receivedPosition]}
          >
            <Text
              style={[styles.receivedTotalBonus, styles.bonusContainerTypo]}
            >
              Received total bonus
            </Text>
          </View>
          <View style={[styles.lineView, styles.slotIconLayout]} />
          <View style={[styles.groupChild14, styles.groupChildPosition]} />
          <View style={styles.parent}>
            <Text style={[styles.text7, styles.textTypo]}>24</Text>
            <Image
              style={styles.add2e694b50907790800188bb93242Icon1}
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
          <Maskgroup311
            style={[styles.maskGroupIcon1, styles.iconGroupLayout]}
          />
          <Text style={[styles.numberOfSignIns1, styles.numberTypo]}>
            Number of sign-ins
          </Text>
          <Text style={[styles.receivedTotalBonus1, styles.receivedPosition]}>
            Received total bonus
          </Text>
          <View style={[styles.lineView, styles.slotIconLayout]} />
          <View style={[styles.groupChild16, styles.groupChildPosition]} />
          <View style={styles.wrapper}>
            <Text style={[styles.text8, styles.textTypo]}>₱ 0.20</Text>
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text7, styles.textTypo]}>24</Text>
            <Image
              style={styles.add2e694b50907790800188bb93242Icon1}
              resizeMode="cover"
              source={require("../assets/add2e694b50907790800188bb93242cee3957bd96358f3sm3f-13.png")}
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
        style={[styles.icon4, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <Image
        style={[styles.icon5, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <Image
        style={[styles.icon6, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <Vector1536 style={[styles.vectorIcon, styles.iconPosition]} />
      <Vector1537 style={[styles.vectorIcon1, styles.iconPosition]} />
      <Vector1538 style={[styles.vectorIcon2, styles.iconPosition]} />
      <View style={styles.bonus020Parent}>
        <Text style={[styles.bonus020Container, styles.bonusContainerTypo]}>
          {`Bonus: `}₱ 0.20
        </Text>
        <Image
          style={[styles.icon7, styles.iconGroupLayout]}
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
      <Vector1539 style={[styles.vectorIcon3, styles.iconPosition]} />
      <Image
        style={[styles.icon8, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <View style={styles.extra020Parent}>
        <Text style={[styles.extra020, styles.bonusContainerTypo]}>
          Extra: ₱0.20
        </Text>
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
        <Frame111
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
  dayTypo: {
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    position: "absolute",
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
  r198000Layout: {
    lineHeight: 18,
    textAlign: "left",
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  pgSlotsText: {
    color: Color.color,
    textTransform: "capitalize",
    textAlign: "left",
    position: "absolute",
  },
  r198000Typo: {
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  bonusContainerTypo: {
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  groupPosition1: {
    height: 223,
    width: 345,
    left: "50%",
    marginLeft: -172.5,
    position: "absolute",
  },
  groupChildLayout2: {
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
  finishedFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  groupChildLayout: {
    height: "5.29%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  collectLayout1: {
    height: 30,
    width: 85,
    position: "absolute",
  },
  groupChild7Position: {
    left: 6,
    position: "absolute",
  },
  collectLayout: {
    width: 94,
    height: 30,
    position: "absolute",
  },
  childLayout: {
    height: 62,
    width: 60,
    borderRadius: Border.br_4,
    top: 259,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 39,
    position: "absolute",
  },
  textTypo1: {
    top: "31.25%",
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
  },
  text4Position: {
    marginLeft: -144.5,
    left: "50%",
    position: "absolute",
  },
  unionLayout: {
    height: 17,
    width: 47,
  },
  groupPosition: {
    height: 64,
    width: 305,
    marginLeft: -152.5,
    left: "50%",
    position: "absolute",
  },
  signInTypo: {
    fontSize: 13,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  zsofe1IconLayout: {
    height: 56,
    width: 67,
    position: "absolute",
  },
  finishedTransform: {
    transform: [
      {
        rotate: "-28.8deg",
      },
    ],
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
    fontSize: FontSize.size_14,
    lineHeight: 14,
    textTransform: "capitalize",
    textAlign: "center",
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
    textAlign: "left",
    lineHeight: 18,
    color: Color.color1,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconPosition1: {
    top: 286,
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconPosition: {
    bottom: "63.44%",
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
    top: "66.04%",
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
    borderColor: Color.colorYellow100,
    height: 224,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8,
  },
  maskGroupIcon: {},
  day4: {
    left: "63.47%",
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
    top: "38.09%",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
  },
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
    textAlign: "left",
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
    top: "55.81%",
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 16,
  },
  instanceParent: {
    width: 375,
    height: 86,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon1: {
    left: 10,
    width: 356,
    height: 13,
    top: 7,
    position: "absolute",
  },
  signInTodayDay: {
    top: "22.64%",
    left: "7.2%",
    lineHeight: 14,
    textTransform: "capitalize",
    textAlign: "left",
    color: Color.color1,
    position: "absolute",
  },
  day1: {
    left: "10.4%",
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
    top: "38.09%",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
  },
  day2: {
    left: "28%",
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
    top: "38.09%",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
  },
  day3: {
    left: "45.6%",
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
    top: "38.09%",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
  },
  day5: {
    left: "81.07%",
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
    top: "38.09%",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
  },
  bonus020: {
    marginLeft: -46.5,
    top: "53.66%",
    color: Color.fFF500,
    textTransform: "capitalize",
    textAlign: "left",
    lineHeight: 16,
    left: "50%",
    position: "absolute",
  },
  inner: {
    height: "38.33%",
    marginLeft: -163.5,
    top: "29.13%",
    bottom: "32.55%",
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
  groupIcon: {
    marginLeft: 112.5,
    top: 337,
    left: "50%",
    position: "absolute",
  },
  groupInner: {
    borderColor: Color.colorDarkslategray700,
    top: 0,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8,
  },
  logInToContainer: {
    top: 45,
    left: 29,
    width: 304,
    height: 157,
    textAlign: "left",
    lineHeight: 16,
    position: "absolute",
  },
  groupChild1: {
    top: "69.19%",
    bottom: "25.43%",
    left: "3.48%",
  },
  groupChild2: {
    top: "85.65%",
    bottom: "8.97%",
    left: "3.48%",
  },
  groupChild3: {
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
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 14,
    color: Color.color,
    textTransform: "capitalize",
    textAlign: "left",
    position: "absolute",
  },
  groupChild4: {
    width: "3.33%",
    top: "29.1%",
    right: "92.9%",
    bottom: "64.71%",
    left: "3.77%",
  },
  groupChild5: {
    width: "3.54%",
    top: "21.17%",
    right: "92.7%",
    bottom: "73.54%",
    left: "3.77%",
  },
  groupChild6: {
    width: "4.52%",
    top: "45.83%",
    right: "92.29%",
    bottom: "48.88%",
    left: "3.19%",
  },
  rectangleGroup: {
    top: 637,
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
  unlock: {
    top: 6,
    left: 28,
    textAlign: "center",
    lineHeight: 16,
    position: "absolute",
  },
  e20d8191b75bf24128ad9a71c8758aIcon: {
    top: 5,
    width: 21,
    height: 20,
  },
  collect: {
    left: 263,
    top: 197,
  },
  collectItem: {
    borderColor: Color.wz2,
    left: 0,
    top: 0,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_6,
  },
  received: {
    left: 26,
    top: 7,
    textAlign: "center",
    lineHeight: 16,
    position: "absolute",
  },
  collect1: {
    left: 0,
    top: 0,
  },
  groupChild7: {
    top: 7,
  },
  collectParent: {
    left: 254,
    top: 197,
  },
  rectangleView: {
    marginLeft: 36.5,
    borderColor: Color.colorGold500,
    width: 60,
    borderRadius: Border.br_4,
    top: 259,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.bg3,
  },
  dfa96056b444f5e96cae769e22f489Icon: {
    top: 281,
    left: 169,
    height: 40,
  },
  text: {
    marginLeft: -13.5,
    color: Color.color1,
    left: "50%",
    position: "absolute",
  },
  child1: {
    marginLeft: -96.5,
    borderColor: Color.colorGold500,
    width: 60,
    borderRadius: Border.br_4,
    top: 259,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.bg3,
  },
  text1: {
    marginLeft: -78.5,
    color: Color.color2,
    left: "50%",
    position: "absolute",
  },
  child2: {
    marginLeft: -30.5,
    borderColor: Color.colorGold500,
    width: 60,
    borderRadius: Border.br_4,
    top: 259,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.bg3,
  },
  text2: {
    marginLeft: 54.5,
    color: Color.color2,
    left: "50%",
    position: "absolute",
  },
  child3: {
    marginLeft: 102.5,
    backgroundColor: Color.colorForestgreen,
    width: 60,
    borderRadius: Border.br_4,
    top: 259,
  },
  text3: {
    marginLeft: 115.5,
    color: Color.color1,
    left: "50%",
    position: "absolute",
  },
  child4: {
    borderColor: Color.colorGold500,
    width: 60,
    borderRadius: Border.br_4,
    top: 259,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.bg3,
    marginLeft: -162.5,
  },
  text4: {
    color: Color.color2,
    top: "31.25%",
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
  },
  text5: {
    marginLeft: -12.5,
    color: Color.color2,
    left: "50%",
    position: "absolute",
  },
  unionIcon: {
    borderRadius: Border.br_8,
  },
  text6: {
    left: "8.51%",
    lineHeight: 14,
    textTransform: "capitalize",
    top: "0%",
    textAlign: "center",
    color: Color.color1,
  },
  unionParent: {
    marginLeft: 43.5,
    top: 247,
    left: "50%",
    position: "absolute",
  },
  groupChild8: {
    backgroundColor: Color.colorGray100,
    top: 0,
    borderRadius: Border.br_6,
  },
  groupChild9: {
    top: 8,
    borderRadius: Border.br_60,
    backgroundColor: Color.colorGray300,
    width: 48,
    height: 48,
  },
  timesOfDeposits2: {
    marginLeft: -95.5,
    top: 14,
    width: 238,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
    color: Color.color1,
    left: "50%",
  },
  add2e694b50907790800188bb93242Icon: {
    top: 10,
    left: 12,
    height: 36,
  },
  groupContainer: {
    top: 0,
  },
  signIn: {
    marginLeft: -143.5,
    top: 40,
    fontStyle: "italic",
    lineHeight: 14,
    left: "50%",
    position: "absolute",
  },
  groupView: {
    top: 491,
  },
  groupChild10: {
    top: 37,
    backgroundColor: Color.colorLemonchiffon,
    width: 66,
    height: 16,
    left: 0,
  },
  zsofe1Icon: {
    left: 0,
    top: 0,
  },
  finished: {
    top: 33,
    left: 4,
    lineHeight: 20,
    color: Color.colorDimgray100,
    width: 54,
    fontSize: 13,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    height: 20,
    textTransform: "capitalize",
  },
  rectangleParent1: {
    top: 495,
    left: 265,
  },
  groupChild11: {
    backgroundColor: Color.colorOrange300,
  },
  groupChild12: {
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
  groupParent1: {
    marginLeft: -34.5,
    top: 377,
    width: 70,
    height: 70,
    left: "50%",
  },
  groupChild13: {
    left: "0%",
    right: "0%",
    borderRadius: Border.br_8,
    backgroundColor: Color.bg3,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  numberOfSignIns: {
    color: Color.color2,
  },
  receivedTotalBonus: {
    color: Color.color2,
    lineHeight: 14,
    textTransform: "capitalize",
    left: "0%",
    top: "0%",
    textAlign: "center",
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
  groupChild14: {
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
    left: 0,
    top: 0,
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
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 14,
    textTransform: "capitalize",
    textAlign: "center",
    color: Color.color1,
  },
  groupChild16: {
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
  groupParent2: {
    height: "7.78%",
    width: "92%",
    top: "11.56%",
    right: "4%",
    bottom: "80.66%",
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
  vectorIcon: {
    right: "64%",
    left: "28.27%",
    top: "34.08%",
    width: "7.73%",
    height: "2.48%",
    bottom: "63.44%",
  },
  vectorIcon1: {
    right: "46.13%",
    left: "46.13%",
    top: "34.08%",
    width: "7.73%",
    height: "2.48%",
    bottom: "63.44%",
  },
  vectorIcon2: {
    right: "81.33%",
    left: "10.93%",
    top: "34.08%",
    width: "7.73%",
    height: "2.48%",
    bottom: "63.44%",
  },
  bonus020Container: {
    left: "20.95%",
    textTransform: "capitalize",
    top: "5.56%",
    textAlign: "left",
    lineHeight: 16,
    position: "absolute",
  },
  icon7: {
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
    height: "4.72%",
    width: "10.67%",
    top: "32.9%",
    right: "26.93%",
    bottom: "62.38%",
    left: "62.4%",
  },
  vectorIcon3: {
    right: "28.27%",
    left: "64%",
    top: "34.08%",
    width: "7.73%",
    height: "2.48%",
    bottom: "63.44%",
  },
  icon8: {
    height: "2.83%",
    width: "6.4%",
    top: "33.73%",
    right: "11.47%",
    left: "82.13%",
  },
  extra020: {
    top: "15%",
    left: "19.8%",
    lineHeight: 14,
    textTransform: "capitalize",
    textAlign: "center",
    color: Color.color1,
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
    height: "2.36%",
    width: "26.93%",
    top: "25.35%",
    right: "33.6%",
    bottom: "72.29%",
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
    alignItems: "center",
    display: "flex",
    height: 20,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textAlign: "left",
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
    backgroundColor: Color.bg,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default Component15;