import * as React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Component284 from "../assets/";
import Ellipse30211 from "../assets/ellipse3021";
import Ellipse30311 from "../assets/ellipse3031";
import Vector371 from "../assets/vector37";
import { Color } from "../GlobalStyles";

const GroupComponent6 = () => {
  return (
    <View style={styles.parent}>
      <Component284 style={[styles.icon, styles.iconLayout1]} />
      <Text style={[styles.promotion, styles.depositTypo]}>Invite</Text>
      <Text style={[styles.home, styles.homeTypo]}>Teams</Text>
      <Text style={[styles.deposit, styles.depositTypo]}>Promotion</Text>
      <Ellipse30211 style={styles.groupChild} width={56} height={56} />
      <Ellipse30311 style={styles.groupItem} width={36} height={36} />
      <Image
        style={[styles.groupInner, styles.deposit1Position]}
        resizeMode="cover"
        source={require("../assets/frame-2131330123.png")}
      />
      <Text style={[styles.deposit1, styles.deposit1Position]}>
        {`Get
`}
        ₱1000
      </Text>
      <Text style={[styles.members, styles.homeTypo]}>Home</Text>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-130071.png")}
      />
      <Image
        style={styles.groupChild1}
        resizeMode="cover"
        source={require("../assets/group-130461.png")}
      />
      <View style={styles.vectorParent}>
        <Vector371 style={[styles.vectorIcon, styles.iconLayout1]} />
        <LinearGradient
          style={styles.rectangleLineargradient}
          locations={[0.1, 1]}
          colors={["#fff", "#85d420"]}
          useAngle={true}
          angle={180}
        />
      </View>
      <Image
        style={[styles.frameIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/frame-2131330456.png")}
      />
      <View
        style={[styles.group21313301211Wrapper, styles.group21313301211Layout]}
      >
        <View
          style={[styles.group21313301211, styles.group21313301211Layout]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  depositTypo: {
    textAlign: "center",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    fontSize: 12,
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    fontSize: 12,
    top: "71.43%",
    position: "absolute",
  },
  deposit1Position: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    position: "absolute",
  },
  group21313301211Layout: {
    height: 98,
    width: 98,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "65.31%",
    top: "26.53%",
    bottom: "8.16%",
  },
  promotion: {
    left: "25.33%",
    color: Color.wz1,
    top: "71.43%",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    fontSize: 12,
    position: "absolute",
  },
  home: {
    left: "83.73%",
    color: Color.wz1,
  },
  deposit: {
    left: "62.4%",
    color: Color.wz1,
    top: "71.43%",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    fontSize: 12,
    position: "absolute",
  },
  groupChild: {
    left: 160,
    top: 12,
    position: "absolute",
  },
  groupItem: {
    top: 22,
    left: 170,
    position: "absolute",
  },
  groupInner: {
    marginLeft: -33.5,
    width: 68,
    height: 44,
    top: 12,
    overflow: "hidden",
    left: "50%",
  },
  deposit1: {
    marginLeft: -17.5,
    top: "59.18%",
    textAlign: "center",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    fontSize: 12,
  },
  members: {
    left: "6.67%",
    color: Color.color3,
  },
  groupIcon: {
    top: 40,
    left: 31,
    height: 23,
  },
  groupChild1: {
    top: 30,
    left: 318,
    width: 35,
    height: 35,
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    top: "0%",
    bottom: "0%",
  },
  rectangleLineargradient: {
    top: 6,
    left: 10,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: 30,
    width: 4,
    height: 17,
    backgroundColor: "transparent",
    position: "absolute",
  },
  vectorParent: {
    height: "24.49%",
    width: "6.4%",
    top: "39.8%",
    right: "26.13%",
    bottom: "35.71%",
    left: "67.47%",
    position: "absolute",
  },
  frameIcon: {
    top: 39,
    left: 100,
    height: 24,
  },
  group21313301211: {
    left: 0,
  },
  group21313301211Wrapper: {
    left: 139,
  },
  parent: {
    height: "12.07%",
    top: "88.92%",
    bottom: "-0.99%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
});

export default GroupComponent6;