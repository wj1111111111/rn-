import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Group736129 from "../assets/group7361";
import Component300 from "../assets/";
import Stroke16 from "../assets/stroke";
import Group736130 from "../assets/group7361";
import Component301 from "../assets/";
import Union11 from "../assets/union1";
import Group127805 from "../assets/group12780";
import Ellipse1253 from "../assets/ellipse125";
import Group127761 from "../assets/group12776";
import Ellipse1254 from "../assets/ellipse125";
import Ellipse1255 from "../assets/ellipse125";
import Group9111 from "../assets/group911";
import { Color } from "../GlobalStyles";

const Component1 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <View style={styles.r198000Parent}>
            <Text style={[styles.r198000, styles.rTypo]}>R$1980.00</Text>
            <Group736129 style={[styles.groupItem, styles.groupItemLayout]} />
            <Component300 style={[styles.icon, styles.iconPosition]} />
          </View>
        </View>
        <Stroke16 style={[styles.strokeIcon, styles.groupItemLayout]} />
        <Text style={[styles.pgSlots, styles.deleteClr]}>Notifications</Text>
      </View>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/-11.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.rTypo]}>₱1980.00</Text>
        <Group736130 style={[styles.instanceChild, styles.groupItemLayout]} />
        <Component301 style={[styles.icon2, styles.iconPosition]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupChildPosition]} />
        <View style={[styles.rectangleView, styles.groupChild3Layout]} />
        <Text
          style={[styles.myMoneyIsContainer, styles.withdrawalIssuesLayout]}
          numberOfLines={1}
        >
          My money is missing my money is missing 
          <Text style={styles.myMoney}>{`my money `}</Text>
        </Text>
        <View style={[styles.groupChild1, styles.groupChildBorder]} />
        <View style={[styles.unionParent, styles.unionLayout]}>
          <Union11 style={styles.unionLayout} width={97} height={18} />
          <Text style={[styles.r, styles.rTypo]}>New reply</Text>
        </View>
        <Image
          style={[styles.component7Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/component-7.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>2024-01-27 01:00:00</Text>
        <Text style={[styles.text2, styles.textTypo]}>2024-04-15 16:59:59</Text>
        <Text style={[styles.automaticallyDeleteWithin, styles.textTypo]}>
          Automatically delete within 30 days
        </Text>
        <Text style={[styles.withdrawalIssues, styles.allLoadedTypo]}>
          Withdrawal issues
        </Text>
        <Group127805 style={styles.groupIcon} width={24} height={24} />
      </View>
      <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.groupChild3, styles.groupChild3Layout]} />
        <Text
          style={[styles.myMoneyIsContainer, styles.withdrawalIssuesLayout]}
          numberOfLines={1}
        >{`Failed to enter the gameFailed to enter the game
Failed `}</Text>
        <View style={[styles.groupChild4, styles.groupChildLayout]} />
        <Image
          style={[styles.component7Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/component-7.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>2024-01-27 01:00:00</Text>
        <Text style={[styles.automaticallyDeleteWithin, styles.textTypo]}>
          Automatically delete within 30 days
        </Text>
        <Text style={[styles.withdrawalIssues, styles.allLoadedTypo]}>
          Game issues
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupChildLayout]}>
        <View style={[styles.groupChild5, styles.groupChildLayout]} />
        <View style={[styles.rectangleView, styles.groupChild3Layout]} />
        <Text
          style={[styles.myMoneyIsContainer, styles.withdrawalIssuesLayout]}
          numberOfLines={1}
        >{`Failed to enter the gameFailed to enter the game
Failed `}</Text>
        <View style={[styles.groupChild7, styles.groupChildLayout]} />
        <Image
          style={[styles.component7Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/component-7.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>2024-01-27 01:00:00</Text>
        <Text style={[styles.automaticallyDeleteWithin, styles.textTypo]}>
          Automatically delete within 30 days
        </Text>
        <Text style={[styles.withdrawalIssues, styles.allLoadedTypo]}>
          Game issues
        </Text>
      </View>
      <Ellipse1253
        style={[styles.child, styles.itemPosition]}
        width={20}
        height={20}
      />
      <Group127761
        style={[styles.item, styles.itemPosition]}
        width={20}
        height={20}
      />
      <Ellipse1254
        style={[styles.inner, styles.itemPosition]}
        width={20}
        height={20}
      />
      <Text style={[styles.allLoaded, styles.allLoadedTypo]}>All loaded</Text>
      <View style={styles.child1} />
      <Ellipse1255
        style={[styles.ellipseIcon, styles.iconLayout]}
        width={20}
        height={20}
      />
      <Text style={[styles.selectAll, styles.deleteClr]}>Select all</Text>
      <LinearGradient
        style={styles.rectangleLineargradient}
        locations={[0, 1]}
        colors={["#e33f3f", "#c52e2e"]}
        useAngle={true}
        angle={180}
      />
      <Text style={[styles.delete, styles.deleteClr]}>Delete</Text>
      <Group9111
        style={[styles.child2, styles.childLayout]}
        width={40}
        height={40}
      />
      <Image
        style={[styles.child3, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/group-12706.png")}
      />
      <Image
        style={[styles.child4, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/group-12707.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rTypo: {
    fontFamily: "Arial",
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
  deleteClr: {
    color: Color.color,
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
  withdrawalIssuesLayout: {
    width: 315,
    left: 15,
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
  iconLayout: {
    height: 20,
    width: 20,
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
  allLoadedTypo: {
    lineHeight: 14,
    textAlign: "left",
    fontFamily: "Arial",
    position: "absolute",
  },
  groupChildLayout: {
    height: 89,
    width: 345,
    position: "absolute",
  },
  itemPosition: {
    left: 20,
    height: 20,
    width: 20,
    position: "absolute",
  },
  childLayout: {
    height: 40,
    width: 40,
    left: 320,
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
    fontWeight: "700",
    lineHeight: 18,
    fontFamily: "Arial",
    fontSize: 16,
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
    textTransform: "capitalize",
    lineHeight: 16,
    color: Color.color,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
    top: "55.81%",
  },
  groupParent: {
    height: 86,
    width: 375,
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
    fontWeight: "700",
    lineHeight: 18,
    fontFamily: "Arial",
    fontSize: 16,
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
    textAlign: "left",
    fontFamily: "Arial",
    position: "absolute",
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
    lineHeight: 18,
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
    width: 315,
    left: 15,
    color: Color.color,
    fontSize: 16,
    textTransform: "capitalize",
  },
  groupIcon: {
    top: 100,
    left: 15,
    position: "absolute",
  },
  rectangleGroup: {
    left: 56,
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
    left: 56,
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
    left: 56,
  },
  child: {
    top: 161,
  },
  item: {
    top: 283,
  },
  inner: {
    top: 361,
  },
  allLoaded: {
    top: 754,
    left: 160,
    color: Color.color6,
    fontSize: 14,
    fontWeight: "700",
  },
  child1: {
    top: 748,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    height: 64,
    backgroundColor: Color.bg3,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    width: 375,
    left: 0,
    position: "absolute",
  },
  ellipseIcon: {
    top: 770,
    left: 15,
  },
  selectAll: {
    top: 772,
    left: 43,
    textTransform: "capitalize",
    lineHeight: 16,
    color: Color.color,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 763,
    left: 265,
    borderRadius: 6,
    width: 95,
    height: 35,
    backgroundColor: "transparent",
    position: "absolute",
  },
  delete: {
    top: 773,
    left: 288,
    lineHeight: 16,
    color: Color.color,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  child2: {
    top: 613,
  },
  child3: {
    top: 493,
  },
  child4: {
    top: 549,
  },
  safeareaview: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bg,
  },
});

export default Component1;