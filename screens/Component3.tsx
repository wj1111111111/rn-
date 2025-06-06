import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Group736133 from "../assets/group7361";
import Component304 from "../assets/";
import Stroke18 from "../assets/stroke";
import Group736134 from "../assets/group7361";
import Component305 from "../assets/";
import Union22 from "../assets/union2";
import Group127807 from "../assets/group12780";
import Group1278014 from "../assets/group127801";
import Group1278024 from "../assets/group127802";
import Group127865 from "../assets/group12786";
import { Color } from "../GlobalStyles";

const Component3 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <View style={styles.r198000Parent}>
            <Text style={[styles.r198000, styles.textTypo1]}>R$1980.00</Text>
            <Group736133 style={[styles.groupItem, styles.groupItemPosition]} />
            <Component304 style={[styles.icon, styles.iconPosition]} />
          </View>
        </View>
        <Stroke18 style={styles.strokeIcon} />
        <Text style={styles.pgSlots}>Notifications</Text>
      </View>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/-11.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo1]}>₱1980.00</Text>
        <Group736134 style={[styles.instanceChild, styles.groupItemPosition]} />
        <Component305 style={[styles.icon2, styles.iconPosition]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <View style={[styles.rectangleView, styles.groupInnerLayout]} />
        <Text style={[styles.myMoneyIsContainer, styles.failedToEnterTypo]}>
          My money is missing my money is missing 
          <Text style={styles.myMoneyIs}>
            my money is missing my money is missing .my money is missing my
            money is missing.My money is missing my money is missing 
          </Text>
        </Text>
        <Text
          style={[styles.dearTeamsWe, styles.dearPosition]}
        >{`Dear Teams, we have received your question!
We have not found any abnormalities in the game.
You can try to check whether the network is normal.
Good luck!`}</Text>
        <View style={[styles.groupChild1, styles.groupChildBorder]} />
        <View style={[styles.unionParent, styles.unionLayout]}>
          <Union22 style={styles.unionLayout} width={97} height={18} />
          <Text style={styles.r}>New reply</Text>
        </View>
        <Image
          style={[styles.component7Icon, styles.component7IconLayout]}
          resizeMode="cover"
          source={require("../assets/component-71.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>2024-01-27 01:00:00</Text>
        <Text style={[styles.text2, styles.textTypo]}>2024-04-15 16:59:59</Text>
        <Text
          style={[styles.automaticallyDeleteWithin, styles.textTypo]}
        >{`Automatically delete within 30 daysAutomatically delete `}</Text>
        <Text style={[styles.withdrawalIssues, styles.issuesTypo]}>
          Withdrawal issues
        </Text>
        <Group127807
          style={[styles.groupIcon, styles.groupLayout]}
          width={24}
          height={24}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupPosition]}>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <Text
          style={[styles.failedToEnter, styles.failedToEnterTypo]}
        >{`Failed to enter the gameFailed to enter the game
Failed to enter the gameFailed to enter the game
Failed to enter the gameFailed to enter the gameFailed to enter the game`}</Text>
        <Text
          style={[styles.dearTeamsWe1, styles.dearPosition]}
        >{`Dear Teams, we have received your question!
We have not found any abnormalities in the game.
You can try to check whether the network is normal.
Good luck!`}</Text>
        <View style={[styles.groupChild4, styles.groupChildBorder]} />
        <Image
          style={[styles.component7Icon1, styles.component7IconLayout]}
          resizeMode="cover"
          source={require("../assets/component-71.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>2024-01-27 01:00:00</Text>
        <Text style={[styles.text4, styles.textTypo]}>2024-04-15 16:59:59</Text>
        <Text style={[styles.automaticallyDeleteWithin1, styles.textTypo]}>
          Automatically delete within 30 days
        </Text>
        <Text style={[styles.gameIssues, styles.issuesTypo]}>Game issues</Text>
        <Group1278014
          style={[styles.groupChild5, styles.groupLayout]}
          width={24}
          height={24}
        />
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={[styles.groupChild6, styles.groupChildPosition]} />
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <Text
          style={[styles.failedToEnter, styles.failedToEnterTypo]}
        >{`Failed to enter the gameFailed to enter the game
Failed to enter the gameFailed to enter the game
Failed to enter the gameFailed to enter the gameFailed to enter the game`}</Text>
        <Text
          style={[styles.dearTeamsWe1, styles.dearPosition]}
        >{`Dear Teams, we have received your question!
We have not found any abnormalities in the game.
You can try to check whether the network is normal.
Good luck!`}</Text>
        <View style={[styles.groupChild8, styles.groupChildBorder]} />
        <Image
          style={[styles.component7Icon1, styles.component7IconLayout]}
          resizeMode="cover"
          source={require("../assets/component-71.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>2024-01-27 01:00:00</Text>
        <Text style={[styles.text4, styles.textTypo]}>2024-04-15 16:59:59</Text>
        <Text style={[styles.automaticallyDeleteWithin1, styles.textTypo]}>
          Automatically delete within 30 days
        </Text>
        <Text style={[styles.gameIssues, styles.issuesTypo]}>Game issues</Text>
        <Group1278024
          style={[styles.groupChild5, styles.groupLayout]}
          width={24}
          height={24}
        />
      </View>
      <Group127865 style={styles.child} width={40} height={40} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 18,
    fontSize: 16,
    top: "0%",
    position: "absolute",
  },
  groupItemPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "5.56%",
    top: "5.56%",
    height: "88.89%",
    left: "0%",
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
  groupPosition: {
    width: 345,
    left: 15,
    position: "absolute",
  },
  groupInnerLayout: {
    borderRadius: 8,
    width: 345,
    left: 0,
    position: "absolute",
  },
  failedToEnterTypo: {
    width: 315,
    color: Color.wz1,
    fontSize: 14,
    left: 15,
    textAlign: "left",
    fontFamily: "Arial",
    position: "absolute",
  },
  dearPosition: {
    color: Color.color7,
    marginLeft: -157.5,
    left: "50%",
    width: 315,
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Arial",
    lineHeight: 18,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1.2,
    borderColor: "#34373e",
    borderStyle: "solid",
    borderRadius: 8,
    elevation: 4,
    shadowRadius: 4,
    width: 345,
    shadowOpacity: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    position: "absolute",
  },
  unionLayout: {},
  component7IconLayout: {
    height: 20,
    width: 20,
    left: 313,
    position: "absolute",
  },
  textTypo: {
    color: Color.wz2,
    lineHeight: 12,
    fontSize: 12,
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  issuesTypo: {
    lineHeight: 14,
    width: 315,
    left: 15,
    color: Color.color,
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: "Arial",
    fontSize: 16,
    position: "absolute",
  },
  groupLayout: {
    height: 24,
    width: 24,
    left: 15,
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
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pgSlots: {
    left: "8.8%",
    lineHeight: 16,
    color: Color.color,
    textTransform: "capitalize",
    top: "55.81%",
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    fontSize: 16,
    position: "absolute",
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
    height: 288,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.bg,
    top: 12,
  },
  rectangleView: {
    height: 148,
    backgroundColor: Color.bg3,
    top: 0,
    borderRadius: 8,
  },
  myMoneyIs: {
    textTransform: "capitalize",
  },
  myMoneyIsContainer: {
    top: 72,
  },
  dearTeamsWe: {
    top: 194,
  },
  groupChild1: {
    height: 300,
  },
  r: {
    marginLeft: -39.5,
    textTransform: "uppercase",
    color: Color.bg,
    left: "50%",
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Arial",
    lineHeight: 18,
    top: 0,
    position: "absolute",
  },
  unionParent: {
    top: 163,
    left: 49,
    position: "absolute",
  },
  component7Icon: {
    top: 49,
  },
  text1: {
    top: 12,
    left: 15,
    lineHeight: 12,
    fontSize: 12,
    textAlign: "left",
  },
  text2: {
    top: 166,
    left: 156,
    textAlign: "left",
  },
  automaticallyDeleteWithin: {
    left: 128,
    width: 202,
    top: 12,
    textAlign: "right",
  },
  withdrawalIssues: {
    top: 48,
  },
  groupIcon: {
    top: 160,
  },
  rectangleGroup: {
    top: 102,
    height: 300,
  },
  groupChild2: {
    height: 288,
    elevation: 4,
    shadowRadius: 4,
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
  failedToEnter: {
    top: 60,
  },
  dearTeamsWe1: {
    top: 182,
  },
  groupChild4: {
    height: 288,
  },
  component7Icon1: {
    top: 37,
  },
  text4: {
    top: 154,
    left: 46,
    textAlign: "left",
  },
  automaticallyDeleteWithin1: {
    left: 127,
    top: 12,
    textAlign: "right",
  },
  gameIssues: {
    top: 36,
  },
  groupChild5: {
    top: 148,
  },
  rectangleContainer: {
    top: 414,
    height: 288,
  },
  groupChild6: {
    height: 288,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.bg,
  },
  groupChild8: {
    height: 288,
  },
  groupView: {
    top: 714,
    height: 288,
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

export default Component3;