import * as React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import GroupComponent2 from "../components/GroupComponent2";
import Component72 from "../assets/";
import Vector120 from "../assets/vector1";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent from "../components/GroupComponent";
import Component8 from "../assets/";
import Component5 from "../components/Component5";
import GroupComponent1 from "../components/GroupComponent1";
import { Color } from "../GlobalStyles";

const Component3 = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={[styles.rectangleParent, styles.groupPosition]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupChildLayout1]}
          locations={[0, 1]}
          colors={["#373c42", "#2c3135"]}
          useAngle={true}
          angle={180}
        />
        <GroupComponent2 maskGroup={require("../assets/mask-group.png")} />
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-753.png")}
        />
        <View style={[styles.groupInner, styles.icon1Layout]} />
        <Text style={[styles.theRechargeOfContainer, styles.text2FlexBox]}>
          <Text style={styles.text}>🔥</Text>
          <Text style={styles.text}>The recharge of the</Text>
          <Text style={styles.text}>🔥</Text>
        </Text>
        <Text style={styles.theRecharge}>{`The recharge `}</Text>
        <Image
          style={styles.b4bde395738f0c8b07d1baa47c5d48Icon}
          resizeMode="cover"
          source={require("../assets/3b4bde395738f0c8b07d1baa47c5d48f172c19aa158772swckar-1.png")}
        />
        <Component72 style={styles.icon} width={16} height={16} />
        <Image
          style={[styles.icon1, styles.icon1Layout]}
          resizeMode="cover"
          source={require("../assets/.png")}
        />
        <Image
          style={[styles.icon2, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/23--1000.png")}
        />
        <Image
          style={[styles.icon3, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/49--1000.png")}
        />
        <Image
          style={[styles.icon4, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/91--1000.png")}
        />
        <Image
          style={[styles.icon4, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/baccarat-1.png")}
        />
        <Image
          style={[styles.jdbSlot092Icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/jdbslot092.png")}
        />
        <Image
          style={[styles.icon5, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/44--1000.png")}
        />
        <Image
          style={[styles.icon6, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/21--1000.png")}
        />
        <Image
          style={[styles.icon7, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/46--1000.png")}
        />
        <Image
          style={[styles.icon8, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/43--1000.png")}
        />
        <Image
          style={[styles.x1000Icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/102-x-1000.png")}
        />
        <Image
          style={[styles.icon9, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/47--1000.png")}
        />
        <Image
          style={[styles.icon10, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/27-777-1000.png")}
        />
        <Text
          style={[styles.fortuneOxFortune, styles.fortuneTypo]}
          numberOfLines={1}
        >
          Fortune Ox fortune
        </Text>
        <Text style={[styles.romaX, styles.romaXTypo]} numberOfLines={1}>
          Roma x
        </Text>
        <Text style={[styles.romaX1, styles.romaX1Typo]} numberOfLines={1}>
          Roma x
        </Text>
        <Text style={[styles.romaX2, styles.romaX2Typo]} numberOfLines={1}>
          Roma x
        </Text>
        <Text style={[styles.superAce, styles.fortuneTypo]} numberOfLines={1}>
          super Ace
        </Text>
        <Text style={[styles.diamondParty, styles.romaXTypo]} numberOfLines={1}>
          diamond party
        </Text>
        <Text
          style={[styles.diamondParty1, styles.romaX1Typo]}
          numberOfLines={1}
        >
          diamond party
        </Text>
        <Image
          style={[styles.icon6, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/baccarat-2.png")}
        />
        <Text
          style={[styles.diamondParty2, styles.romaX2Typo]}
          numberOfLines={1}
        >
          diamond party
        </Text>
        <Text
          style={[styles.moneyComing, styles.fortuneTypo]}
          numberOfLines={1}
        >
          Money Coming
        </Text>
        <Image
          style={[styles.x1000Icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/1baccarat-1.png")}
        />
        <Text style={[styles.luckyComing, styles.romaXTypo]} numberOfLines={1}>
          lucky coming
        </Text>
        <Text
          style={[styles.luckyComing1, styles.romaX1Typo]}
          numberOfLines={1}
        >
          lucky coming
        </Text>
        <Text
          style={[styles.luckyComing2, styles.romaX2Typo]}
          numberOfLines={1}
        >
          lucky coming
        </Text>
        <View style={[styles.rectangleGroup, styles.groupFrameLayout]}>
          <View style={[styles.rectangleView, styles.groupChildPosition2]} />
          <Image
            style={[styles.platform24Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/platform-24.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.iconLayout3]}>
          <View style={[styles.groupChild1, styles.iconLayout3]} />
          <Image
            style={[styles.logoWj931Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/logowj93-1.png")}
          />
        </View>
        <View style={[styles.rectangleWrapper, styles.groupFrameLayout]}>
          <View style={[styles.groupChild2, styles.groupChildPosition2]} />
        </View>
        <View style={[styles.rectangleFrame, styles.groupFrameLayout]}>
          <View style={[styles.groupChild3, styles.groupChildPosition1]} />
        </View>
        <View style={[styles.groupWrapper, styles.groupFrameLayout]}>
          <View style={[styles.groupView, styles.groupFrameLayout]}>
            <LinearGradient
              style={[
                styles.rectangleLineargradient,
                styles.groupChildPosition2,
              ]}
              locations={[0, 1]}
              colors={["#ffab3b", "#eb4136"]}
              useAngle={true}
              angle={105.88}
            />
            <Image
              style={styles.fastspinIcon}
              resizeMode="cover"
              source={require("../assets/fastspin.png")}
            />
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupFrameLayout]}>
          <View style={[styles.groupView, styles.groupFrameLayout]}>
            <LinearGradient
              style={[styles.groupChild4, styles.groupChildPosition2]}
              locations={[0, 1]}
              colors={["#ffab3b", "#eb4136"]}
              useAngle={true}
              angle={105.88}
            />
            <Image
              style={styles.fastspinIcon}
              resizeMode="cover"
              source={require("../assets/fastspin.png")}
            />
          </View>
        </View>
        <View style={[styles.groupFrame, styles.groupFrameLayout]}>
          <View style={[styles.groupView, styles.groupFrameLayout]}>
            <LinearGradient
              style={[styles.groupChild5, styles.groupChildPosition1]}
              locations={[0, 1]}
              colors={["#ffab3b", "#eb4136"]}
              useAngle={true}
              angle={105.88}
            />
            <Image
              style={styles.fastspinIcon}
              resizeMode="cover"
              source={require("../assets/fastspin.png")}
            />
          </View>
        </View>
        <View style={[styles.groupWrapper1, styles.groupFrameLayout]}>
          <View style={[styles.groupView, styles.groupFrameLayout]}>
            <View style={styles.groupChildPosition} />
            <Image
              style={[styles.logoAw1024x459Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/logo-aw1024x459.png")}
            />
          </View>
        </View>
        <View style={[styles.groupWrapper2, styles.groupFrameLayout]}>
          <View style={[styles.groupView, styles.groupFrameLayout]}>
            <View style={styles.groupChildPosition} />
            <Image
              style={[styles.logoAw1024x459Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/logo-aw1024x459.png")}
            />
          </View>
        </View>
        <View style={[styles.groupWrapper3, styles.groupFrameLayout]}>
          <View style={[styles.groupView, styles.groupFrameLayout]}>
            <View style={styles.groupChildPosition} />
            <Image
              style={[styles.logoAw1024x459Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/logo-aw1024x459.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent6, styles.groupFrameLayout]}>
          <LinearGradient
            style={[styles.groupChild9, styles.groupChildPosition2]}
            locations={[0, 1]}
            colors={["#ffd200", "#ff2e39"]}
            useAngle={true}
            angle={105.66}
          />
          <Image
            style={[styles.jdbWhiteIcon, styles.whiteIconPosition]}
            resizeMode="cover"
            source={require("../assets/jdbwhite.png")}
          />
        </View>
        <View style={[styles.rectangleParent7, styles.groupFrameLayout]}>
          <LinearGradient
            style={[styles.groupChild10, styles.groupChildPosition2]}
            locations={[0, 1]}
            colors={["#ffd200", "#ff2e39"]}
            useAngle={true}
            angle={105.66}
          />
          <Image
            style={[styles.jdbWhiteIcon, styles.whiteIconPosition]}
            resizeMode="cover"
            source={require("../assets/jdbwhite.png")}
          />
        </View>
        <View style={[styles.rectangleParent8, styles.groupFrameLayout]}>
          <LinearGradient
            style={[styles.groupChild11, styles.groupChildPosition2]}
            locations={[0, 1]}
            colors={["#00cdff", "#6313e7"]}
            useAngle={true}
            angle={105.88}
          />
          <Image
            style={[styles.pgWhiteIcon, styles.whiteIconPosition]}
            resizeMode="cover"
            source={require("../assets/pgwhite.png")}
          />
        </View>
        <View style={[styles.rectangleParent9, styles.rectangleParentPosition]}>
          <LinearGradient
            style={[styles.groupChild12, styles.groupChildPosition2]}
            locations={[0, 1]}
            colors={["#00cdff", "#6313e7"]}
            useAngle={true}
            angle={105.88}
          />
          <Image
            style={[styles.pgWhiteIcon, styles.whiteIconPosition]}
            resizeMode="cover"
            source={require("../assets/pgwhite.png")}
          />
        </View>
        <View
          style={[styles.rectangleParent10, styles.rectangleParentPosition]}
        >
          <LinearGradient
            style={[styles.groupChild13, styles.groupChildPosition2]}
            locations={[0, 1]}
            colors={["#00cdff", "#6313e7"]}
            useAngle={true}
            angle={105.88}
          />
          <Image
            style={[styles.pgWhiteIcon, styles.whiteIconPosition]}
            resizeMode="cover"
            source={require("../assets/pgwhite.png")}
          />
        </View>
        <View
          style={[styles.rectangleParent11, styles.rectangleParentPosition]}
        >
          <LinearGradient
            style={[styles.groupChild14, styles.groupChildPosition2]}
            locations={[0, 1]}
            colors={["#00cdff", "#6313e7"]}
            useAngle={true}
            angle={105.88}
          />
          <Image
            style={[styles.pgWhiteIcon, styles.whiteIconPosition]}
            resizeMode="cover"
            source={require("../assets/pgwhite.png")}
          />
        </View>
        <LinearGradient
          style={[styles.groupChild15, styles.groupChildLayout1]}
          locations={[0, 1]}
          colors={["#373c42", "#2c3135"]}
          useAngle={true}
          angle={180}
        />
        <LinearGradient
          style={[styles.groupChild16, styles.groupChildLayout1]}
          locations={[0, 1]}
          colors={["#373c42", "#2c3135"]}
          useAngle={true}
          angle={180}
        />
        <LinearGradient
          style={[styles.groupChild17, styles.groupChildLayout1]}
          locations={[0, 1]}
          colors={["#373c42", "#2c3135"]}
          useAngle={true}
          angle={180}
        />
        <LinearGradient
          style={[styles.groupChild18, styles.groupChildLayout1]}
          locations={[0, 1]}
          colors={["#373c42", "#2c3135"]}
          useAngle={true}
          angle={180}
        />
        <LinearGradient
          style={[styles.groupChild19, styles.groupChildLayout1]}
          locations={[0, 1]}
          colors={["#373c42", "#2c3135"]}
          useAngle={true}
          angle={180}
        />
        <LinearGradient
          style={[styles.groupChild20, styles.groupChildLayout1]}
          locations={[0, 1]}
          colors={["#373c42", "#2c3135"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.slot, styles.slotTypo]}>Slot</Text>
        <Text style={[styles.table, styles.slotTypo]}>Table</Text>
        <Text style={[styles.fish, styles.slotTypo]}>Fish</Text>
        <Text style={[styles.egame, styles.slotTypo]}>Egame</Text>
        <Text style={[styles.sport, styles.slotTypo]}>Sport</Text>
        <Text style={[styles.live, styles.slotTypo]}>Live</Text>
        <Image
          style={[styles.icon11, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/1.png")}
        />
        <Image
          style={[styles.icon12, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/7.png")}
        />
        <Image
          style={[styles.icon13, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/3.png")}
        />
        <Image
          style={[styles.icon14, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/2.png")}
        />
        <Image
          style={[styles.icon15, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/6.png")}
        />
        <Image
          style={[styles.icon16, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/10-733643587.png")}
        />
        <Text style={[styles.bingo, styles.slotTypo]}>Bingo</Text>
        <Image
          style={[styles.icon17, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/5.png")}
        />
        <View style={[styles.rectangleWrapper1, styles.logoWj931Icon1Position]}>
          <LinearGradient
            style={[styles.groupChild21, styles.groupChildLayout]}
            locations={[0, 1]}
            colors={["#ffc71e", "#ff9f00"]}
            useAngle={true}
            angle={180}
          />
        </View>
        <LinearGradient
          style={[styles.groupChild22, styles.groupChildLayout]}
          locations={[0, 1]}
          colors={["#76cd00", "#478a03"]}
          useAngle={true}
          angle={180}
        />
        <Vector120 style={[styles.vectorIcon, styles.iconLayout1]} />
        <Text style={[styles.withdrawal, styles.depositTypo]}>Withdrawal</Text>
        <Image
          style={[styles.logoWj931Icon1, styles.logoWj931Icon1Position]}
          resizeMode="cover"
          source={require("../assets/logowj93-11.png")}
        />
        <Text style={[styles.deposit, styles.depositTypo]}>Deposit</Text>
        <Image
          style={styles.icon18}
          resizeMode="cover"
          source={require("../assets/21.png")}
        />
        <Text style={[styles.text2, styles.text2FlexBox]}>14,091,688.88</Text>
        <GroupComponent3
          rectangleLinearGradientTransform="[object Object]"
          rectangleLinearGradientTransform1="[object Object]"
        />
        <GroupComponent prop={<Component8 width={100} height={81} />} />
      </View>
      <View style={[styles.rectangleParent, styles.groupPosition]} />
      <Component5
        groupViewTop={426}
        groupViewLeft={248}
        prop={require("../assets/2333-11.png")}
        moneyRain={require("../assets/1moneyrain1.png")}
        prop1={require("../assets/16.png")}
        start="In Progress"
        startLeft="13.22%"
        showGroupView={false}
        prop2="1"
        showVectorIcon={false}
        next2100="Next 21:00"
        showNext2100={false}
        showIcon={false}
      />
      <Component5
        groupViewTop={748}
        groupViewLeft={248}
        prop={require("../assets/2333-12.png")}
        moneyRain={require("../assets/1moneyrain2.png")}
        prop1={require("../assets/161.png")}
        start="Details"
        startLeft="28.1%"
        showGroupView={false}
        prop2="1"
        showVectorIcon={false}
        next2100="Next 21:00"
        showNext2100={false}
        showIcon={false}
      />
      <Component5
        groupViewTop={465}
        groupViewLeft={122}
        prop={require("../assets/2333-13.png")}
        moneyRain={require("../assets/1moneyrain3.png")}
        prop1={require("../assets/16.png")}
        start="Receive"
        startLeft="24.79%"
        showGroupView
        prop2="6"
        showVectorIcon
        next2100="20Day 23:12"
        showNext2100
        showIcon
      />
      <Component5
        groupViewTop={587}
        groupViewLeft={63}
        prop={require("../assets/2333-14.png")}
        moneyRain={require("../assets/1moneyrain4.png")}
        prop1={require("../assets/161.png")}
        start="Details"
        startLeft="28.1%"
        showGroupView={false}
        prop2="1"
        showVectorIcon={false}
        next2100="Next 21:00"
        showNext2100={false}
        showIcon={false}
      />
      <Image
        style={styles.icon19}
        resizeMode="cover"
        source={require("../assets/4-10.png")}
      />
      <Component5
        groupViewTop={710}
        groupViewLeft={122}
        prop={require("../assets/2333-1.png")}
        moneyRain={require("../assets/1moneyrain.png")}
        prop1={require("../assets/16.png")}
        start="Receive"
        startLeft="24.79%"
        showGroupView
        prop2="2"
        showVectorIcon={false}
        next2100="Next 21:00"
        showNext2100={false}
        showIcon={false}
      />
      <GroupComponent1 />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
  },
  groupChildLayout1: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 64,
    width: 66,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    left: 66,
    backgroundColor: "transparent",
    position: "absolute",
  },
  icon1Layout: {
    width: 345,
    position: "absolute",
  },
  text2FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconLayout3: {
    height: 88,
    width: 88,
    position: "absolute",
  },
  fortuneTypo: {
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    color: Color.wz1,
    fontFamily: "NotoSans-Bold",
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: 13,
    top: 520,
    width: 88,
    overflow: "hidden",
    fontWeight: "700",
    position: "absolute",
  },
  romaXTypo: {
    top: 648,
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    color: Color.wz1,
    fontFamily: "NotoSans-Bold",
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: 13,
    width: 88,
    overflow: "hidden",
    fontWeight: "700",
    position: "absolute",
  },
  romaX1Typo: {
    top: 776,
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    color: Color.wz1,
    fontFamily: "NotoSans-Bold",
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: 13,
    width: 88,
    overflow: "hidden",
    fontWeight: "700",
    position: "absolute",
  },
  romaX2Typo: {
    top: 904,
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    color: Color.wz1,
    fontFamily: "NotoSans-Bold",
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: 13,
    width: 88,
    overflow: "hidden",
    fontWeight: "700",
    position: "absolute",
  },
  groupFrameLayout: {
    height: 18,
    width: 34,
    position: "absolute",
  },
  groupChildPosition2: {
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 18,
    width: 34,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout2: {
    height: 11,
    top: 4,
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupChildPosition1: {
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 6,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    height: 18,
    width: 34,
    left: 0,
    top: 0,
    position: "absolute",
  },
  whiteIconPosition: {
    left: 6,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 934,
    height: 18,
    width: 34,
    position: "absolute",
  },
  slotTypo: {
    lineHeight: 12,
    fontSize: 12,
    color: Color.wz1,
    fontWeight: "700",
    fontFamily: "Arial",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 36,
    width: 36,
    left: 15,
    position: "absolute",
  },
  logoWj931Icon1Position: {
    left: "4%",
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: 2,
    backgroundColor: "transparent",
    position: "absolute",
  },
  depositTypo: {
    color: Color.color1,
    top: "12.53%",
    fontWeight: "700",
    fontFamily: "Arial",
    textAlign: "left",
    lineHeight: 14,
    fontSize: 14,
    position: "absolute",
  },
  groupChild: {
    top: 554,
    backgroundColor: "transparent",
  },
  groupItem: {
    top: 9,
    left: 12,
    width: 50,
    height: 50,
    position: "absolute",
  },
  groupInner: {
    top: 300,
    borderRadius: 26,
    backgroundColor: Color.bg,
    height: 34,
    left: 15,
    width: 345,
  },
  text: {
    fontFamily: "Arial",
  },
  theRechargeOfContainer: {
    left: 53,
    color: Color.color,
    lineHeight: 14,
    fontSize: 14,
    top: 310,
    textAlign: "left",
  },
  theRecharge: {
    left: 264,
    fontWeight: "700",
    fontFamily: "Arial",
    textAlign: "left",
    color: Color.color,
    lineHeight: 14,
    fontSize: 14,
    top: 310,
    position: "absolute",
  },
  b4bde395738f0c8b07d1baa47c5d48Icon: {
    top: 307,
    height: 19,
    width: 24,
    left: 21,
    position: "absolute",
  },
  icon: {
    top: 309,
    left: 243,
    overflow: "hidden",
    position: "absolute",
  },
  icon1: {
    marginLeft: -172.5,
    top: 153,
    left: "50%",
    borderRadius: 8,
    height: 130,
  },
  icon2: {
    borderRadius: 4,
    left: 77,
    top: 422,
  },
  icon3: {
    left: 174,
    borderRadius: 4,
    top: 422,
  },
  icon4: {
    left: 271,
    top: 550,
    borderRadius: 4,
  },
  jdbSlot092Icon: {
    top: 806,
    left: 271,
    borderRadius: 4,
  },
  icon5: {
    top: 678,
    left: 271,
    borderRadius: 4,
  },
  icon6: {
    top: 550,
    left: 174,
    borderRadius: 4,
  },
  icon7: {
    top: 806,
    left: 174,
    borderRadius: 4,
  },
  icon8: {
    top: 678,
    left: 174,
    borderRadius: 4,
  },
  x1000Icon: {
    top: 550,
    borderRadius: 4,
    left: 77,
  },
  icon9: {
    top: 806,
    borderRadius: 4,
    left: 77,
  },
  icon10: {
    top: 678,
    borderRadius: 4,
    left: 77,
  },
  fortuneOxFortune: {
    left: 77,
  },
  romaX: {
    left: 77,
  },
  romaX1: {
    left: 77,
  },
  romaX2: {
    left: 77,
  },
  superAce: {
    left: 174,
  },
  diamondParty: {
    left: 174,
  },
  diamondParty1: {
    left: 174,
  },
  diamondParty2: {
    left: 174,
  },
  moneyComing: {
    left: 271,
  },
  luckyComing: {
    left: 271,
  },
  luckyComing1: {
    left: 271,
  },
  luckyComing2: {
    left: 271,
  },
  rectangleView: {
    backgroundColor: "#ffd600",
  },
  platform24Icon: {
    left: 5,
    height: 11,
    top: 4,
    position: "absolute",
    width: 24,
  },
  rectangleGroup: {
    left: 77,
    top: 422,
  },
  groupChild1: {
    backgroundColor: "#30353a",
    borderRadius: 4,
    left: 0,
    top: 0,
  },
  logoWj931Icon: {
    height: "23.18%",
    width: "63.64%",
    top: "38.64%",
    right: "18.18%",
    bottom: "38.18%",
    left: "18.18%",
    borderRadius: 4,
    position: "absolute",
  },
  rectangleContainer: {
    left: 271,
    top: 422,
  },
  groupChild2: {
    backgroundColor: "#41474e",
  },
  rectangleWrapper: {
    left: 174,
    top: 422,
  },
  groupChild3: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    backgroundColor: "#41474e",
  },
  rectangleFrame: {
    left: 271,
    top: 422,
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
  },
  fastspinIcon: {
    top: 6,
    left: 1,
    width: 30,
    height: 7,
    position: "absolute",
  },
  groupView: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 550,
    left: 174,
  },
  groupChild4: {
    backgroundColor: "transparent",
  },
  groupContainer: {
    top: 550,
    left: 77,
  },
  groupChild5: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderTopLeftRadius: 4,
    backgroundColor: "transparent",
  },
  groupFrame: {
    left: 271,
    top: 550,
  },
  groupChildPosition: {
    backgroundColor: "#ffcc00",
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 18,
    width: 34,
    left: 0,
    top: 0,
    position: "absolute",
  },
  logoAw1024x459Icon: {
    width: 26,
    left: 5,
    height: 11,
    top: 4,
    position: "absolute",
  },
  groupWrapper1: {
    top: 678,
    left: 77,
  },
  groupWrapper2: {
    top: 678,
    left: 174,
  },
  groupWrapper3: {
    top: 678,
    left: 271,
  },
  groupChild9: {
    backgroundColor: "transparent",
  },
  jdbWhiteIcon: {
    width: 20,
    height: 11,
    top: 4,
    left: 6,
  },
  rectangleParent6: {
    top: 806,
    left: 77,
  },
  groupChild10: {
    backgroundColor: "transparent",
  },
  rectangleParent7: {
    top: 806,
    left: 174,
  },
  groupChild11: {
    backgroundColor: "transparent",
  },
  pgWhiteIcon: {
    top: 2,
    width: 22,
    height: 14,
  },
  rectangleParent8: {
    top: 806,
    left: 271,
  },
  groupChild12: {
    backgroundColor: "transparent",
  },
  rectangleParent9: {
    left: 271,
  },
  groupChild13: {
    backgroundColor: "transparent",
  },
  rectangleParent10: {
    left: 174,
  },
  groupChild14: {
    backgroundColor: "transparent",
  },
  rectangleParent11: {
    left: 77,
  },
  groupChild15: {
    top: 758,
    backgroundColor: "transparent",
  },
  groupChild16: {
    top: 622,
    backgroundColor: "transparent",
  },
  groupChild17: {
    top: 826,
    backgroundColor: "transparent",
  },
  groupChild18: {
    top: 894,
    backgroundColor: "transparent",
  },
  groupChild19: {
    top: 486,
    backgroundColor: "transparent",
  },
  groupChild20: {
    top: 690,
    backgroundColor: "transparent",
  },
  slot: {
    top: 534,
    left: 22,
  },
  table: {
    top: 738,
    left: 18,
  },
  fish: {
    top: 806,
    left: 21,
  },
  egame: {
    top: 873,
    left: 13,
  },
  sport: {
    top: 942,
    left: 17,
  },
  live: {
    top: 602,
    left: 21,
  },
  icon11: {
    top: 562,
  },
  icon12: {
    top: 766,
  },
  icon13: {
    top: 833,
  },
  icon14: {
    top: 698,
  },
  icon15: {
    top: 902,
  },
  icon16: {
    top: 495,
  },
  bingo: {
    top: 670,
    left: 16,
  },
  icon17: {
    top: 630,
  },
  groupChild21: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    borderRadius: 2,
  },
  rectangleWrapper1: {
    right: "50.67%",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    bottom: "84.86%",
    top: "11.38%",
    width: "45.33%",
    height: "3.76%",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    left: "4%",
  },
  groupChild22: {
    right: "4%",
    left: "50.67%",
    bottom: "84.86%",
    top: "11.38%",
    width: "45.33%",
    height: "3.76%",
  },
  vectorIcon: {
    height: "1.24%",
    width: "4.27%",
    top: "12.63%",
    right: "32.27%",
    bottom: "86.13%",
    left: "63.47%",
    position: "absolute",
  },
  withdrawal: {
    left: "19.73%",
  },
  logoWj931Icon1: {
    height: "2.96%",
    width: "20.8%",
    top: "7.93%",
    right: "75.2%",
    bottom: "89.1%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  deposit: {
    left: "69.33%",
  },
  icon18: {
    top: 350,
    left: 76,
    width: 282,
    height: 58,
    position: "absolute",
  },
  text2: {
    top: 379,
    left: 145,
    fontSize: 24,
    letterSpacing: 2,
    lineHeight: 18,
    fontWeight: "900",
    fontFamily: "Arial",
  },
  rectangleParent: {
    width: 375,
    height: 958,
    position: "absolute",
  },
  icon19: {
    left: 245,
    width: 130,
    height: 150,
    top: 562,
    position: "absolute",
  },
  scrollview: {
    backgroundColor: "#1e2024",
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default Component3;