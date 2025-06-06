import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Slot from "../assets/slot";
import Maskgroup24 from "../assets/maskgroup2";
import Group736128 from "../assets/group7361";
import Component351 from "../assets/";
import Stroke16 from "../assets/stroke";
import Group126617 from "../assets/group12661";
import Group1264716 from "../assets/group12647";
import Group1264717 from "../assets/group12647";
import Group126488 from "../assets/group12648";
import Group126498 from "../assets/group12649";
import Group126508 from "../assets/group12650";
import Group126518 from "../assets/group12651";
import Maskgroup38 from "../assets/maskgroup3";
import Vector1527 from "../assets/vector15";
import Vector1528 from "../assets/vector15";
import Vector1529 from "../assets/vector15";
import Group126942 from "../assets/group12694";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Component12 = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <Slot
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
      <Maskgroup24
        style={[styles.maskGroupIcon, styles.itemPosition]}
        width={325}
        height={204}
      />
      <Text style={[styles.day4, styles.dayTypo]}>Day 4</Text>
      <View style={[styles.instanceParent, styles.collectChildPosition]}>
        <View style={[styles.instanceParent, styles.collectChildPosition]}>
          <View style={[styles.rectangleParent, styles.iconGroupPosition]}>
            <View style={[styles.groupChild, styles.groupChildShadowBox]} />
            <View style={styles.r198000Parent}>
              <Text style={[styles.r198000, styles.containerFlexBox]}>
                ₱19800.00
              </Text>
              <Group736128 style={[styles.groupItem, styles.iconGroupLayout]} />
              <Component351 style={[styles.icon, styles.iconGroupLayout]} />
            </View>
          </View>
          <Stroke16 style={[styles.strokeIcon, styles.iconGroupLayout]} />
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
      <Text style={[styles.signInTodayDay, styles.containerFlexBox]}>
        Sign-in Today: Day 4
      </Text>
      <View style={[styles.inner, styles.childLayout]} />
      <Image
        style={[
          styles.dfa96056b444f5e96cae769e22f489Icon,
          styles.dfa96056b444f5e96cae769e22f489IconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/5dfa96056b444f5e96cae769e22f48911a71a1646f451kzw1wb-1.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>0.20</Text>
      <View style={[styles.rectangleView, styles.child3Border]} />
      <Text style={[styles.text1, styles.textTypo1]}>0.20</Text>
      <View style={[styles.child1, styles.childLayout]} />
      <Text style={[styles.text2, styles.textTypo1]}>0.20</Text>
      <View style={[styles.child2, styles.child2Border]} />
      <Text style={[styles.text3, styles.textTypo1]}>₱ 0.20</Text>
      <Text style={[styles.day1, styles.dayTypo]}>Day 1</Text>
      <Text style={[styles.day2, styles.dayTypo]}>Day 2</Text>
      <Text style={[styles.day3, styles.dayTypo]}>Day 3</Text>
      <Text style={[styles.day5, styles.dayTypo]}>Day 5</Text>
      <Text style={[styles.bonus020, styles.bonusContainerTypo]}>
        Bonus: ₱ 0.20
      </Text>
      <View style={[styles.child3, styles.child3Border]} />
      <Text style={[styles.text4, styles.text4Position]}>0.20</Text>
      <View style={styles.child4} />
      <Group126617 style={styles.groupIcon} width={41} height={20} />
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <LinearGradient
          style={[styles.groupInner, styles.groupPosition]}
          locations={[0, 1]}
          colors={["#37393c", "#25282d"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.logInToContainer, styles.bonusContainerTypo]}>
          {`1. Log in to the game every day to sign in.
2. Continuous sign-ins will gradually unlock rewards.
3. Please pay attention! After the continuous sign-in is interrupted, it will return to Day 1 and start again.
4. Each round of sign-in has `}
          1
          {` chance to re-sign.
5.Your remaining number of re-signments: `}
          0
        </Text>
        <Group1264716 style={[styles.groupChild1, styles.groupChildLayout2]} />
        <Group1264717 style={[styles.groupChild2, styles.groupChildLayout2]} />
        <Group126488 style={[styles.groupChild3, styles.groupChildLayout1]} />
        <Text style={[styles.signInRules, styles.bonusContainerTypo]}>
          Sign-in rules
        </Text>
        <Group126498 style={[styles.groupChild4, styles.groupChildLayout1]} />
        <Group126508 style={[styles.groupChild5, styles.groupChildLayout]} />
        <Group126518 style={[styles.groupChild6, styles.groupChildLayout]} />
      </View>
      <Image
        style={[
          styles.dfa96056b444f5e96cae769e22f489Icon1,
          styles.dfa96056b444f5e96cae769e22f489IconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/5dfa96056b444f5e96cae769e22f48911a71a1646f451kzw1wb-11.png")}
      />
      <Text style={[styles.text5, styles.textTypo1]}>0.20</Text>
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
        <Text style={[styles.reSigning, styles.bonusContainerTypo]}>
          Re-signing
        </Text>
      </View>
      <Image
        style={[styles.icon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <Image
        style={[styles.icon3, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <Image
        style={[styles.icon4, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <View style={styles.groupContainer}>
        <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
          <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
            <View style={[styles.groupChild7, styles.groupChildPosition1]} />
            <View style={[styles.groupChild8, styles.groupChildPosition1]} />
            <Image
              style={[
                styles.a65bbb3b63d7cefc212e71be374455Icon,
                styles.groupWrapperPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/a65bbb3b63d7cefc212e71be3744557bd9ca5c13c468lzqmo2-11.png")}
            />
          </View>
        </View>
        <Image
          style={styles.icon5}
          resizeMode="cover"
          source={require("../assets/1-733643598.png")}
        />
      </View>
      <View style={styles.groupView}>
        <View style={[styles.rectangleParent, styles.iconGroupPosition]}>
          <View style={[styles.groupChild9, styles.iconGroupPosition]} />
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
          <View style={[styles.groupChild10, styles.groupChildPosition]} />
          <View style={styles.parent}>
            <Text style={[styles.text7, styles.textTypo]}>24</Text>
            <Image
              style={[
                styles.add2e694b50907790800188bb93242Icon,
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
          <Maskgroup38
            style={[styles.maskGroupIcon1, styles.iconGroupLayout]}
          />
          <Text style={[styles.numberOfSignIns1, styles.numberTypo]}>
            Number of sign-ins
          </Text>
          <Text style={[styles.receivedTotalBonus1, styles.receivedPosition]}>
            Received total bonus
          </Text>
          <View style={[styles.lineView, styles.slotIconLayout]} />
          <View style={[styles.groupChild12, styles.groupChildPosition]} />
          <View style={styles.wrapper}>
            <Text style={[styles.text8, styles.textTypo]}>₱ 0.20</Text>
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text7, styles.textTypo]}>24</Text>
            <Image
              style={[
                styles.add2e694b50907790800188bb93242Icon,
                styles.collectChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/add2e694b50907790800188bb93242cee3957bd96358f3sm3f-11.png")}
            />
          </View>
        </View>
        <View style={[styles.lineView, styles.slotIconLayout]} />
        <View style={styles.wrapper}>
          <Text style={[styles.text8, styles.textTypo]}>₱ 0.20</Text>
        </View>
        <Image
          style={[styles.icon6, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/1-733643593.png")}
        />
      </View>
      <Image
        style={[styles.icon7, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <Vector1527 style={[styles.vectorIcon, styles.vectorIconLayout]} />
      <Vector1528 style={[styles.vectorIcon1, styles.vectorIconLayout]} />
      <Vector1529 style={[styles.vectorIcon2, styles.vectorIconLayout]} />
      <View style={styles.bonus020Parent}>
        <Text style={[styles.bonus020Container, styles.bonusContainerTypo]}>
          {`Bonus: `}₱ 0.20
        </Text>
        <Image
          style={[styles.icon8, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/1-733643593.png")}
        />
      </View>
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
      <Group126942 style={[styles.child5, styles.iconGroupLayout]} />
      <View style={[styles.child6, styles.child6Position]} />
      <Image
        style={styles.child6Position}
        resizeMode="cover"
        source={require("../assets/1.png")}
      />
      <LinearGradient
        style={[styles.child7, styles.text4Position]}
        locations={[0, 0.5, 1]}
        colors={["#d8d908", "#30a025", "#009f41"]}
        useAngle={true}
        angle={40.99}
      />
      <Image
        style={styles.add2e694b50907790800188bb93242Icon2}
        resizeMode="cover"
        source={require("../assets/add2e694b50907790800188bb93242cee3957bd96358f3sm3f-12.png")}
      />
      <Text style={[styles.require, styles.containerFlexBox]}>Require</Text>
      <Image
        style={styles.free1Icon}
        resizeMode="cover"
        source={require("../assets/free-1.png")}
      />
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
  containerFlexBox: {
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
  childLayout: {
    height: 62,
    width: 60,
    borderRadius: Border.br_4,
    top: 259,
    left: "50%",
    position: "absolute",
  },
  dfa96056b444f5e96cae769e22f489IconLayout: {
    height: 40,
    position: "absolute",
  },
  textTypo1: {
    top: "31.18%",
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
  },
  child3Border: {
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
  child2Border: {
    borderColor: Color.colorDarkslategray700,
    borderWidth: 1,
    borderStyle: "solid",
  },
  bonusContainerTypo: {
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  text4Position: {
    marginLeft: -144.5,
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
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
  groupChildLayout: {
    height: "5.29%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
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
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupWrapperPosition: {
    marginLeft: -35,
    width: 70,
    left: "50%",
    position: "absolute",
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
  child6Position: {
    height: 64,
    width: 305,
    top: 491,
    marginLeft: -152.5,
    left: "50%",
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
    height: 413,
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
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
    top: "38%",
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
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.size_16,
    top: "0%",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
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
    height: "100%",
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
    lineHeight: 14,
    textTransform: "capitalize",
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    color: Color.color1,
  },
  inner: {
    marginLeft: 36.5,
    backgroundColor: Color.colorForestgreen,
  },
  dfa96056b444f5e96cae769e22f489Icon: {
    top: 281,
    left: 169,
    width: 39,
  },
  text: {
    marginLeft: -13.5,
    color: Color.color1,
    left: "50%",
    position: "absolute",
  },
  rectangleView: {
    marginLeft: -96.5,
  },
  text1: {
    marginLeft: -78.5,
    color: Color.color2,
    left: "50%",
    position: "absolute",
  },
  child1: {
    marginLeft: -30.5,
    borderColor: Color.wz,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.bg3,
  },
  text2: {
    marginLeft: 54.5,
    color: Color.color1,
    left: "50%",
    position: "absolute",
  },
  child2: {
    marginLeft: 102.5,
    height: 62,
    width: 60,
    borderRadius: Border.br_4,
    top: 259,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.bg,
    borderColor: Color.colorDarkslategray700,
  },
  text3: {
    marginLeft: 115.5,
    color: Color.color2,
    left: "50%",
    position: "absolute",
  },
  day1: {
    left: "10.4%",
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
    top: "38%",
  },
  day2: {
    left: "28%",
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
    top: "38%",
  },
  day3: {
    left: "45.6%",
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
    top: "38%",
  },
  day5: {
    left: "81.07%",
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
    top: "38%",
  },
  bonus020: {
    marginLeft: -46.5,
    top: "53.53%",
    color: Color.fFF500,
    textTransform: "capitalize",
    textAlign: "left",
    position: "absolute",
    lineHeight: 16,
    left: "50%",
  },
  child3: {
    marginLeft: -162.5,
    borderColor: Color.colorGold500,
  },
  text4: {
    color: Color.color2,
    top: "31.18%",
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_12,
  },
  child4: {
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
  groupIcon: {
    marginLeft: -20.5,
    top: 337,
    left: "50%",
    position: "absolute",
  },
  groupInner: {
    borderColor: Color.colorDarkslategray700,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    backgroundColor: "transparent",
    borderRadius: Border.br_8,
  },
  logInToContainer: {
    top: 45,
    left: 29,
    width: 304,
    height: 157,
    textAlign: "left",
    position: "absolute",
    lineHeight: 16,
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
    display: "flex",
    alignItems: "center",
    width: 90,
    height: 14,
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
    top: 603,
  },
  dfa96056b444f5e96cae769e22f489Icon1: {
    top: 279,
    left: 234,
    width: 40,
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
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
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
    textAlign: "center",
    lineHeight: 16,
    position: "absolute",
  },
  collect: {
    top: 197,
    left: 263,
  },
  icon2: {
    left: 43,
    top: 286,
    height: 24,
    width: 24,
  },
  icon3: {
    left: 175,
    top: 286,
    height: 24,
    width: 24,
  },
  icon4: {
    left: 308,
    top: 286,
    height: 24,
    width: 24,
  },
  groupChild7: {
    backgroundColor: Color.colorOrange300,
  },
  groupChild8: {
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
    top: 1,
    height: 69,
  },
  groupWrapper: {
    height: 70,
    top: 0,
  },
  icon5: {
    marginLeft: -19,
    top: 16,
    width: 38,
    height: 38,
    left: "50%",
    position: "absolute",
  },
  groupContainer: {
    marginLeft: -34.5,
    top: 377,
    height: 70,
    width: 70,
    left: "50%",
    position: "absolute",
  },
  groupChild9: {
    left: "0%",
    right: "0%",
    borderRadius: Border.br_8,
    backgroundColor: Color.bg3,
    position: "absolute",
    width: "100%",
    height: "100%",
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
  groupChild10: {
    backgroundColor: Color.colorDarkslategray500,
    bottom: "12.12%",
    marginLeft: -0.5,
    height: "75.76%",
  },
  text7: {
    top: "15.38%",
    left: "61.11%",
  },
  add2e694b50907790800188bb93242Icon: {
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
    height: "100%",
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
  groupChild12: {
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
  icon6: {
    top: 11,
    left: 219,
  },
  groupView: {
    height: "7.76%",
    width: "92%",
    top: "11.53%",
    right: "4%",
    bottom: "80.71%",
    left: "4%",
    position: "absolute",
  },
  icon7: {
    left: 109,
    top: 286,
    height: 24,
    width: 24,
  },
  vectorIcon: {
    right: "81.33%",
    left: "10.93%",
  },
  vectorIcon1: {
    right: "64%",
    left: "28.27%",
  },
  vectorIcon2: {
    right: "46.13%",
    left: "46.13%",
  },
  bonus020Container: {
    left: "20.95%",
    textTransform: "capitalize",
    top: "5.56%",
    textAlign: "left",
    position: "absolute",
    lineHeight: 16,
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
    left: 27,
    width: 105,
    height: 18,
    position: "absolute",
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
    height: "2.35%",
    width: "26.93%",
    top: "25.29%",
    right: "33.6%",
    bottom: "72.35%",
    left: "39.47%",
    position: "absolute",
  },
  child5: {
    height: "2.59%",
    width: "5.87%",
    top: "32.82%",
    right: "1.07%",
    bottom: "64.59%",
    left: "93.07%",
  },
  child6: {
    backgroundColor: Color.colorDarkgreen200,
    borderRadius: Border.br_6,
  },
  child7: {
    top: 499,
    borderRadius: Border.br_60,
    width: 48,
    height: 48,
    backgroundColor: "transparent",
  },
  add2e694b50907790800188bb93242Icon2: {
    top: 501,
    left: 47,
    height: 36,
    width: 39,
    position: "absolute",
  },
  require: {
    marginLeft: -143.5,
    top: 531,
    fontSize: 13,
    fontStyle: "italic",
    lineHeight: 14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    left: "50%",
  },
  free1Icon: {
    top: 502,
    left: 130,
    width: 122,
    height: 42,
    position: "absolute",
  },
  scrollview: {
    flex: 1,
    maxWidth: "100%",
    width: "100%",
    backgroundColor: Color.bg,
  },
});

export default Component12;