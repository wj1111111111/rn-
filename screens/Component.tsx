import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Group736127 from "../assets/group7361";
import Component298 from "../assets/";
import Stroke15 from "../assets/stroke";
import Group736128 from "../assets/group7361";
import Component299 from "../assets/";
import Union4 from "../assets/union";
import Group127804 from "../assets/group12780";
import Group127863 from "../assets/group12786";
import { Color } from "../GlobalStyles";

const Component = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <View style={styles.r198000Parent}>
            <Text style={[styles.r198000, styles.textTypo1]}>R$1980.00</Text>
            <Group736127 style={[styles.groupItem, styles.groupItemLayout]} />
            <Component298 style={[styles.icon, styles.iconPosition]} />
          </View>
        </View>
        <Stroke15 style={[styles.strokeIcon, styles.pgSlotsPosition]} />
        <Text style={[styles.pgSlots, styles.pgSlotsTypo]}>Notifications</Text>
      </View>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/-1.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo1]}>₱1980.00</Text>
        <Group736128 style={[styles.instanceChild, styles.groupItemLayout]} />
        <Component299 style={[styles.icon2, styles.iconPosition]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupChildPosition]} />
        <View style={[styles.rectangleView, styles.groupChild3Layout]} />
        <Text
          style={[styles.myMoneyIsContainer, styles.withdrawalIssuesPosition]}
          numberOfLines={1}
        >
          My money is missing my money is missing 
          <Text style={styles.myMoney}>{`my money `}</Text>
        </Text>
        <View style={[styles.groupChild1, styles.groupChildBorder]} />
        <View style={[styles.unionParent, styles.unionLayout]}>
          <Union4 style={styles.unionLayout} width={97} height={18} />
          <Text style={[styles.r, styles.rLayout]}>New reply</Text>
        </View>
        <Image
          style={styles.component7Icon}
          resizeMode="cover"
          source={require("../assets/component-7.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>2024-01-27 01:00:00</Text>
        <Text style={[styles.text2, styles.textTypo]}>2024-04-15 16:59:59</Text>
        <Text style={[styles.automaticallyDeleteWithin, styles.textTypo]}>
          Automatically delete within 30 days
        </Text>
        <Text
          style={[styles.withdrawalIssues, styles.withdrawalIssuesPosition]}
        >
          Withdrawal issues
        </Text>
        <Group127804 style={styles.groupIcon} width={24} height={24} />
      </View>
      <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.groupChild3, styles.groupChild3Layout]} />
        <Text
          style={[styles.myMoneyIsContainer, styles.withdrawalIssuesPosition]}
          numberOfLines={1}
        >{`Failed to enter the gameFailed to enter the game
Failed `}</Text>
        <View style={[styles.groupChild4, styles.groupChildLayout]} />
        <Image
          style={styles.component7Icon}
          resizeMode="cover"
          source={require("../assets/component-7.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>2024-01-27 01:00:00</Text>
        <Text style={[styles.automaticallyDeleteWithin, styles.textTypo]}>
          Automatically delete within 30 days
        </Text>
        <Text
          style={[styles.withdrawalIssues, styles.withdrawalIssuesPosition]}
        >
          Game issues
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupChildLayout]}>
        <View style={[styles.groupChild5, styles.groupChildLayout]} />
        <View style={[styles.rectangleView, styles.groupChild3Layout]} />
        <Text
          style={[styles.myMoneyIsContainer, styles.withdrawalIssuesPosition]}
          numberOfLines={1}
        >{`Failed to enter the gameFailed to enter the game
Failed `}</Text>
        <View style={[styles.groupChild7, styles.groupChildLayout]} />
        <Image
          style={styles.component7Icon}
          resizeMode="cover"
          source={require("../assets/component-7.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>2024-01-27 01:00:00</Text>
        <Text style={[styles.automaticallyDeleteWithin, styles.textTypo]}>
          Automatically delete within 30 days
        </Text>
        <Text
          style={[styles.withdrawalIssues, styles.withdrawalIssuesPosition]}
        >
          Game issues
        </Text>
      </View>
      <Group127863 style={styles.child} width={40} height={40} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    fontWeight: "700",
    fontFamily: "Arial",
  },
  groupItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
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
  pgSlotsPosition: {
    top: "55.81%",
    position: "absolute",
  },
  pgSlotsTypo: {
    color: Color.color,
    textTransform: "capitalize",
    fontSize: 16,
  },
  groupLayout: {
    height: 136,
    width: 345,
    position: "absolute",
  },
  groupChildPosition: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    backgroundColor: Color.bg,
  },
  groupChild3Layout: {
    height: 88,
    backgroundColor: Color.bg3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: 345,
    left: 0,
    position: "absolute",
  },
  withdrawalIssuesPosition: {
    width: 315,
    left: 15,
    textAlign: "left",
    fontFamily: "Arial",
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1.2,
    borderColor: "#34373e",
    borderStyle: "solid",
    borderRadius: 8,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  unionLayout: {},
  rLayout: {
    lineHeight: 18,
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
  groupChildLayout: {
    height: 89,
    width: 345,
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
    fontFamily: "Arial",
    lineHeight: 18,
    position: "absolute",
    fontSize: 16,
    fontWeight: "700",
    top: "0%",
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
    position: "absolute",
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  pgSlots: {
    left: "8.8%",
    lineHeight: 16,
    top: "55.81%",
    position: "absolute",
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
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
    fontFamily: "Arial",
    lineHeight: 18,
    position: "absolute",
    fontSize: 16,
    fontWeight: "700",
    top: "0%",
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
    position: "absolute",
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
    height: 136,
    width: 345,
    position: "absolute",
    display: "none",
  },
  rectangleView: {
    top: 0,
  },
  myMoney: {
    textTransform: "capitalize",
  },
  myMoneyIsContainer: {
    top: 60,
    color: Color.wz1,
    fontSize: 14,
    overflow: "hidden",
  },
  groupChild1: {
    height: 136,
    width: 345,
    position: "absolute",
  },
  r: {
    marginLeft: -39.5,
    left: "50%",
    textTransform: "uppercase",
    color: Color.bg,
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Arial",
    top: 0,
  },
  unionParent: {
    left: 49,
    top: 103,
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
    top: 12,
    color: Color.wz2,
    lineHeight: 12,
    fontSize: 12,
    left: 15,
    textAlign: "left",
  },
  text2: {
    top: 106,
    left: 156,
    textAlign: "left",
  },
  automaticallyDeleteWithin: {
    left: 127,
    top: 12,
    color: Color.wz2,
    lineHeight: 12,
    fontSize: 12,
    textAlign: "right",
  },
  withdrawalIssues: {
    top: 36,
    lineHeight: 14,
    color: Color.color,
    textTransform: "capitalize",
    fontSize: 16,
  },
  groupIcon: {
    top: 100,
    left: 15,
    position: "absolute",
  },
  rectangleGroup: {
    left: 15,
    top: 103,
  },
  groupChild2: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    backgroundColor: Color.bg,
  },
  groupChild3: {
    top: 1,
  },
  groupChild4: {
    borderWidth: 1.2,
    borderColor: "#34373e",
    borderStyle: "solid",
    borderRadius: 8,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  rectangleContainer: {
    top: 250,
    left: 15,
  },
  groupChild5: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    backgroundColor: Color.bg,
  },
  groupChild7: {
    borderWidth: 1.2,
    borderColor: "#34373e",
    borderStyle: "solid",
    borderRadius: 8,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  groupView: {
    top: 352,
    left: 15,
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

export default Component;