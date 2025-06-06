import * as React from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ellipse271 from "../assets/ellipse27";
import Ellipse281 from "../assets/ellipse28";
import Vector18110 from "../assets/vector181";
import Group2711 from "../assets/group271";
import Vector220 from "../assets/vector2";
import Polygon31 from "../assets/polygon3";

const GroupComponent8 = () => {
  return (
    <View style={[styles.vectorParent, styles.groupChildLayout]}>
      <Ellipse271
        style={[styles.groupChild, styles.groupChildLayout]}
        width={240}
        height={74}
      />
      <View style={styles.groupParent}>
        <View style={styles.rectangleWrapper}>
          <LinearGradient
            style={[styles.groupItem, styles.groupChildBg]}
            locations={[0, 0.94]}
            colors={["#4b555c", "rgba(75, 85, 92, 0)"]}
            useAngle={true}
            angle={180}
          />
        </View>
        <LinearGradient
          style={[styles.groupInner, styles.groupChildBg]}
          locations={[0, 0.94]}
          colors={["#4b555c", "rgba(75, 85, 92, 0)"]}
          useAngle={true}
          angle={180}
        />
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.groupChildBg]}
          locations={[0, 0.94]}
          colors={["#4b555c", "rgba(75, 85, 92, 0)"]}
          useAngle={true}
          angle={180}
        />
        <LinearGradient
          style={[styles.groupChild1, styles.groupChildBg]}
          locations={[0, 0.94]}
          colors={["#4b555c", "rgba(75, 85, 92, 0)"]}
          useAngle={true}
          angle={180}
        />
        <LinearGradient
          style={[styles.groupChild2, styles.groupChildBg]}
          locations={[0, 0.94]}
          colors={["#4b555c", "rgba(75, 85, 92, 0)"]}
          useAngle={true}
          angle={180}
        />
      </View>
      <Ellipse281
        style={[styles.ellipseIcon, styles.iconLayout1]}
        width={89}
        height={16}
      />
      <Vector18110
        style={[styles.vectorIcon, styles.iconLayout]}
        width={139}
        height={46}
      />
      <Group2711
        style={[styles.groupIcon, styles.iconLayout]}
        width={75}
        height={46}
      />
      <Vector220 style={styles.groupChild3} width={24} height={32} />
      <Polygon31
        style={[styles.polygonIcon, styles.iconLayout1]}
        width={18}
        height={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 240,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: "transparent",
    borderRadius: 16,
    position: "absolute",
  },
  iconLayout1: {
    height: 16,
    position: "absolute",
  },
  iconLayout: {
    height: 46,
    position: "absolute",
  },
  groupChild: {
    top: 111,
    left: 0,
  },
  groupItem: {
    width: 15,
    top: 0,
    height: 104,
    left: 0,
  },
  rectangleWrapper: {
    left: 131,
    width: 15,
    top: 0,
    height: 104,
    position: "absolute",
  },
  groupInner: {
    top: 25,
    left: 98,
    width: 16,
    height: 79,
  },
  rectangleLineargradient: {
    top: 10,
    left: 64,
    height: 94,
    width: 15,
  },
  groupChild1: {
    top: 30,
    left: 32,
    width: 15,
    height: 74,
  },
  groupChild2: {
    top: 44,
    height: 60,
    width: 15,
    left: 0,
  },
  groupParent: {
    top: 21,
    width: 146,
    height: 104,
    left: 42,
    position: "absolute",
  },
  ellipseIcon: {
    top: 142,
    left: 74,
  },
  vectorIcon: {
    top: 0,
    left: 42,
  },
  groupIcon: {
    top: 94,
    left: 81,
  },
  groupChild3: {
    top: 63,
    left: 112,
    position: "absolute",
  },
  polygonIcon: {
    top: 50,
    left: 136,
  },
  vectorParent: {
    top: 126,
    left: 68,
    height: 184,
  },
});

export default GroupComponent8;
