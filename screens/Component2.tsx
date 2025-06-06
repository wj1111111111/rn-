import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Group736131 from "../assets/group7361";
import Component302 from "../assets/";
import Stroke17 from "../assets/stroke";
import Group736132 from "../assets/group7361";
import Component303 from "../assets/";
import Union7 from "../assets/union";
import Group127806 from "../assets/group12780";
import Group1278013 from "../assets/group127801";
import Group1278023 from "../assets/group127802";
import Group127864 from "../assets/group12786";
import { Color } from "../GlobalStyles";

const Component2 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <View style={styles.r198000Parent}>
            <Text style={[styles.r198000, styles.textTypo1]}>R$1980.00</Text>
            <Group736131 style={[styles.groupItem, styles.groupItemLayout]} />
            <Component302 style={[styles.icon, styles.iconPosition]} />
          </View>
        </View>
        <Stroke17 style={[styles.strokeIcon, styles.groupItemLayout]} />
        <Text style={[styles.pgSlots, styles.pgSlotsTypo]}>Notifications</Text>
      </View>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/-11.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo1]}>₱1980.00</Text>
        <Group736132 style={[styles.instanceChild, styles.groupItemLayout]} />
        <Component303 style={[styles.icon2, styles.iconPosition]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={[styles.rectangleView, styles.groupChild3Layout]} />
        <Text style={styles.myMoneyIsContainer}>
          My money is missing my money is missing 
          <Text style={styles.myMoneyIs}>
            my money is missing my money is missing .my money is missing my
            money is missing.My money is missing my money is missing 
          </Text>
        </Text>
        <Text
          style={[styles.dearTeamsWe, styles.rTypo]}
        >{`Dear Teams, we have received your question!
We have not found any abnormalities in the game.
You can try to check whether the network is normal.
Good luck!`}</Text>
        <View style={styles.groupChildLayout} />
        <View style={[styles.unionParent, styles.unionLayout]}>
          <Union7 style={styles.unionLayout} width={97} height={18} />
          <Text style={[styles.r, styles.rTypo]}>New reply</Text>
        </View>
        <Image
          style={styles.component7Icon}
          resizeMode="cover"
          source={require("../assets/component-71.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>
          2024-01-27 01:00:00
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>2024-04-15 16:59:59</Text>
        <Text style={[styles.automaticallyDeleteWithin, styles.text1Typo]}>
          Automatically delete within 30 days
        </Text>
        <Text style={[styles.withdrawalIssues, styles.pgSlotsTypo]}>
          Withdrawal issues
        </Text>
        <Group127806 style={styles.groupIcon} width={24} height={24} />
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <Text
          style={styles.myMoneyIsContainer}
        >{`Failed to enter the gameFailed to enter the game
Failed to enter the gameFailed to enter the game
Failed to enter the gameFailed to enter the gameFailed to enter the game`}</Text>
        <Text
          style={[styles.dearTeamsWe, styles.rTypo]}
        >{`Dear Teams, we have received your question!
We have not found any abnormalities in the game.
You can try to check whether the network is normal.
Good luck!`}</Text>
        <View style={styles.groupChildLayout} />
        <Image
          style={styles.component7Icon}
          resizeMode="cover"
          source={require("../assets/component-71.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>
          2024-01-27 01:00:00
        </Text>
        <Text style={[styles.text4, styles.textTypo]}>2024-04-15 16:59:59</Text>
        <Text style={[styles.automaticallyDeleteWithin, styles.text1Typo]}>
          Automatically delete within 30 days
        </Text>
        <Text style={[styles.withdrawalIssues, styles.pgSlotsTypo]}>
          Game issues
        </Text>
        <Group1278013 style={styles.groupIcon} width={24} height={24} />
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild6, styles.groupChildPosition]} />
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <Text
          style={styles.myMoneyIsContainer}
        >{`Failed to enter the gameFailed to enter the game
Failed to enter the gameFailed to enter the game
Failed to enter the gameFailed to enter the gameFailed to enter the game`}</Text>
        <Text
          style={[styles.dearTeamsWe, styles.rTypo]}
        >{`Dear Teams, we have received your question!
We have not found any abnormalities in the game.
You can try to check whether the network is normal.
Good luck!`}</Text>
        <View style={styles.groupChildLayout} />
        <Image
          style={styles.component7Icon}
          resizeMode="cover"
          source={require("../assets/component-71.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>
          2024-01-27 01:00:00
        </Text>
        <Text style={[styles.text4, styles.textTypo]}>2024-04-15 16:59:59</Text>
        <Text style={[styles.automaticallyDeleteWithin, styles.text1Typo]}>
          Automatically delete within 30 days
        </Text>
        <Text style={[styles.withdrawalIssues, styles.pgSlotsTypo]}>
          Game issues
        </Text>
        <Group1278023 style={styles.groupIcon} width={24} height={24} />
      </View>
      <Group127864 style={styles.child} width={40} height={40} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    fontFamily: "Arial",
    lineHeight: 18,
    fontSize: 16,
    fontWeight: "700",
    top: "0%",
    position: "absolute",
  },
  groupItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "7.78%",
    top: "11.11%",
    height: "81.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  pgSlotsTypo: {
    color: Color.color,
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: "Arial",
    fontSize: 16,
    position: "absolute",
  },
  groupLayout: {
    height: 288,
    width: 345,
    left: 15,
    position: "absolute",
  },
  groupInnerPosition: {
    borderRadius: 8,
    width: 345,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild3Layout: {
    height: 136,
    backgroundColor: Color.bg3,
  },
  rTypo: {
    left: "50%",
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Arial",
    lineHeight: 18,
    position: "absolute",
  },
  unionLayout: {},
  text1Typo: {
    color: Color.wz2,
    lineHeight: 12,
    fontSize: 12,
    top: 12,
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  textTypo: {
    top: 154,
    color: Color.wz2,
    lineHeight: 12,
    fontSize: 12,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  groupChildPosition: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: 345,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Color.bg1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
    color: "#ffb900",
    textAlign: "left",
  },
  groupItem: {
    width: "12.24%",
    right: "87.76%",
    bottom: "5.56%",
    top: "5.56%",
    height: "88.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
  },
  icon: {
    width: "12.94%",
    left: "87.06%",
  },
  r198000Parent: {
    height: "20.93%",
    width: "34%",
    top: "54.65%",
    bottom: "24.42%",
    left: "60.53%",
    display: "none",
    right: "5.47%",
    position: "absolute",
  },
  rectangleParent: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
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
    fontWeight: "700",
    color: Color.color,
  },
  groupParent: {
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
  text: {
    left: "18.72%",
    color: Color.wz,
    textAlign: "right",
  },
  instanceChild: {
    width: "13.28%",
    right: "86.72%",
    bottom: "5.56%",
    top: "5.56%",
    height: "88.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
  },
  icon2: {
    width: "14.04%",
    left: "85.96%",
  },
  parent: {
    width: "31.33%",
    bottom: 747,
    left: "63.2%",
    height: 18,
    right: "5.47%",
    position: "absolute",
  },
  groupInner: {
    elevation: 4,
    shadowRadius: 4,
    height: 288,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.bg,
  },
  rectangleView: {
    borderRadius: 8,
    width: 345,
    left: 0,
    top: 0,
    position: "absolute",
  },
  myMoneyIs: {
    textTransform: "capitalize",
  },
  myMoneyIsContainer: {
    top: 60,
    color: Color.wz1,
    width: 315,
    fontSize: 14,
    left: 15,
    textAlign: "left",
    fontFamily: "Arial",
    position: "absolute",
  },
  dearTeamsWe: {
    marginLeft: -157.5,
    top: 182,
    color: Color.color7,
    width: 315,
  },
  groupChildLayout: {
    borderWidth: 1.2,
    borderColor: "#34373e",
    borderStyle: "solid",
    borderRadius: 8,
    elevation: 4,
    shadowRadius: 4,
    height: 288,
    width: 345,
    shadowOpacity: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    position: "absolute",
  },
  r: {
    marginLeft: -39.5,
    textTransform: "uppercase",
    color: Color.bg,
    top: 0,
    left: "50%",
  },
  unionParent: {
    top: 151,
    left: 49,
    position: "absolute",
  },
  component7Icon: {
    top: 37,
    left: 313,
    width: 20,
    height: 20,
    position: "absolute",
  },
  text1: {
    left: 15,
    textAlign: "left",
  },
  text2: {
    left: 156,
  },
  automaticallyDeleteWithin: {
    left: 127,
    textAlign: "right",
  },
  withdrawalIssues: {
    top: 36,
    lineHeight: 14,
    width: 315,
    left: 15,
  },
  groupIcon: {
    top: 148,
    left: 15,
    position: "absolute",
  },
  rectangleGroup: {
    top: 102,
  },
  groupChild2: {
    elevation: 4,
    shadowRadius: 4,
    height: 288,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.bg,
  },
  groupChild3: {
    height: 136,
    backgroundColor: Color.bg3,
  },
  text4: {
    left: 46,
  },
  rectangleContainer: {
    top: 402,
  },
  groupChild6: {
    elevation: 4,
    shadowRadius: 4,
    height: 288,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.bg,
  },
  groupView: {
    top: 702,
  },
  child: {
    top: 613,
    left: 320,
    position: "absolute",
  },
  safeareaview: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bg,
  },
});

export default Component2;