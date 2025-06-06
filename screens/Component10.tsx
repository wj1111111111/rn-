import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Group73622 from "../assets/group736";
import Component228 from "../assets/";
import Stroke5 from "../assets/stroke";
import Ellipse271 from "../assets/ellipse27";
import Ellipse281 from "../assets/ellipse28";
import Vector1162 from "../assets/vector116";
import Group2711 from "../assets/group271";
import Vector221 from "../assets/vector2";
import Polygon31 from "../assets/polygon3";
import { Color } from "../GlobalStyles";

const Component10 = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={styles.r198000Parent}>
            <Text style={[styles.r198000, styles.r198000Typo]}>R$1980.00</Text>
            <Group73622 style={[styles.groupItem, styles.iconLayout2]} />
            <Component228 style={[styles.icon, styles.iconLayout2]} />
          </View>
        </View>
        <Stroke5 style={[styles.strokeIcon, styles.iconLayout2]} />
        <Text style={[styles.pgSlots, styles.noDataTypo]}>Notice</Text>
      </View>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/-16.png")}
      />
      <View style={[styles.vectorParent, styles.groupInnerLayout]}>
        <Ellipse271
          style={[styles.groupInner, styles.groupInnerLayout]}
          width={240}
          height={74}
        />
        <View style={styles.groupContainer}>
          <View style={styles.rectangleWrapper}>
            <LinearGradient
              style={[styles.rectangleLineargradient, styles.groupChildBg]}
              locations={[0, 0.94]}
              colors={["#4b555c", "rgba(75, 85, 92, 0)"]}
              useAngle={true}
              angle={180}
            />
          </View>
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
          <LinearGradient
            style={[styles.groupChild3, styles.groupChildBg]}
            locations={[0, 0.94]}
            colors={["#4b555c", "rgba(75, 85, 92, 0)"]}
            useAngle={true}
            angle={180}
          />
          <LinearGradient
            style={[styles.groupChild4, styles.groupChildBg]}
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
        <Vector1162
          style={[styles.vectorIcon, styles.iconLayout]}
          width={139}
          height={46}
        />
        <Group2711
          style={[styles.groupIcon, styles.iconLayout]}
          width={75}
          height={46}
        />
        <Vector221 style={styles.groupChild5} width={24} height={32} />
        <Polygon31
          style={[styles.polygonIcon, styles.iconLayout1]}
          width={18}
          height={16}
        />
      </View>
      <Text style={[styles.noData, styles.noDataTypo]}>No data</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  r198000Typo: {
    textAlign: "left",
    fontSize: 16,
  },
  iconLayout2: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  noDataTypo: {
    textTransform: "capitalize",
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  groupInnerLayout: {
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
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    backgroundColor: Color.bg1,
    left: "0%",
  },
  r198000: {
    left: "17.25%",
    lineHeight: 18,
    color: "#ffb900",
    fontFamily: "Arial",
    fontWeight: "700",
    textAlign: "left",
    fontSize: 16,
    top: "0%",
    position: "absolute",
  },
  groupItem: {
    height: "88.89%",
    width: "12.24%",
    top: "5.56%",
    right: "87.76%",
    bottom: "5.56%",
    left: "0%",
  },
  icon: {
    height: "81.11%",
    width: "12.94%",
    top: "11.11%",
    bottom: "7.78%",
    left: "87.06%",
    right: "0%",
    overflow: "hidden",
  },
  r198000Parent: {
    height: "20.93%",
    width: "34%",
    top: "54.65%",
    right: "5.47%",
    bottom: "24.42%",
    left: "60.53%",
    display: "none",
    position: "absolute",
  },
  rectangleParent: {
    left: "0%",
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
    color: Color.color,
    top: "55.81%",
    textAlign: "left",
    fontSize: 16,
    textTransform: "capitalize",
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
  groupInner: {
    top: 111,
    left: 0,
  },
  rectangleLineargradient: {
    width: 15,
    height: 104,
    left: 0,
    top: 0,
  },
  rectangleWrapper: {
    left: 131,
    width: 15,
    height: 104,
    top: 0,
    position: "absolute",
  },
  groupChild1: {
    top: 25,
    left: 98,
    width: 16,
    height: 79,
  },
  groupChild2: {
    top: 10,
    left: 64,
    height: 94,
    width: 15,
  },
  groupChild3: {
    top: 30,
    left: 32,
    width: 15,
    height: 74,
  },
  groupChild4: {
    top: 44,
    height: 60,
    width: 15,
    left: 0,
  },
  groupContainer: {
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
    left: 42,
    top: 0,
  },
  groupIcon: {
    top: 94,
    left: 81,
  },
  groupChild5: {
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
  noData: {
    marginLeft: -26.5,
    top: 318,
    left: "50%",
    fontSize: 14,
    lineHeight: 12,
    color: Color.wz1,
    textAlign: "center",
  },
  scrollview: {
    backgroundColor: Color.bg3,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default Component10;
