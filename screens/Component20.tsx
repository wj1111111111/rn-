import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Group118423 from "../assets/group11842";
import Frame13 from "../assets/frame1";
import Rectangle2656 from "../assets/rectangle265";
import Rectangle2666 from "../assets/rectangle266";
import Frame14 from "../assets/frame1";
import Rectangle2657 from "../assets/rectangle265";
import Rectangle2667 from "../assets/rectangle266";
import { Color } from "../GlobalStyles";

const Component20 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <ScrollView style={styles.scrollview}>
        <View style={[styles.parent, styles.iconLayout]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/-2-11.png")}
          />
          <Image
            style={[styles.icon1, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/-1-11.png")}
          />
        </View>
        <Image
          style={[styles.image2Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Image
          style={styles.logoWj932Icon}
          resizeMode="cover"
          source={require("../assets/logowj93-2.png")}
        />
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={[styles.qualifiedBonusParent, styles.parentBorder]}>
            <Text style={[styles.qualifiedBonus, styles.makeAMillionTypo]}>
              Qualified Bonus
            </Text>
            <Text style={styles.textTypo}>+₱168</Text>
          </View>
          <View style={[styles.qualifiedBonusParent, styles.parentBorder]}>
            <Text style={[styles.qualifiedBonus, styles.makeAMillionTypo]}>
              Achievement Reward
            </Text>
            <Text style={styles.textTypo}>+₱88888</Text>
          </View>
          <View style={[styles.depositRebateParent, styles.parentBorder]}>
            <Text style={[styles.depositRebate, styles.makeAMillionTypo]}>
              Deposit Rebate
            </Text>
            <Text style={styles.textTypo}>{`+5% `}</Text>
          </View>
          <View style={[styles.depositRebateParent, styles.parentBorder]}>
            <Text style={[styles.depositRebate, styles.makeAMillionTypo]}>
              Betting Rebate
            </Text>
            <Text style={styles.textTypo}>{`+2.03% `}</Text>
          </View>
          <View style={[styles.depositRebateParent, styles.parentBorder]}>
            <Text style={[styles.depositRebate, styles.makeAMillionTypo]}>
              Agent Ranking
            </Text>
            <Text style={styles.textTypo}>+₱888</Text>
          </View>
        </View>
        <View style={[styles.groupParent, styles.parentFlexBox]}>
          <View style={styles.groupContainer}>
            <Group118423
              style={[styles.groupChild, styles.groupPosition]}
              width={215}
              height={29}
            />
            <Text style={[styles.jbet88com, styles.jbet88phTypo]}>
              jbet88.com
            </Text>
          </View>
          <View style={styles.groupContainer}>
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Frame13 style={styles.frameIcon} width={17} height={18} />
            <Rectangle2656
              style={[styles.groupInner, styles.groupPosition1]}
              width={191}
              height={29}
            />
            <Rectangle2666
              style={[styles.rectangleIcon, styles.groupPosition1]}
              width={176}
              height={29}
            />
            <Text style={[styles.jbet88ph, styles.jbet88phTypo]}>
              JBET88.ph
            </Text>
          </View>
          <View style={styles.groupContainer}>
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Frame14 style={styles.frameIcon} width={17} height={18} />
            <Rectangle2657
              style={[styles.groupInner, styles.groupPosition1]}
              width={191}
              height={29}
            />
            <Rectangle2667
              style={[styles.rectangleIcon, styles.groupPosition1]}
              width={176}
              height={29}
            />
            <Text style={[styles.jbet88ph, styles.jbet88phTypo]}>
              JBET88.cc
            </Text>
          </View>
        </View>
        <Text
          style={[styles.makeAMillion, styles.makeAMillionTypo]}
        >{`Make a Million Every Month
 Invite Friends Now`}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 837,
    top: 0,
  },
  iconPosition: {
    left: 26,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  parentBorder: {
    gap: 7,
    padding: 8,
    height: 53,
    borderWidth: 0.8,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderStyle: "solid",
    backgroundColor: "rgba(217, 217, 217, 0.1)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  makeAMillionTypo: {
    textAlign: "center",
    fontFamily: "Arial",
  },
  jbet88phTypo: {
    height: 12,
    width: 121,
    display: "flex",
    textTransform: "lowercase",
    lineHeight: 8,
    left: 58,
    top: 9,
    textAlign: "center",
    fontFamily: "Arial",
    fontWeight: "700",
    fontSize: 13,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  groupPosition1: {
    top: 0,
    height: 29,
  },
  icon: {
    height: 837,
    top: 0,
    width: 387,
  },
  icon1: {
    top: 217,
    height: 518,
    width: 436,
  },
  parent: {
    left: -26,
    width: 436,
    position: "absolute",
  },
  image2Icon: {
    top: 732,
    borderTopLeftRadius: 41,
    borderBottomRightRadius: 41,
    width: 336,
    height: 45,
    display: "none",
  },
  logoWj932Icon: {
    height: "5.98%",
    marginLeft: -70.45,
    top: "6.63%",
    bottom: "87.39%",
    maxHeight: "100%",
    width: 140,
    left: "50%",
    position: "absolute",
  },
  qualifiedBonus: {
    color: "#ffd900",
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 10,
    textAlign: "center",
    fontFamily: "Arial",
    fontSize: 13,
  },
  textTypo: {
    textShadowRadius: 0,
    textShadowOffset: {
      width: 0,
      height: 1.6221894025802612,
    },
    textShadowColor: "#00294d",
    textAlign: "right",
    color: "#8fff00",
    lineHeight: 15,
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "700",
  },
  qualifiedBonusParent: {
    width: 142,
  },
  depositRebate: {
    fontSize: 11,
    color: "#ffd900",
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 10,
    textAlign: "center",
    fontFamily: "Arial",
  },
  depositRebateParent: {
    width: 93,
  },
  frameParent: {
    marginLeft: -155.15,
    top: 185,
    width: 301,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    rowGap: 18,
    columnGap: 7,
  },
  groupChild: {
    top: 0,
  },
  jbet88com: {
    color: "#c0cede",
  },
  groupContainer: {
    height: 29,
    width: 215,
  },
  groupItem: {
    borderTopLeftRadius: 26,
    borderBottomRightRadius: 26,
    backgroundColor: Color.color3,
    height: 29,
    width: 215,
    top: 0,
  },
  frameIcon: {
    top: 6,
    left: 9,
    position: "absolute",
    overflow: "hidden",
  },
  groupInner: {
    left: 21,
    position: "absolute",
  },
  rectangleIcon: {
    left: 30,
    position: "absolute",
  },
  jbet88ph: {
    color: "#c0cdde",
  },
  groupParent: {
    marginLeft: -107.45,
    top: 574,
    gap: 8,
    width: 215,
  },
  makeAMillion: {
    marginLeft: -145.45,
    top: 130,
    fontSize: 19,
    lineHeight: 22,
    fontWeight: "900",
    textAlign: "center",
    fontFamily: "Arial",
    left: "50%",
    position: "absolute",
  },
  scrollview: {
    top: -38,
    left: -2,
    backgroundColor: Color.bg3,
    maxWidth: 387,
    width: 387,
    position: "absolute",
    flex: 1,
  },
  safeareaview: {
    backgroundColor: Color.color,
    width: "100%",
    height: 667,
    overflow: "hidden",
    flex: 1,
  },
});

export default Component20;
