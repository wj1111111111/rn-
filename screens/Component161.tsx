import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Slot4 from "../assets/slot4";
import Maskgroup43 from "../assets/maskgroup4";
import Group7361132 from "../assets/group73611";
import Component355 from "../assets/";
import Stroke20 from "../assets/stroke";
import Group126282 from "../assets/group12628";
import Group1264724 from "../assets/group12647";
import Group1264725 from "../assets/group12647";
import Group1264812 from "../assets/group12648";
import Group1264912 from "../assets/group12649";
import Group1265012 from "../assets/group12650";
import Group1265112 from "../assets/group12651";
import Group1266112 from "../assets/group12661";
import Maskgroup52 from "../assets/maskgroup5";
import Vector165 from "../assets/vector16";
import Maskgroup312 from "../assets/maskgroup3";
import Vector1540 from "../assets/vector15";
import Vector1541 from "../assets/vector15";
import Vector1542 from "../assets/vector15";
import Frame112 from "../assets/frame1";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Component16 = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <Slot4 style={styles.slotIcon} width={0} height={0} />
      <View style={styles.child} />
      <LinearGradient
        style={[styles.item, styles.itemPosition]}
        locations={[0, 0.5, 1]}
        colors={["#d8d908", "#30a025", "#009f41"]}
        useAngle={true}
        angle={40.99}
      />
      <Maskgroup43
        style={[styles.maskGroupIcon, styles.itemPosition]}
        width={325}
        height={240}
      />
      <View style={[styles.instanceParent, styles.collectChildPosition]}>
        <View style={[styles.instanceParent, styles.collectChildPosition]}>
          <View style={[styles.rectangleParent, styles.iconGroupPosition]}>
            <View style={styles.groupChild} />
            <View style={styles.r198000Parent}>
              <Text style={[styles.r198000, styles.receivedTypo]}>
                ₱19800.00
              </Text>
              <Group7361132
                style={[styles.groupItem, styles.iconGroupLayout]}
              />
              <Component355 style={[styles.icon, styles.iconGroupLayout]} />
            </View>
          </View>
          <Stroke20 style={[styles.strokeIcon, styles.iconGroupLayout]} />
          <Text style={[styles.pgSlots, styles.pgSlotsClr]}>
            Continuous sign-ins
          </Text>
        </View>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/-14.png")}
        />
      </View>
      <Text style={[styles.signInTodayDay, styles.bonus020Text]}>
        Sign-in Today: Day 4
      </Text>
      <Text style={[styles.bonus020, styles.bonus020Typo]}>Bonus: ₱ 0.20</Text>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
          <View style={styles.groupInner} />
          <View style={styles.groupChild2ShadowBox} />
          <Image
            style={[
              styles.a65bbb3b63d7cefc212e71be374455Icon,
              styles.rectangleGroupPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/a65bbb3b63d7cefc212e71be3744557bd9ca5c13c468lzqmo2-12.png")}
          />
        </View>
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/1008.png")}
        />
      </View>
      <View style={styles.inner} />
      <Text style={[styles.extra020, styles.extraText]}>Extra: ₱0.20</Text>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
          <View style={styles.groupInner} />
          <View style={styles.groupChild2ShadowBox} />
          <Image
            style={[
              styles.a65bbb3b63d7cefc212e71be374455Icon,
              styles.rectangleGroupPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/a65bbb3b63d7cefc212e71be3744557bd9ca5c13c468lzqmo2-12.png")}
          />
        </View>
        <Image
          style={styles.dfa96056b444f5e96cae769e22f489Icon}
          resizeMode="cover"
          source={require("../assets/5dfa96056b444f5e96cae769e22f48911a71a1646f451kzw1wb-2.png")}
        />
      </View>
      <Group126282 style={[styles.groupIcon, styles.groupIconLayout]} />
      <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.child4Border]}
          locations={[0, 1]}
          colors={["#37393c", "#25282d"]}
          useAngle={true}
          angle={180}
        />
        <Text style={styles.logInToContainer}>
          {`1. Log in to the game every day to sign in.
2. Continuous sign-ins will gradually unlock rewards.
3. Please pay attention! After the continuous sign-in is interrupted, it will return to Day 1 and start again.
4. Each round of sign-in has `}
          1
          {` chance to re-sign.
5.Your remaining number of re-signments: `}
          0
        </Text>
        <Group1264724 style={[styles.groupChild3, styles.groupChildLayout2]} />
        <Group1264725 style={[styles.groupChild4, styles.groupChildLayout2]} />
        <Group1264812 style={[styles.groupChild5, styles.groupChildLayout1]} />
        <Text style={[styles.signInRules, styles.signInRulesTypo]}>
          Sign-in rules
        </Text>
        <Group1264912 style={[styles.groupChild6, styles.groupChildLayout1]} />
        <Group1265012 style={[styles.groupChild7, styles.groupChildLayout]} />
        <Group1265112 style={[styles.groupChild8, styles.groupChildLayout]} />
      </View>
      <View style={[styles.inner1, styles.childPosition]}>
        <View style={[styles.rectangleParent2, styles.childPosition]}>
          <View style={[styles.groupChild9, styles.childPosition]} />
          <LinearGradient
            style={[styles.groupChild10, styles.childLayout1]}
            locations={[0, 0.5, 1]}
            colors={["#d8d908", "#30a025", "#009f41"]}
            useAngle={true}
            angle={40.99}
          />
          <Text
            style={[
              styles.minimumDepositAmount200,
              styles.timesOfDeposits2Typo,
            ]}
          >{`Minimum deposit amount：₱200
Total bet amount: 50,000`}</Text>
          <Image
            style={[
              styles.add2e694b50907790800188bb93242Icon,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/add2e694b50907790800188bb93242cee3957bd96358f3sm3f-12.png")}
          />
          <Text style={[styles.signIn, styles.signInTypo]}>Sign-in</Text>
        </View>
      </View>
      <Text style={[styles.day4, styles.dayTypo]}>Day 4</Text>
      <View style={[styles.child1, styles.childLayout]} />
      <Image
        style={[
          styles.dfa96056b444f5e96cae769e22f489Icon1,
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
      <Text style={[styles.text5, styles.textTypo1]}>0.20</Text>
      <Group1266112
        style={[styles.child6, styles.child6Position]}
        width={41}
        height={20}
      />
      <Maskgroup52
        style={[styles.maskGroupIcon1, styles.child8Position]}
        width={322}
        height={343}
      />
      <View style={[styles.child7, styles.childPosition]} />
      <Text
        style={[styles.timesOfDeposits2, styles.timesOfDeposits2Typo]}
      >{`Times of deposits：2
Deposit amount： ₱200 `}</Text>
      <LinearGradient
        style={[styles.child8, styles.child8Position]}
        locations={[0, 0.5, 1]}
        colors={["#3bc117", "rgba(59, 193, 23, 0.5)", "rgba(59, 193, 23, 0)"]}
        useAngle={true}
        angle={90}
      />
      <Text style={[styles.unlockMissedRewards, styles.signInRulesTypo]}>
        Unlock missed rewards after completing the re-signing task
      </Text>
      <Image
        style={[
          styles.e20d8191b75bf24128ad9a71c8758aIcon,
          styles.child6Position,
        ]}
        resizeMode="cover"
        source={require("../assets/e20d8191b75bf24128ad9a71c8758aec6b55b61f2cf0itmebv-1.png")}
      />
      <Image
        style={styles.icon3}
        resizeMode="cover"
        source={require("../assets/5-1.png")}
      />
      <View style={styles.afterTheContinuousSignInIParent}>
        <Text
          style={[styles.afterTheContinuous, styles.dayTypo]}
        >{`After the continuous sign-in is interrupted,
it will return to Day 1 and start again.`}</Text>
        <Vector165 style={[styles.vectorIcon, styles.lineViewLayout]} />
      </View>
      <LinearGradient
        style={[styles.child9, styles.childLayout1]}
        locations={[0, 0.5, 1]}
        colors={["#d8d908", "#30a025", "#009f41"]}
        useAngle={true}
        angle={40.99}
      />
      <Image
        style={[styles.e20d8191b75bf24128ad9a71c8758aIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/e20d8191b75bf24128ad9a71c8758aec6b55b61f2cf0itmebv-21.png")}
      />
      <Text style={[styles.unlock, styles.signInTypo]}>Unlock</Text>
      <View style={[styles.unionParent, styles.unionLayout]}>
        <Image
          style={[styles.unionIcon, styles.unionLayout]}
          resizeMode="cover"
          source={require("../assets/union4.png")}
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
        <Text style={[styles.unlock1, styles.unlock1Typo]}>Unlock</Text>
        <Image
          style={[
            styles.e20d8191b75bf24128ad9a71c8758aIcon2,
            styles.reSigningPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/e20d8191b75bf24128ad9a71c8758aec6b55b61f2cf0itmebv-21.png")}
        />
      </View>
      <View style={[styles.collect, styles.collectLayout]}>
        <LinearGradient
          style={[styles.collectChild, styles.collectLayout]}
          locations={[0, 1]}
          colors={["#76cd00", "#478a03"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.reSigning, styles.reSigningPosition]}>
          Re-signing
        </Text>
      </View>
      <View style={styles.groupParent1}>
        <View style={[styles.rectangleParent, styles.iconGroupPosition]}>
          <View style={[styles.groupChild11, styles.iconGroupPosition]} />
          <Text style={[styles.numberOfSignIns, styles.numberTypo]}>
            Number of sign-ins
          </Text>
          <View
            style={[styles.receivedTotalBonusWrapper, styles.receivedPosition]}
          >
            <Text style={[styles.receivedTotalBonus, styles.extraText]}>
              Received total bonus
            </Text>
          </View>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.groupChild12, styles.groupChildPosition]} />
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
            style={[styles.groupChild13, styles.iconGroupPosition]}
            locations={[0, 0.5, 1]}
            colors={["#ef5b12", "#ff8c00", "#ffa800"]}
            useAngle={true}
            angle={90}
          />
          <Maskgroup312
            style={[styles.maskGroupIcon2, styles.iconGroupLayout]}
          />
          <Text style={[styles.numberOfSignIns1, styles.numberTypo]}>
            Number of sign-ins
          </Text>
          <Text style={[styles.receivedTotalBonus1, styles.receivedPosition]}>
            Received total bonus
          </Text>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.groupChild15, styles.groupChildPosition]} />
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
              source={require("../assets/add2e694b50907790800188bb93242cee3957bd96358f3sm3f-12.png")}
            />
          </View>
        </View>
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <View style={styles.wrapper}>
          <Text style={[styles.text8, styles.textTypo]}>₱ 0.20</Text>
        </View>
        <Image
          style={styles.icon4}
          resizeMode="cover"
          source={require("../assets/1-733643593.png")}
        />
      </View>
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
      <Image
        style={[styles.icon8, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/1-733643593.png")}
      />
      <Vector1540 style={[styles.vectorIcon1, styles.vectorIconLayout]} />
      <Vector1541 style={[styles.vectorIcon2, styles.vectorIconLayout]} />
      <Vector1542 style={[styles.vectorIcon3, styles.vectorIconLayout]} />
      <View style={styles.bonus020Parent}>
        <Text style={[styles.bonus020Container, styles.bonus020Text]}>
          {`Bonus: `}₱ 0.20
        </Text>
        <Image
          style={[styles.icon9, styles.iconGroupLayout]}
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
      <View style={[styles.extra020Parent, styles.groupIconLayout]}>
        <Text style={[styles.extra0201, styles.extraText]}>Extra: ₱0.20</Text>
        <Image
          style={[styles.icon10, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/3-1.png")}
        />
      </View>
      <View
        style={[styles.activityTime29day235959Parent, styles.frameIconLayout]}
      >
        <Text
          style={[styles.activityTime29dayContainer, styles.signInRulesTypo]}
        >
          <Text style={styles.activityTime29dayContainer1}>
            {`Activity Time: `}29Day 23:59:59
          </Text>
        </Text>
        <Frame112
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
    position: "absolute",
  },
  receivedTypo: {
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  pgSlotsClr: {
    color: Color.color,
    textTransform: "capitalize",
  },
  bonus020Text: {
    textTransform: "capitalize",
    textAlign: "left",
  },
  bonus020Typo: {
    color: Color.fFF500,
    top: "46.91%",
    fontSize: FontSize.size_14,
    lineHeight: 16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupPosition: {
    width: 66,
    top: 381,
    height: 66,
    left: "50%",
    position: "absolute",
  },
  rectangleGroupPosition: {
    marginLeft: -33,
    width: 66,
    left: "50%",
    position: "absolute",
  },
  extraText: {
    textAlign: "center",
    textTransform: "capitalize",
  },
  groupIconLayout: {
    height: "2.06%",
    position: "absolute",
  },
  rectanglePosition: {
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
  signInRulesTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChildLayout: {
    height: "5.29%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  childPosition: {
    height: 64,
    width: 305,
    marginLeft: -152.5,
    left: "50%",
    position: "absolute",
  },
  childLayout1: {
    height: 48,
    width: 48,
    borderRadius: Border.br_60,
    marginLeft: -144.5,
    backgroundColor: "transparent",
    left: "50%",
    position: "absolute",
  },
  timesOfDeposits2Typo: {
    width: 238,
    color: Color.color3,
    marginLeft: -95.5,
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
    position: "absolute",
  },
  signInTypo: {
    fontStyle: "italic",
    fontSize: 13,
    lineHeight: 14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  dayTypo: {
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  childLayout: {
    height: 62,
    borderRadius: Border.br_4,
    top: 259,
    width: 60,
    left: "50%",
    position: "absolute",
  },
  dfa96056b444f5e96cae769e22f489IconLayout: {
    height: 40,
    position: "absolute",
  },
  textTypo1: {
    top: "27.32%",
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
  child6Position: {
    width: 41,
    left: "50%",
    position: "absolute",
  },
  child8Position: {
    width: 322,
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
  collectLayout: {
    height: 30,
    width: 85,
    position: "absolute",
  },
  unlock1Typo: {
    top: 6,
    textAlign: "center",
    fontSize: FontSize.size_14,
    lineHeight: 16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  reSigningPosition: {
    left: 6,
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
    bottom: "68.04%",
    top: "29.79%",
    width: "7.73%",
    height: "2.16%",
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
    top: "57.73%",
    left: "48.93%",
    position: "absolute",
  },
  child: {
    top: 178,
    borderColor: Color.colorYellow200,
    borderWidth: 2,
    height: 566,
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
    height: 345,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8,
  },
  maskGroupIcon: {},
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
    textAlign: "left",
    lineHeight: 18,
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
    left: "0%",
    position: "absolute",
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
    lineHeight: 16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
    top: "55.81%",
    textAlign: "left",
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
    top: "19.79%",
    left: "7.2%",
    color: Color.color1,
    lineHeight: 14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
    position: "absolute",
  },
  bonus020: {
    left: "17.6%",
    textTransform: "capitalize",
    textAlign: "left",
  },
  groupInner: {
    backgroundColor: Color.colorOrange300,
    borderRadius: Border.br_12,
    marginLeft: -33,
    height: 66,
    width: 66,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupChild2ShadowBox: {
    borderWidth: 1.4,
    borderColor: Color.color,
    backgroundColor: Color.colorGainsboro300,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: Color.colorKhaki200,
    borderRadius: Border.br_12,
    marginLeft: -33,
    height: 66,
    width: 66,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    top: 0,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  a65bbb3b63d7cefc212e71be374455Icon: {
    height: 65,
    top: 1,
  },
  rectangleGroup: {
    height: 66,
    top: 0,
  },
  icon2: {
    top: 17,
    left: 16,
    width: 36,
    height: 34,
    position: "absolute",
  },
  groupContainer: {
    marginLeft: -107.5,
    height: 66,
  },
  inner: {
    height: "33.51%",
    marginLeft: -163.5,
    top: "25.46%",
    bottom: "41.03%",
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
    top: "46.91%",
    fontSize: FontSize.size_14,
    lineHeight: 16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  dfa96056b444f5e96cae769e22f489Icon: {
    top: 13,
    left: 11,
    width: 45,
    height: 39,
    position: "absolute",
  },
  groupView: {
    marginLeft: 41.5,
    height: 66,
  },
  groupIcon: {
    width: "5.33%",
    top: "42.37%",
    right: "47.2%",
    bottom: "55.57%",
    left: "47.47%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  rectangleLineargradient: {
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
    width: 304,
    height: 157,
    left: 29,
    fontSize: FontSize.size_14,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild3: {
    top: "69.19%",
    bottom: "25.43%",
    left: "3.48%",
  },
  groupChild4: {
    top: "85.65%",
    bottom: "8.97%",
    left: "3.48%",
  },
  groupChild5: {
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
    textTransform: "capitalize",
  },
  groupChild6: {
    width: "3.33%",
    top: "29.1%",
    right: "92.9%",
    bottom: "64.71%",
    left: "3.77%",
  },
  groupChild7: {
    width: "3.54%",
    top: "21.17%",
    right: "92.7%",
    bottom: "73.54%",
    left: "3.77%",
  },
  groupChild8: {
    width: "4.52%",
    top: "45.83%",
    right: "92.29%",
    bottom: "48.88%",
    left: "3.19%",
  },
  rectangleParent1: {
    top: 756,
  },
  groupChild9: {
    backgroundColor: Color.colorDarkgreen100,
    top: 0,
    borderRadius: Border.br_6,
  },
  groupChild10: {
    top: 8,
  },
  minimumDepositAmount200: {
    top: 14,
  },
  add2e694b50907790800188bb93242Icon: {
    top: 10,
    left: 12,
    width: 39,
  },
  signIn: {
    marginLeft: -143.5,
    top: 40,
  },
  rectangleParent2: {
    top: 0,
  },
  inner1: {
    top: 491,
  },
  day4: {
    left: "63.47%",
    top: "33.3%",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
  },
  child1: {
    marginLeft: 36.5,
    backgroundColor: Color.colorForestgreen,
  },
  dfa96056b444f5e96cae769e22f489Icon1: {
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
    borderRadius: Border.br_4,
    top: 259,
  },
  text2: {
    marginLeft: 115.5,
    color: Color.color2,
  },
  day1: {
    left: "10.4%",
    top: "33.3%",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
  },
  day2: {
    left: "28%",
    top: "33.3%",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
  },
  day3: {
    left: "45.6%",
    top: "33.3%",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
  },
  day5: {
    left: "81.07%",
    top: "33.3%",
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.color1,
    lineHeight: 16,
  },
  child5: {
    marginLeft: -162.5,
    borderColor: Color.colorGold500,
  },
  text3: {
    color: Color.color2,
    marginLeft: -144.5,
    top: "27.32%",
  },
  text4: {
    marginLeft: -12.5,
    color: Color.color2,
  },
  text5: {
    marginLeft: 55.5,
    color: Color.color1,
  },
  child6: {
    marginLeft: 45.5,
    top: 337,
  },
  maskGroupIcon1: {
    marginLeft: -160.5,
    top: 351,
  },
  child7: {
    top: 612,
    backgroundColor: Color.colorDarkgreen200,
    borderRadius: Border.br_6,
  },
  timesOfDeposits2: {
    top: 626,
  },
  child8: {
    marginLeft: -161.5,
    top: 385,
    borderColor: Color.colorLime,
    borderLeftWidth: 2,
    height: 58,
    backgroundColor: "transparent",
    width: 322,
    borderStyle: "solid",
  },
  unlockMissedRewards: {
    marginLeft: -97.5,
    top: 396,
    width: 243,
    color: Color.color1,
    lineHeight: 18,
    fontSize: FontSize.size_16,
    left: "50%",
  },
  e20d8191b75bf24128ad9a71c8758aIcon: {
    marginLeft: -148.5,
    top: 391,
    height: 46,
    display: "none",
  },
  icon3: {
    top: 387,
    width: 60,
    height: 48,
    left: 29,
    position: "absolute",
  },
  afterTheContinuous: {
    marginLeft: -112,
    color: Color.colorRed300,
    lineHeight: 14,
    textAlign: "left",
    top: 0,
    left: "50%",
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
  child9: {
    top: 620,
  },
  e20d8191b75bf24128ad9a71c8758aIcon1: {
    top: 622,
    left: 48,
    width: 38,
  },
  unlock: {
    marginLeft: -142.5,
    top: 652,
  },
  unionIcon: {
    borderRadius: Border.br_8,
  },
  text6: {
    left: "8.51%",
    textAlign: "center",
    textTransform: "capitalize",
    color: Color.color1,
    lineHeight: 14,
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
  unlock1: {
    left: 28,
    position: "absolute",
  },
  e20d8191b75bf24128ad9a71c8758aIcon2: {
    top: 5,
    width: 21,
    height: 20,
  },
  collect: {
    top: 197,
    left: 263,
  },
  reSigning: {
    top: 6,
    textAlign: "center",
    fontSize: FontSize.size_14,
    lineHeight: 16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  groupChild11: {
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
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
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
  groupChild12: {
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
  groupChild13: {
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
    textTransform: "capitalize",
    fontSize: FontSize.size_14,
    color: Color.color1,
    lineHeight: 14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  groupChild15: {
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
  icon4: {
    top: 11,
    left: 219,
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupParent1: {
    height: "6.8%",
    width: "92%",
    top: "10.1%",
    right: "4%",
    bottom: "83.09%",
    left: "4%",
    position: "absolute",
  },
  icon5: {
    left: 43,
  },
  icon6: {
    left: 109,
  },
  icon7: {
    left: 175,
  },
  icon8: {
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
    lineHeight: 16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
    top: "5.56%",
  },
  icon9: {
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
  extra0201: {
    top: "15%",
    left: "19.8%",
    fontSize: FontSize.size_14,
    color: Color.color1,
    lineHeight: 14,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon10: {
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
    top: "22.16%",
    right: "33.6%",
    bottom: "75.77%",
    left: "39.47%",
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
  },
  frameIcon: {
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  activityTime29day235959Parent: {
    top: 706,
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

export default Component16;