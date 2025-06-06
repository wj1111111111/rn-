import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color } from "../GlobalStyles";

const GroupComponent9 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.rectangleParent, styles.iconPosition]}>
        <View style={styles.frameChild} />
        <Image
          style={styles.image218Icon}
          resizeMode="cover"
          source={require("../assets/image-218.png")}
        />
        <Image
          style={[styles.icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/2333-151.png")}
        />
        <Image
          style={styles.image213Icon}
          resizeMode="cover"
          source={require("../assets/image-213.png")}
        />
      </View>
      <View style={styles.groupWrapper}>
        <View style={styles.rectangleGroup}>
          <LinearGradient
            style={[styles.groupChild, styles.groupPosition]}
            locations={[0, 1]}
            colors={["#52d800", "#097500"]}
            useAngle={true}
            angle={180}
          />
          <LinearGradient
            style={[styles.groupItem, styles.groupPosition]}
            locations={[0, 1]}
            colors={["rgba(255, 249, 242, 0.6)", "rgba(255, 245, 234, 0)"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.start, styles.startPosition]}>23:00 Start</Text>
        </View>
      </View>
      <Text style={[styles.moneyRain, styles.startPosition]}>Money Rain</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: "transparent",
    borderRadius: 30,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  startPosition: {
    textAlign: "center",
    fontFamily: "Arial",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    top: 4,
    left: 5,
    borderRadius: 88,
    backgroundColor: "rgba(22, 36, 26, 0.9)",
    borderStyle: "solid",
    borderColor: "#70b615",
    borderWidth: 2,
    width: 78,
    height: 78,
    position: "absolute",
  },
  image218Icon: {
    top: 6,
    left: 7,
    borderRadius: 97,
    width: 74,
    height: 74,
    position: "absolute",
  },
  icon: {
    height: "56.1%",
    width: "52.27%",
    top: "20.73%",
    right: "23.86%",
    bottom: "23.17%",
    left: "23.86%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  image213Icon: {
    top: 17,
    left: 13,
    width: 63,
    height: 49,
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    left: 1,
    width: 88,
    height: 82,
  },
  groupChild: {
    marginLeft: -45,
    marginTop: -14,
    borderRadius: 30,
    height: 28,
    width: 90,
  },
  groupItem: {
    marginTop: -10,
    marginLeft: -38.7,
    width: 77,
    height: 14,
  },
  start: {
    marginTop: -11,
    marginLeft: -36,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "700",
    color: Color.color,
    textShadowColor: "#1e2024",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 0,
  },
  rectangleGroup: {
    left: "50%",
    top: "50%",
    marginLeft: -45,
    marginTop: -14,
    height: 28,
    width: 90,
    position: "absolute",
  },
  groupWrapper: {
    top: 68,
    left: 0,
    height: 28,
    overflow: "hidden",
    width: 90,
    position: "absolute",
  },
  moneyRain: {
    marginTop: 6,
    marginLeft: -44,
    fontSize: 12,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "900",
  },
  frameParent: {
    top: 491,
    left: 270,
    height: 96,
    width: 90,
    position: "absolute",
  },
});

export default GroupComponent9;
