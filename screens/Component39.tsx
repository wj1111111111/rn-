import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Group118422 from "../assets/group11842";
import Frame3 from "../assets/frame";
import Rectangle2654 from "../assets/rectangle265";
import Rectangle2664 from "../assets/rectangle266";
import Frame4 from "../assets/frame";
import Rectangle2655 from "../assets/rectangle265";
import Rectangle2665 from "../assets/rectangle266";
import { Color, FontFamily } from "../GlobalStyles";

const Component40 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <ScrollView style={styles.scrollview}>
        <View style={[styles.parent, styles.iconLayout]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/-2-1.png")}
          />
          <Image
            style={[styles.icon1, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/-1-1.png")}
          />
        </View>
        <Image
          style={[styles.image2Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Image
          style={[styles.logoWj932Icon, styles.makeAMillionPosition]}
          resizeMode="cover"
          source={require("../assets/logowj93-2.png")}
        />
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={[styles.qualifiedBonusParent, styles.parentBorder]}>
            <Text style={[styles.qualifiedBonus, styles.depositRebateTypo]}>
              Qualified Bonus
            </Text>
            <Text style={styles.textTypo}>+₱108</Text>
          </View>
          <View style={[styles.qualifiedBonusParent, styles.parentBorder]}>
            <Text style={[styles.qualifiedBonus, styles.depositRebateTypo]}>
              Achievement Reward
            </Text>
            <Text style={styles.textTypo}>+₱88888</Text>
          </View>
          <View style={[styles.depositRebateParent, styles.parentBorder]}>
            <Text style={[styles.depositRebate, styles.depositRebateTypo]}>
              Deposit Rebate
            </Text>
            <Text style={styles.textTypo}>{`+5% `}</Text>
          </View>
          <View style={[styles.depositRebateParent, styles.parentBorder]}>
            <Text style={[styles.depositRebate, styles.depositRebateTypo]}>
              Betting Rebate
            </Text>
            <Text style={styles.textTypo}>{`+2.03% `}</Text>
          </View>
          <View style={[styles.depositRebateParent, styles.parentBorder]}>
            <Text style={[styles.depositRebate, styles.depositRebateTypo]}>
              Agent Ranking
            </Text>
            <Text style={styles.textTypo}>+₱888</Text>
          </View>
        </View>
        <View style={[styles.groupParent, styles.parentFlexBox]}>
          <View style={styles.groupContainer}>
            <Group118422
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
            <Frame3 style={styles.frameIcon} width={17} height={18} />
            <Rectangle2654
              style={[styles.groupInner, styles.groupPosition1]}
              width={191}
              height={29}
            />
            <Rectangle2664
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
            <Frame4 style={styles.frameIcon} width={17} height={18} />
            <Rectangle2655
              style={[styles.groupInner, styles.groupPosition1]}
              width={191}
              height={29}
            />
            <Rectangle2665
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
          style={[styles.makeAMillion, styles.makeAMillionPosition]}
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
  makeAMillionPosition: {
    left: "50%",
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
    borderColor: Color.colorGray900,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro200,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  depositRebateTypo: {
    color: Color.colorGold100,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 10,
    textAlign: "center",
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
    fontFamily: FontFamily.microsoftYaHeiBold,
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
  },
  qualifiedBonus: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 10,
  },
  textTypo: {
    textShadowRadius: 0,
    textShadowOffset: {
      width: 0,
      height: 1.6221894025802612,
    },
    textShadowColor: "#00294d",
    textAlign: "right",
    color: Color.colorChartreuse,
    lineHeight: 15,
    fontSize: 20,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  qualifiedBonusParent: {
    width: 142,
  },
  depositRebate: {
    fontSize: 11,
    textAlign: "center",
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
    color: Color.colorLightsteelblue100,
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
    color: Color.colorLightsteelblue200,
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
    fontFamily: FontFamily.microsoftYaHei,
    textAlign: "center",
  },
  scrollview: {
    top: -38,
    left: -2,
    backgroundColor: Color.bg,
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

export default Component40;