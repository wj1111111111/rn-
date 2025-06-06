import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FrameComponent1 from "../components/FrameComponent1";
import { Color, FontFamily } from "../GlobalStyles";

const Component201 = () => {
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
            style={[styles.icon1, styles.icon1Layout]}
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
          style={[styles.logoWj932Icon, styles.makeAMillionPosition]}
          resizeMode="cover"
          source={require("../assets/logowj93-2.png")}
        />
        <View style={styles.frameParent}>
          <View style={[styles.qualifiedBonusParent, styles.parentBorder]}>
            <Text style={[styles.qualifiedBonus, styles.depositRebateTypo]}>
              Qualified Bonus
            </Text>
            <Text style={styles.textTypo}>+₱168</Text>
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
        <FrameComponent1 />
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
  icon1Layout: {
    width: 436,
    position: "absolute",
  },
  makeAMillionPosition: {
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
  icon: {
    height: 837,
    top: 0,
    width: 387,
  },
  icon1: {
    top: 217,
    left: 0,
    height: 518,
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
    fontSize: 13,
    textAlign: "center",
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
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
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

export default Component201;