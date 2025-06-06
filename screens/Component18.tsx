import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Slot6 from "../assets/slot6";
import Maskgroup45 from "../assets/maskgroup4";
import Group736134 from "../assets/group7361";
import Component357 from "../assets/";
import Stroke23 from "../assets/stroke";
import Group1264728 from "../assets/group12647";
import Group1264729 from "../assets/group12647";
import Group1264814 from "../assets/group12648";
import Group1264914 from "../assets/group12649";
import Group1265014 from "../assets/group12650";
import Group1265114 from "../assets/group12651";
import Maskgroup61 from "../assets/maskgroup6";
import Group1266114 from "../assets/group12661";
import Vector167 from "../assets/vector16";
import Star13 from "../assets/star1";
import Star21 from "../assets/star2";
import Maskgroup314 from "../assets/maskgroup3";
import Vector1546 from "../assets/vector15";
import Vector1547 from "../assets/vector15";
import Vector1548 from "../assets/vector15";
import Group126851 from "../assets/group12685";
import Frame114 from "../assets/frame1";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Component18 = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <Slot6 style={styles.slotIcon} width={0} height={0} />
      <View style={styles.child} />
      <LinearGradient
        style={[styles.item, styles.itemPosition]}
        locations={[0, 0.5, 1]}
        colors={["#d8d908", "#30a025", "#009f41"]}
        useAngle={true}
        angle={40.99}
      />
      <Maskgroup45
        style={[styles.maskGroupIcon, styles.itemPosition]}
        width={325}
        height={240}
      />
      <View style={styles.instanceParent}>
        <View style={styles.instanceParent}>
          <View style={[styles.rectangleParent, styles.iconGroupPosition]}>
            <View style={styles.groupChild} />
            <View style={styles.r198000Parent}>
              <Text style={[styles.r198000, styles.containerTypo]}>
                ₱19800.00
              </Text>
              <Group736134 style={[styles.groupItem, styles.iconGroupLayout]} />
              <Component357 style={[styles.icon, styles.iconGroupLayout]} />
            </View>
          </View>
          <Stroke23 style={[styles.strokeIcon, styles.iconGroupLayout]} />
          <Text style={[styles.pgSlots, styles.undoneClr]}>
            Continuous sign-ins
          </Text>
        </View>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/-1111.png")}
        />
      </View>
      <Text style={[styles.signInTodayDay, styles.containerTypo]}>
        Sign-in Today: Day 4
      </Text>
      <Text style={[styles.bonus020, styles.bonus020Position]}>
        Bonus: ₱ 0.20
      </Text>
      <View style={styles.inner} />
      <Text style={[styles.extra020, styles.extraTypo]}>Extra: ₱0.20</Text>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <LinearGradient
          style={[styles.groupInner, styles.child4Border]}
          locations={[0, 1]}
          colors={["#37393c", "#25282d"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.logInToContainer, styles.containerTypo]}>
          {`1. Log in to the game every day to sign in.
2. Continuous sign-ins will gradually unlock rewards.
3. Please pay attention! After the continuous sign-in is interrupted, it will return to Day 1 and start again.
4. Each round of sign-in has `}
          1
          {` chance to re-sign.
5.Your remaining number of re-signments: `}
          0
        </Text>
        <Group1264728 style={[styles.groupIcon, styles.groupLayout]} />
        <Group1264729 style={[styles.groupChild1, styles.groupLayout]} />
        <Group1264814 style={[styles.groupChild2, styles.groupChildLayout3]} />
        <Text style={[styles.signInRules, styles.undoneTypo]}>
          Sign-in rules
        </Text>
        <Group1264914 style={[styles.groupChild3, styles.groupChildLayout3]} />
        <Group1265014 style={[styles.groupChild4, styles.groupChildLayout2]} />
        <Group1265114 style={[styles.groupChild5, styles.groupChildLayout2]} />
      </View>
      <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <View style={[styles.view, styles.viewPosition]}>
          <Maskgroup61
            style={[styles.maskGroupIcon1, styles.viewPosition]}
            width={67}
            height={64}
          />
          <Text style={[styles.undone, styles.undoneTypo]}>Undone</Text>
        </View>
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.groupChild7Position]}
          locations={[0, 0.5, 1]}
          colors={["#d8d908", "#30a025", "#009f41"]}
          useAngle={true}
          angle={40.99}
        />
        <Text
          style={[styles.timesOfDeposits2, styles.timesTypo]}
        >{`Times of deposits：2
Deposit amount： ₱200`}</Text>
        <Image
          style={[styles.add2e694b50907790800188bb93242Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/add2e694b50907790800188bb93242cee3957bd96358f3sm3f-12.png")}
        />
        <Text style={[styles.signIn, styles.signInTypo]}>Sign-in</Text>
      </View>
      <Text style={[styles.day4, styles.dayTypo]}>Day 4</Text>
      <View style={[styles.child1, styles.childLayout]} />
      <Image
        style={[
          styles.dfa96056b444f5e96cae769e22f489Icon,
          styles.dfa96056b444f5e96cae769e22f489IconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/5dfa96056b444f5e96cae769e22f48911a71a1646f451kzw1wb-1.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>0.20</Text>
      <View style={[styles.child2, styles.childBorder]} />
      <Text style={[styles.text1, styles.textTypo1]}>0.20</Text>
      <View style={[styles.child3, styles.childBorder]} />
      <View style={[styles.child4, styles.childLayout]} />
      <Text style={[styles.text2, styles.textTypo1]}>₱ 0.20</Text>
      <Text style={[styles.day1, styles.dayTypo]}>Day 1</Text>
      <Text style={[styles.day2, styles.dayTypo]}>Day 2</Text>
      <Text style={[styles.day3, styles.dayTypo]}>Day 3</Text>
      <Text style={[styles.day5, styles.dayTypo]}>Day 5</Text>
      <View style={[styles.child5, styles.childBorder]} />
      <Text style={[styles.text3, styles.textTypo1]}>0.20</Text>
      <Text style={[styles.text4, styles.textTypo1]}>0.20</Text>
      <Group1266114
        style={[styles.child6, styles.icon2Position]}
        width={41}
        height={20}
      />
      <View style={styles.afterTheContinuousSignInIParent}>
        <Text
          style={[styles.afterTheContinuous, styles.containerTypo]}
        >{`After the continuous sign-in is interrupted,
it will return to Day 1 and start again.`}</Text>
        <Vector167 style={[styles.vectorIcon, styles.lineViewLayout]} />
      </View>
      <Text style={styles.text5}>0.20</Text>
      <View style={[styles.unionParent, styles.unionLayout]}>
        <Image
          style={[styles.unionIcon, styles.unionLayout]}
          resizeMode="cover"
          source={require("../assets/union3.png")}
        />
        <Text style={[styles.text6, styles.extraTypo]}>+₱0.20</Text>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.groupChild6, styles.groupViewLayout]} />
        <Text
          style={[styles.timesOfDeposits1, styles.timesTypo]}
        >{`Times of deposits：1
Deposit amount： ₱200 `}</Text>
        <View style={[styles.groupChild7, styles.groupChild7Position]} />
        <Image
          style={[
            styles.e20d8191b75bf24128ad9a71c8758aIcon,
            styles.groupChild8Position,
          ]}
          resizeMode="cover"
          source={require("../assets/e20d8191b75bf24128ad9a71c8758aec6b55b61f2cf0itmebv-22.png")}
        />
        <Text style={[styles.unlocked, styles.signInTypo]}>Unlocked</Text>
        <Star13 style={styles.starIcon} width={6} height={7} />
        <Star21
          style={[styles.groupChild8, styles.groupChild8Position]}
          width={9}
          height={10}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.zsofe1IconLayout]}>
        <View style={[styles.groupChild9, styles.finishedTransform]} />
        <Image
          style={[styles.zsofe1Icon, styles.zsofe1IconLayout]}
          resizeMode="cover"
          source={require("../assets/zsofe-1.png")}
        />
        <Text style={[styles.finished, styles.finishedTransform]}>
          Finished
        </Text>
      </View>
      <View style={[styles.groupContainer, styles.groupContainerLayout]}>
        <View style={[styles.rectangleParent2, styles.groupWrapperPosition]}>
          <View style={[styles.groupChild10, styles.groupChildLayout]} />
          <View style={[styles.groupChild11, styles.groupChildShadowBox]} />
          <Image
            style={[
              styles.a65bbb3b63d7cefc212e71be374455Icon,
              styles.a65bbb3b63d7cefc212e71be374455IconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/a65bbb3b63d7cefc212e71be3744557bd9ca5c13c468lzqmo2-11.png")}
          />
          <Image
            style={[
              styles.dfa96056b444f5e96cae769e22f489Icon1,
              styles.groupViewLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/5dfa96056b444f5e96cae769e22f48911a71a1646f451kzw1wb-21.png")}
          />
        </View>
        <LinearGradient
          style={styles.groupChild12}
          locations={[0, 1]}
          colors={["#fb6900", "#bf1f1f"]}
          useAngle={true}
          angle={180}
        />
        <Text style={styles.extra}>Extra</Text>
      </View>
      <View style={[styles.groupParent1, styles.groupChildLayout]}>
        <View style={[styles.groupWrapper, styles.groupChildLayout]}>
          <View style={[styles.groupWrapper, styles.groupChildLayout]}>
            <View style={[styles.groupChild13, styles.groupChildLayout]} />
            <View style={[styles.groupChild14, styles.groupChildShadowBox]} />
            <Image
              style={[
                styles.a65bbb3b63d7cefc212e71be374455Icon1,
                styles.a65bbb3b63d7cefc212e71be374455IconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/a65bbb3b63d7cefc212e71be3744557bd9ca5c13c468lzqmo2-11.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.icon2, styles.icon2Position]}
          resizeMode="cover"
          source={require("../assets/1-733643598.png")}
        />
      </View>
      <View style={styles.groupParent2}>
        <View style={[styles.rectangleParent, styles.iconGroupPosition]}>
          <View style={[styles.groupChild15, styles.iconGroupPosition]} />
          <Text style={[styles.numberOfSignIns, styles.numberTypo]}>
            Number of sign-ins
          </Text>
          <View
            style={[styles.receivedTotalBonusWrapper, styles.receivedPosition]}
          >
            <Text style={[styles.receivedTotalBonus, styles.extraTypo]}>
              Received total bonus
            </Text>
          </View>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.groupChild16, styles.groupChildPosition]} />
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
            style={[styles.groupChild17, styles.iconGroupPosition]}
            locations={[0, 0.5, 1]}
            colors={["#ef5b12", "#ff8c00", "#ffa800"]}
            useAngle={true}
            angle={90}
          />
          <Maskgroup314
            style={[styles.maskGroupIcon2, styles.iconGroupLayout]}
          />
          <Text style={[styles.numberOfSignIns1, styles.numberTypo]}>
            Number of sign-ins
          </Text>
          <Text style={[styles.receivedTotalBonus1, styles.receivedPosition]}>
            Received total bonus
          </Text>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.groupChild19, styles.groupChildPosition]} />
          <View style={styles.wrapper}>
            <Text style={[styles.text8, styles.textTypo]}>₱ 0.20</Text>
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text7, styles.textTypo]}>24</Text>
            <Image
              style={styles.add2e694b50907790800188bb93242Icon1}
              resizeMode="cover"
              source={require("../assets/add2e694b50907790800188bb93242cee3957bd96358f3sm3f-12.png")}
            />
          </View>
        </View>
        <View style={[styles.lineView, styles.lineViewLayout]} />
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
      <Vector1546 style={[styles.vectorIcon1, styles.vectorIconLayout]} />
      <Vector1547 style={[styles.vectorIcon2, styles.vectorIconLayout]} />
      <Vector1548 style={[styles.vectorIcon3, styles.vectorIconLayout]} />
      <View style={styles.bonus020Parent}>
        <Text style={[styles.bonus020Container, styles.groupItemPosition]}>
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
          styles.dfa96056b444f5e96cae769e22f489Icon2,
          styles.dfa96056b444f5e96cae769e22f489IconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/5dfa96056b444f5e96cae769e22f48911a71a1646f451kzw1wb-11.png")}
      />
      <Group126851 style={[styles.child7, styles.child7Layout]} />
      <View style={[styles.extra020Parent, styles.child7Layout]}>
        <Text style={[styles.extra0201, styles.extraTypo]}>Extra: ₱0.20</Text>
        <Image
          style={[styles.icon9, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/3-1.png")}
        />
      </View>
      <View style={[styles.collect, styles.collectLayout]}>
        <LinearGradient
          style={[styles.collectChild, styles.collectLayout]}
          locations={[0, 1]}
          colors={["#373c42", "#2c3135"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.signIn1, styles.extraTypo]}>Sign in</Text>
      </View>
      <View
        style={[styles.activityTime29day235959Parent, styles.frameIconLayout]}
      >
        <Text style={[styles.activityTime29dayContainer, styles.undoneTypo]}>
          <Text style={styles.activityTime29dayContainer1}>
            {`Activity Time: `}29Day 23:59:59
          </Text>
        </Text>
        <Frame114
          style={[styles.frameIcon, styles.frameIconLayout]}
          width={22}
          height={22}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemPosition: {
    width: 325,
    top: 351,
    left: "50%",
    position: "absolute",
  },
  iconGroupPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  containerTypo: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  undoneClr: {
    color: Color.color,
    position: "absolute",
  },
  bonus020Position: {
    color: Color.fFF500,
    top: "45.5%",
    fontSize: FontSize.size_14,
    textTransform: "capitalize",
    lineHeight: 16,
    position: "absolute",
  },
  extraTypo: {
    textAlign: "center",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  groupPosition: {
    height: 223,
    width: 345,
    left: "50%",
    marginLeft: -172.5,
    position: "absolute",
  },
  child4Border: {
    borderColor: Color.colorDarkslategray700,
    borderWidth: 1,
    borderStyle: "solid",
  },
  groupLayout: {
    right: "92.41%",
    width: "4.12%",
    height: "5.38%",
    left: "3.48%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  groupChildLayout3: {
    height: "6.19%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  undoneTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  groupChildLayout2: {
    height: "5.29%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  groupViewLayout: {
    height: 64,
    position: "absolute",
  },
  viewPosition: {
    width: 67,
    height: 64,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupChild7Position: {
    height: 48,
    width: 48,
    borderRadius: Border.br_60,
    top: 8,
    marginLeft: -144.5,
    left: "50%",
    position: "absolute",
  },
  timesTypo: {
    top: 14,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 18,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 36,
    top: 10,
  },
  signInTypo: {
    fontStyle: "italic",
    lineHeight: 14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  dayTypo: {
    top: "32.3%",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
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
    top: "26.5%",
    fontSize: FontSize.size_12,
    textAlign: "center",
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
  icon2Position: {
    left: "50%",
    position: "absolute",
  },
  lineViewLayout: {
    height: "50%",
    position: "absolute",
  },
  unionLayout: {
    height: 17,
    width: 47,
  },
  groupChild8Position: {
    left: 11,
    position: "absolute",
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
  groupContainerLayout: {
    height: 73,
    width: 70,
    left: "50%",
    position: "absolute",
  },
  groupWrapperPosition: {
    marginLeft: -35,
    top: 0,
  },
  groupChildLayout: {
    height: 70,
    width: 70,
    left: "50%",
    position: "absolute",
  },
  groupChildShadowBox: {
    borderWidth: 1.4,
    backgroundColor: Color.colorGainsboro300,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: Color.colorKhaki200,
    borderColor: Color.color,
    height: 70,
    borderRadius: Border.br_12,
    marginLeft: -35,
    width: 70,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  a65bbb3b63d7cefc212e71be374455IconPosition: {
    height: 69,
    marginLeft: -35,
    width: 70,
    left: "50%",
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
    bottom: "69%",
    top: "28.9%",
    width: "7.73%",
    height: "2.1%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  groupItemPosition: {
    top: "5.56%",
    position: "absolute",
  },
  child7Layout: {
    height: "2%",
    position: "absolute",
  },
  collectLayout: {
    height: 30,
    width: 85,
    position: "absolute",
  },
  frameIconLayout: {
    height: 22,
    position: "absolute",
  },
  slotIcon: {
    top: "56%",
    left: "48.93%",
    position: "absolute",
  },
  child: {
    top: 178,
    borderColor: Color.colorYellow200,
    borderWidth: 2,
    height: 568,
    width: 345,
    borderStyle: "solid",
    marginLeft: -172.5,
    backgroundColor: Color.bg3,
    borderRadius: Border.br_6,
    left: "50%",
    position: "absolute",
  },
  item: {
    borderColor: Color.colorYellow100,
    height: 345,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8,
    marginLeft: -162.5,
  },
  maskGroupIcon: {
    marginLeft: -165.5,
  },
  groupChild: {
    shadowColor: Color.colorGray2100,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Color.bg1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  r198000: {
    left: "17.25%",
    color: Color.wz,
    lineHeight: 18,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
    top: "0%",
    position: "absolute",
  },
  groupItem: {
    height: "88.89%",
    width: "12.24%",
    right: "87.76%",
    bottom: "5.56%",
    top: "5.56%",
    position: "absolute",
    left: "0%",
  },
  icon: {
    height: "81.11%",
    width: "12.94%",
    top: "11.11%",
    bottom: "7.78%",
    left: "87.06%",
    right: "0%",
    position: "absolute",
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
    width: "100%",
  },
  strokeIcon: {
    height: "18.6%",
    width: "2.45%",
    right: "93.47%",
    bottom: "25.58%",
    left: "4.08%",
    top: "55.81%",
    position: "absolute",
  },
  pgSlots: {
    left: "8.8%",
    textTransform: "capitalize",
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
    left: 0,
    top: 0,
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
    top: "19.2%",
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
    left: "17.6%",
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  inner: {
    height: "32.5%",
    marginLeft: -163.5,
    top: "24.7%",
    bottom: "42.8%",
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
  extra020: {
    left: "58.93%",
    color: Color.fFF500,
    top: "45.5%",
    fontSize: FontSize.size_14,
    textTransform: "capitalize",
    lineHeight: 16,
    position: "absolute",
  },
  groupInner: {
    height: 223,
    width: 345,
    left: "50%",
    marginLeft: -172.5,
    position: "absolute",
    top: 0,
    backgroundColor: "transparent",
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
    fontSize: FontSize.size_14,
    lineHeight: 14,
    color: Color.color,
    position: "absolute",
    textTransform: "capitalize",
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
    top: 758,
  },
  rectangleView: {
    shadowColor: Color.colorYellow100,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.colorDarkgreen200,
    width: 305,
    height: 64,
    marginLeft: -152.5,
    left: "50%",
    shadowOpacity: 1,
    top: 0,
    borderRadius: Border.br_6,
  },
  maskGroupIcon1: {
    marginLeft: -33.5,
  },
  undone: {
    left: 28,
    lineHeight: 28,
    width: 45,
    transform: [
      {
        rotate: "36.7deg",
      },
    ],
    height: 10,
    fontSize: FontSize.size_12,
    top: 1,
    color: Color.color,
    position: "absolute",
  },
  view: {
    marginLeft: 85.5,
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
  },
  timesOfDeposits2: {
    marginLeft: -95.5,
    color: Color.color3,
    width: 238,
  },
  add2e694b50907790800188bb93242Icon: {
    left: 12,
    width: 39,
    position: "absolute",
  },
  signIn: {
    marginLeft: -143.5,
    top: 40,
    fontSize: 13,
  },
  rectangleContainer: {
    top: 491,
    width: 305,
    height: 64,
    marginLeft: -152.5,
    left: "50%",
  },
  day4: {
    left: "63.47%",
  },
  child1: {
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
  child4: {
    marginLeft: 102.5,
    borderColor: Color.colorDarkslategray700,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.bg,
    height: 62,
    width: 60,
    borderRadius: Border.br_4,
    top: 259,
  },
  text2: {
    marginLeft: 115.5,
    color: Color.color2,
  },
  day1: {
    left: "10.4%",
  },
  day2: {
    left: "28%",
  },
  day3: {
    left: "45.6%",
  },
  day5: {
    left: "81.07%",
  },
  child5: {
    marginLeft: -162.5,
  },
  text3: {
    color: Color.color2,
    marginLeft: -144.5,
    top: "26.5%",
  },
  text4: {
    marginLeft: -12.5,
    color: Color.color2,
  },
  child6: {
    marginLeft: 45.5,
    top: 337,
  },
  afterTheContinuous: {
    marginLeft: -112,
    color: Color.colorRed300,
    fontSize: FontSize.size_12,
    lineHeight: 14,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    width: "5.3%",
    top: "3.57%",
    right: "94.7%",
    bottom: "46.43%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
  },
  afterTheContinuousSignInIParent: {
    top: 572,
    width: 264,
    height: 28,
    marginLeft: -152.5,
    left: "50%",
    position: "absolute",
  },
  text5: {
    height: "0.9%",
    marginLeft: 54.5,
    width: 24,
    justifyContent: "center",
    top: "26.5%",
    fontSize: FontSize.size_12,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.color1,
    lineHeight: 14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  unionIcon: {
    borderRadius: Border.br_8,
  },
  text6: {
    left: "8.51%",
    fontSize: FontSize.size_12,
    color: Color.color1,
    lineHeight: 14,
    textTransform: "capitalize",
    top: "0%",
    position: "absolute",
  },
  unionParent: {
    marginLeft: 43.5,
    top: 247,
    left: "50%",
    position: "absolute",
  },
  groupChild6: {
    backgroundColor: Color.colorGray100,
    width: 305,
    height: 64,
    marginLeft: -152.5,
    left: "50%",
    top: 0,
    borderRadius: Border.br_6,
  },
  timesOfDeposits1: {
    marginLeft: -91.5,
    width: 234,
    color: Color.color1,
  },
  groupChild7: {
    backgroundColor: Color.colorGray300,
  },
  e20d8191b75bf24128ad9a71c8758aIcon: {
    width: 43,
    height: 36,
    top: 10,
  },
  unlocked: {
    marginLeft: -147.5,
    top: 41,
    fontSize: FontSize.size_12,
  },
  starIcon: {
    left: 26,
    top: 11,
    position: "absolute",
  },
  groupChild8: {
    top: 17,
  },
  groupView: {
    top: 612,
    width: 305,
    height: 64,
    marginLeft: -152.5,
    left: "50%",
  },
  groupChild9: {
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
    height: 20,
    fontSize: 13,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  rectangleParent1: {
    top: 616,
    left: 265,
  },
  groupChild10: {
    backgroundColor: Color.colorOrange300,
    borderRadius: Border.br_12,
    height: 70,
    marginLeft: -35,
    top: 3,
  },
  groupChild11: {
    top: 3,
  },
  a65bbb3b63d7cefc212e71be374455Icon: {
    top: 4,
  },
  dfa96056b444f5e96cae769e22f489Icon1: {
    left: 3,
    width: 64,
    top: 0,
  },
  rectangleParent2: {
    height: 73,
    width: 70,
    left: "50%",
    position: "absolute",
  },
  groupChild12: {
    top: 54,
    borderBottomRightRadius: Border.br_12,
    borderBottomLeftRadius: Border.br_12,
    borderRightWidth: 1.4,
    borderBottomWidth: 1.4,
    borderLeftWidth: 1.4,
    height: 19,
    borderColor: Color.color,
    width: 70,
    left: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    position: "absolute",
  },
  extra: {
    height: "20.27%",
    width: "62.14%",
    top: "75.34%",
    left: "18.14%",
    textTransform: "uppercase",
    justifyContent: "center",
    fontSize: FontSize.size_12,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.color1,
    lineHeight: 14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupContainer: {
    marginLeft: 39.5,
    top: 374,
  },
  groupChild13: {
    backgroundColor: Color.colorOrange300,
    borderRadius: Border.br_12,
    height: 70,
    marginLeft: -35,
    top: 0,
  },
  groupChild14: {
    top: 0,
  },
  a65bbb3b63d7cefc212e71be374455Icon1: {
    top: 1,
  },
  groupWrapper: {
    marginLeft: -35,
    top: 0,
  },
  icon2: {
    marginLeft: -19,
    top: 16,
    width: 38,
    height: 38,
  },
  groupParent1: {
    marginLeft: -109.5,
    top: 377,
  },
  groupChild15: {
    left: "0%",
    right: "0%",
    borderRadius: Border.br_8,
    backgroundColor: Color.bg3,
    height: "100%",
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
    top: "27.27%",
    bottom: "22.73%",
    left: "49.86%",
    width: 0,
  },
  groupChild16: {
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
  groupChild17: {
    left: "0%",
    right: "0%",
    backgroundColor: "transparent",
    borderRadius: Border.br_8,
    width: "100%",
  },
  maskGroupIcon2: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
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
  groupChild19: {
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
    left: 219,
    height: 24,
    top: 11,
    width: 24,
    position: "absolute",
  },
  groupParent2: {
    height: "6.6%",
    width: "92%",
    top: "9.8%",
    right: "4%",
    bottom: "83.6%",
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
  vectorIcon1: {
    right: "64%",
    left: "28.27%",
  },
  vectorIcon2: {
    right: "46.13%",
    left: "46.13%",
  },
  vectorIcon3: {
    right: "81.33%",
    left: "10.93%",
  },
  bonus020Container: {
    left: "20.95%",
    fontSize: FontSize.size_14,
    textTransform: "capitalize",
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  icon8: {
    width: "17.14%",
    right: "82.86%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  bonus020Parent: {
    top: 217,
    width: 105,
    height: 18,
    left: 27,
    position: "absolute",
  },
  dfa96056b444f5e96cae769e22f489Icon2: {
    top: 279,
    left: 234,
    width: 40,
  },
  child7: {
    width: "5.33%",
    top: "41.1%",
    right: "47.2%",
    bottom: "56.9%",
    left: "47.47%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  extra0201: {
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
    position: "absolute",
  },
  extra020Parent: {
    width: "26.93%",
    top: "21.5%",
    right: "33.6%",
    bottom: "76.5%",
    left: "39.47%",
  },
  collectChild: {
    borderColor: Color.wz2,
    left: 0,
    top: 0,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_6,
  },
  signIn1: {
    top: 6,
    left: 19,
    fontSize: FontSize.size_14,
    lineHeight: 16,
    position: "absolute",
  },
  collect: {
    top: 197,
    left: 263,
  },
  activityTime29dayContainer1: {
    width: "100%",
  },
  activityTime29dayContainer: {
    left: 30,
    lineHeight: 29,
    width: 200,
    height: 20,
    top: 1,
    fontSize: FontSize.size_14,
    position: "absolute",
  },
  frameIcon: {
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  activityTime29day235959Parent: {
    top: 708,
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

export default Component18;